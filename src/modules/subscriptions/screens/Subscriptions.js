import Title from "../components/Title";
import Free_Card from "../components/Free_Card";
import Premium_Card from "../components/Premium_Card";
import Main from "../components/Main";
const Subscriptions = () => {
  return (
    <section className="dark:bg-secondary pt-[80px] pb-10  md:p-8 md:pt-[100px] lg:pt-[30px] h-full">
      <Main />
      <Title />
      <div className="flex flex-col justify-center md:flex-row w-full">
        <div className="md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4">
          <Free_Card />
        </div>
        <div className="md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4 ">
          <Premium_Card />
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;
