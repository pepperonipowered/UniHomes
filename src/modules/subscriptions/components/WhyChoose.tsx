import spiels from "@/lib/constants/spiels";
import { WobbleCard } from "@/components/ui/wobble-card";
const WhyChoose = () => {
  return (
    <section className="mt-24">
      <div className="flex flex-col mx-5 text-center ">
        <div className="flex justify-center">
          <div className="text-4xl font-extrabold mb-10">
            <h1 className="">{spiels.WHY_CHOOSE}</h1>
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          {spiels.WHY_CHOOSE_CARDS.map((item, index) => (
            <WobbleCard
              containerClassName={`col-span-1 ${
                index === 2 ? "md:col-span-2" : ""
              } lg:col-span-1 h-full bg-primary min-h-[50px] lg:min-h-[50px]`}
              className="dark:bg-popover-foreground"
              key={index}
            >
              <div className="max-w-2xl">
                <h3 className="text-left text-balance text-base md:text-xl lg:text-xl font-semibold tracking-[-0.015em] text-primary-foreground dark:text-secondary">
                  {item.label}
                </h3>
                <p className="mt-4 text-left text-md sm:text-sm lg:text-md 2xl:text-md xs:text-sm text-neutral-200 dark:text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </WobbleCard>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChoose;
