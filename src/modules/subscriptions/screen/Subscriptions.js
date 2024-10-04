import Pricing from "../components/Landing";
import Boost from "../components/Boost";
import Reservation from "../components/Reservation";
import WhyChoose from "../components/WhyChoose";
import HowItWorks from "../components/HowItWorks";
import GetStarted from "../components/GetStarted";
const Subscriptions = () => {
  return (
    <section className="pt-[15%]">
      <Pricing />
      <Boost />
      <Reservation />
      <WhyChoose />
      <HowItWorks />
      <GetStarted />
    </section>
  );
};

export default Subscriptions;
