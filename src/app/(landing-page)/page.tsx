import NavBar from "@/components/navbar/Navbar";
import HomeScreen from "@/modules/home/screens/HomeScreen";
import Footer from "@/modules/home/components/Footer";
import Subscription from "@/modules/subscriptions/screen/Subscriptions";
export default async function Home() {
  return (
    <div className="h-screen overflow-auto">
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      <div className="mt-16 sm:mt-16 md:mt-12 lg:mt-0 ">
        {/* <HomeScreen /> */}
        <Subscription />
      </div>
      <Footer />
    </div>
  );
}
