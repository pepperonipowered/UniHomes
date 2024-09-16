import React from "react";

import { Card, CardContent } from "@/components/ui/card";

const PageContent = ({ children } : { children: React.ReactNode }) => {
    return (
        <Card className="rounded-lg border-none mt-6">
            <CardContent className="p-6">
                <div className="grid grid-cols-3 grid-flow-row gap-3 min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
                    {children}
                </div>
            </CardContent>
        </Card>
    );
}


export default PageContent