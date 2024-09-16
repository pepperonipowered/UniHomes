import { ContentLayout } from "@/modules/lessor-dashboard/components/ContentLayout"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
  } from "@/components/ui/breadcrumb";
import Link from "next/link";
import PageContent from "@/modules/lessor-dashboard/components/PageContent";
import { buttonVariants } from "@/components/ui/button";

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
                          href={"/"}
                          className={buttonVariants({ variant: "secondary" })}
                      >
                          See more
                      </Link>
                  </CardFooter>
              </Card>
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
                          href={"/"}
                          className={buttonVariants({ variant: "secondary" })}
                      >
                          See more
                      </Link>
                  </CardFooter>
              </Card>
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
                          href={"/"}
                          className={buttonVariants({ variant: "secondary" })}
                      >
                          See more
                      </Link>
                  </CardFooter>
              </Card>
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
                          href={"/"}
                          className={buttonVariants({ variant: "secondary" })}
                      >
                          See more
                      </Link>
                  </CardFooter>
              </Card>
          </PageContent>
      </ContentLayout>
  );
}

export default Branch