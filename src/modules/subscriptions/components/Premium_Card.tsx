import { Poppins } from "next/font/google";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import spiels from "@/lib/constants/spiels";
const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });
const poppinsMedium = Poppins({ weight: "500", subsets: ["latin"] });
const poppinsSmall = Poppins({ weight: "300", subsets: ["latin"] });

const Premium_Card = () => {
  return (
    <section className="">
      <div className="mt-6">
        <div className="flex justify-center md:h-[600px]">
          <div className="w-10/12 border border-sky-700 rounded-lg p-7">
            <div className={poppinsMedium.className}>
              <p className="text-lg w-full mb-10 text-sky-700">Premium Plan</p>
            </div>
            <div className={poppinsBold.className}>
              <h1 className="text-4xl w-full">Premium</h1>
            </div>
            <div className={poppinsSmall.className}>
              <p className="text-md w-full mt-10">
                Unlock the full potential of our website with the Premium plan,
                perfect for booking a dorm. Enjoy these exclusive features:
              </p>

              <div className="flex items-center space-x-2 mt-10">
                <CheckCircleIcon className="w-6 h-6 text-blue-500" />
                <p className="text-md">Unlimited Branch Listing</p>
              </div>

              <div className="flex items-center space-x-2 mt-4">
                <CheckCircleIcon className="w-6 h-6 text-blue-500" />
                <p className="text-md">Add Detailed Descriptions and Photos</p>
              </div>

              <div className="flex items-center space-x-2 mt-4">
                <CheckCircleIcon className="w-6 h-6 text-blue-500" />
                <p className="text-md">
                  In-App Messaging for Easy Communication
                </p>
              </div>
            </div>
            <div className="flex justify-center pt-24 md:pt-[79px] lg:pt-[86px] xl:pt-[120px] 2xl:pt-[75px]">
              <Button className="w-full md:w-full bg-transparent border-2 border-sky-700  text-white hover:bg-blue-600 align-middle">
                {spiels.BUTTON_BUY}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premium_Card;
