import { Poppins } from "next/font/google";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import spiels from "@/lib/constants/spiels";
const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });
const poppinsMedium = Poppins({ weight: "500", subsets: ["latin"] });
const poppinsSmall = Poppins({ weight: "300", subsets: ["latin"] });

const Free_Card = () => {
  return (
    <section className="">
      <div className="mt-6">
        <div className="flex justify-center md:h-[600px] ">
          <div className="w-10/12 border border-sky-700 rounded-lg p-7">
            <div className={poppinsMedium.className}>
              <p className="text-lg w-full mb-10 text-sky-700">Current Plan</p>
            </div>
            <div className={poppinsBold.className}>
              <h1 className="text-4xl w-full">Free</h1>
            </div>
            <div className={poppinsSmall.className}>
              <p className="text-md w-full mt-10">
                All the features that are freely available on the website are
                free to use.
              </p>

              <div className="flex items-center space-x-2 mt-14">
                <CheckCircleIcon className="w-6 h-6 text-blue-500" />
                <p className="text-md">Limited Branch Listing</p>
              </div>
            </div>
            <div className="flex justify-center pt-24 md:pt-[215px] lg:pt-[222px] xl:pt-[232px] 2xl:pt-[235px]">
              <Button className="w-full md:w-full bg-transparent border-2 border-sky-700  text-white hover:bg-blue-600">
                {spiels.BUTTON_BUY}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Free_Card;
