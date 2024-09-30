"use client";

import { createBranchSchema } from "@/lib/schemas/createBranchSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const addBranchSchema = z.infer<typeof createBranchSchema>

const AddBranchForm = () => {
    // 1. Define your form.
    const AddBranch = useForm<>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return <div></div>;
};

export default AddBranchForm;
