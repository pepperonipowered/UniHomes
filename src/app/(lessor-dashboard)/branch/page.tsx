'use client'
import { ContentLayout } from "@/modules/lessor-dashboard/components/ContentLayout";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge"
import Link from "next/link";
import PageContent from "@/modules/lessor-dashboard/components/PageContent";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react"
import CreateRoom from "@/modules/lessor-dashboard/create listing/CreateRoom";

const Branch = () => {
    return (
        <ContentLayout title="Branch 1">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/branch">Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Branch 1</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* Put page content here */}
            <PageContent>
                <h3 className="col-span-full scroll-m-20 text-2xl font-semibold tracking-tight">
                    Rooms for Branch 1
                </h3>
                <div className="col-span-full flex gap-3">
                    <CreateRoom
                        trigger={
                            <Button className="space-x-1" size={"sm"}>
                                <span>Add room</span>
                                <Plus className="w-3 h-auto" strokeWidth="3" />
                            </Button>
                        }
                    />
                </div>
                <div className="col-span-full md:col-span-4">
                    <Card className="relative h-max border-none shadow-md">
                        <CardHeader className="px-1 overflow-hidden py-1.5 absolute top-1 left-1 w-max shadow-sm ml-r z-10">
                            <Badge className="bg-green-500 hover:bg-green-500/90">
                                Available
                            </Badge>
                        </CardHeader>
                        <div className="">
                            <img
                                src={"https://picsum.photos/400/250"}
                                className="bg-cover bg-center rounded-lg"
                            />
                        </div>
                        <CardFooter className="px-3 bg-secondary/20 border-white/20 backdrop-blur-md border overflow-hidden py-1.5 absolute before:rounded-xl rounded-xl bottom-1 w-[calc(100%_-_9px)] shadow-sm ml-1 z-10">
                            <div className="flex justify-between w-full items-center">
                                <p className="text-xs text-white truncate">
                                    Address lorem ipsum dolor sit amet.
                                </p>
                                <Link
                                    href={"/branch"}
                                    className={cn(
                                        buttonVariants({
                                            variant: "default",
                                            size: "sm",
                                        }),
                                        "m-0 text-xs rounded-full text-white"
                                    )}
                                >
                                    See more
                                </Link>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </PageContent>
        </ContentLayout>
    );
};

export default Branch;
