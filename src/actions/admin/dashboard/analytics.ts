"use server"

import { createClient } from "@/utils/supabase/server"

export const getTotalRevenue = async () => {
    const supabase = createClient();

    const currentDate = new Date();
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const startOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    const endOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);

    // Step 1: Get transactions for the current month
    const { data: currentMonthTransactions, error: currentMonthError } = await supabase
        .from("transaction")
        .select("unit_id")
        .eq("isPaid", true)
        .eq("transaction_status", "reserved")
        .gte("created_at", startOfMonth.toISOString());

    if (currentMonthError) {
        return currentMonthError;
    }

    const currentMonthUnitIds = currentMonthTransactions.map((transaction) => transaction.unit_id);

    // Step 2: Get transactions for the previous month
    const { data: lastMonthTransactions, error: lastMonthError } = await supabase
        .from("transaction")
        .select("unit_id")
        .eq("isPaid", true)
        .eq("transaction_status", "reserved")
        .gte("created_at", startOfLastMonth.toISOString())
        .lte("created_at", endOfLastMonth.toISOString());

    if (lastMonthError) {
        return lastMonthError;
    }

    const lastMonthUnitIds = lastMonthTransactions.map((transaction) => transaction.unit_id);

    // Step 3: Get prices for units in the current month
    const { data: currentMonthUnitData, error: currentMonthUnitError } = await supabase
        .from("unit")
        .select("id, price")
        .in("id", currentMonthUnitIds);

    if (currentMonthUnitError) {
        return currentMonthUnitError;
    }

    // Step 4: Get prices for units in the previous month
    const { data: lastMonthUnitData, error: lastMonthUnitError } = await supabase
        .from("unit")
        .select("id, price")
        .in("id", lastMonthUnitIds);

    if (lastMonthUnitError) {
        return lastMonthUnitError;
    }

    // Step 5: Calculate the 3% commission for the current month
    const currentMonthRevenue = currentMonthTransactions.reduce((total, transaction) => {
        const unit = currentMonthUnitData.find((unit) => unit.id === transaction.unit_id);
        const commission = unit ? unit.price * 0.03 : 0;
        return total + commission;
    }, 0);

    // Step 6: Calculate the 3% commission for the previous month
    const lastMonthRevenue = lastMonthTransactions.reduce((total, transaction) => {
        const unit = lastMonthUnitData.find((unit) => unit.id === transaction.unit_id);
        const commission = unit ? unit.price * 0.03 : 0;
        return total + commission;
    }, 0);

    // Step 7: Calculate percentage increase
    const percentageIncrease = lastMonthRevenue > 0
        ? ((currentMonthRevenue - lastMonthRevenue) / lastMonthRevenue) * 100
        : 0;

    console.log("Current Month Revenue:", currentMonthRevenue);
    console.log("Last Month Revenue:", lastMonthRevenue);
    console.log("Percentage Increase:", percentageIncrease);    

    return {
        currentMonthRevenue,
        lastMonthRevenue,
        percentageIncrease,
    };
};



export const getCompanies = async () => {
    const supabase = createClient();
    const { data, error } = await supabase
        .from("company")
        .select(`
            id,
            company_name,
            logo
            `)

    if (error?.code) {
        return error
    }
    return data
}

export const getCompanyTransactions = async (companyId: number) => {
    const supabase = createClient();
    const { data: propertyData, error: propertyError } = await supabase
        .from("property")
        .select("id, title")
        .eq("company_id", companyId);

    if (propertyError) {
        return propertyError;
    }

    const propertyIds = propertyData.map((property) => property.id);

    const { data: unitData, error: unitError } = await supabase
        .from("unit")
        .select("id, title, price")
        .in("property_id", propertyIds);

    if (unitError) {
        return unitError;
    }

    const unitIds = unitData.map((unit) => unit.id);

    const { data: transactionData, error: transactionError } = await supabase
        .from("transaction")
        .select("*")
        .in("unit_id", unitIds)
        .eq("isPaid", true);

    if (transactionError) {
        return transactionError;
    }

    // Add 3% price calculation for each transaction
    const transactionsWithCommission = transactionData.map((transaction) => {
        const unit = unitData.find((unit) => unit.id === transaction.unit_id);
        const commission = unit ? unit.price * 0.03 : 0; // Calculate 3%
        return {
            ...transaction,
            commission, // Add calculated commission to the transaction
        };
    });

    return transactionsWithCommission;
};
