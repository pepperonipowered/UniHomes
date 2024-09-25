import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import spiels from "@/lib/constants/spiels";
const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });
import { Card } from "@/components/ui/card";
const Main = () => {
  return (
    <section className="h-full">
      <div className="flex flex-col w-full h-screen">
        <div className="h-3/5">
          <div className="flex flex-col h-full">
            <div className="flex justify-center h-2/5 ">
              <div className="flex items-end px-4 text-center pb-8 text-4xl">
                <div className={poppinsBold.className}>
                  <h1>Revolutionize Your Unihomes Experience</h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center px-10 pt-5 h-1/4">
              <h1 className="flex text-center">
                Unlock the full potential of our platform with the Premium Plan,
                tailored for dorm owners. Showcase your dorms, manage listings
                effortlessly, and connect with potential tenants, all while
                enjoying exclusive features designed to enhance your rental
                experience.
              </h1>
            </div>
            <div className="flex justify-center items-start h-2/5 pt-10 px-9">
              <div className="flex gap-4  w-full">
                <Button variant="outline" className="w-full">
                  {spiels.BUTTON_START_NOW}
                </Button>
                <Button variant="outline" className="w-full ">
                  {spiels.BUTTON_EXPLORE_NOW}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-2/5 border pb-10">
          <div className="grid gap-4">
            <Card className="h-8">asdas</Card>

            <Card className="h-8">asdasd</Card>

            <Card className="h-8">asdasd</Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Main;
