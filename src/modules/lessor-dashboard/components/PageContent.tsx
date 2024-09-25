import React from "react";

import { Card, CardContent } from "@/components/ui/card";

const PageContent = ({ children } : { children: React.ReactNode }) => {
    return (
        <Card className="rounded-lg border-none mt-6">
            <CardContent className="p-6">
                <div className="grid grid-cols-12 grid-flow-row gap-3 ">
                    {children}
                </div>
            </CardContent>
        </Card>
    );
}

// min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]
export default PageContent