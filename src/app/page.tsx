import HomeScreen from "@/modules/home/screens/HomeScreen";
import NavBar from "@/components/navbar/Navbar";
import Terms_Conditions from "@/modules/terms_and_conditions/screen/Terms_Conditions";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Terms_Conditions />
    </div>
  );
}
