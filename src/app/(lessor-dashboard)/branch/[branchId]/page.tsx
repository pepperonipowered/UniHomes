import React from 'react'

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";

const BranchDetails = ({ params }: { params: { branchId: string } }) => {
  return (
      <div className='space-y-3'>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Rooms for Branch: { params.branchId }</h4>
            <Card className="">
                <CardHeader>
                    <CardTitle>
                        <img src={"https://picsum.photos/400/250"} />
                    </CardTitle>
                    <CardDescription>
                        Some address here Lorem ipsum dolor sit amet.
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <Link
                        href={"/branch"}
                        className={buttonVariants({ variant: "secondary" })}
                    >
                        See more
                    </Link>
                </CardFooter>
            </Card>
      </div>
  );
}

export default BranchDetails