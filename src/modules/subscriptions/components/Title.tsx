import { Poppins } from "next/font/google";
import { CardSpotlight } from "@/components/ui/card-spotlight";
const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });
const poppinsSmall = Poppins({ weight: "300", subsets: ["latin"] });
const Title = () => {
  // const CheckIcon = () => {
  //   return (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="currentColor"
  //       className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
  //     >
  //       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  //       <path
  //         d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
  //         fill="currentColor"
  //         strokeWidth="0"
  //       />
  //     </svg>
  //   );
  // };
  // const Step = ({ title }: { title: string }) => {
  //   return (
  //     <li className="flex gap-2 items-start">
  //       <CheckIcon />
  //       <p className="text-white">{title}</p>
  //     </li>
  //   );
  // };
  return (
    <section className="">
      <div className="flex flex-col gap-3 md:mt-10">
        <div className={poppinsBold.className}>
          <h1 className="text-4xl text-center">Need more features?</h1>
        </div>
        <div className={poppinsBold.className}>
          <h1 className="text-3xl text-center w-full">We've got you covered</h1>
        </div>
        <div className={poppinsSmall.className}>
          <div className="flex justify-center my-12">
            <div className="text-lg text-center w-10/12">
              <p>
                From free features to complete website experience tailored to
                your needs. Simple pricing, no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Title;
