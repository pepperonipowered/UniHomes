import { ContentLayout } from "@/modules/lessor-dashboard/components/ContentLayout"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils";
import Image from "next/image";

const Branch = () => {
  return (
      <ContentLayout title="Branch 1">
          <div className="flex flex-row gap-3">
              <Card className="w-1/3">
                  <CardHeader>
                      <CardTitle>Branch Name</CardTitle>
                      <CardDescription>Address</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <p>Card Content</p>
                  </CardContent>
              </Card>
          </div>
      </ContentLayout>
  );
}

export default Branch