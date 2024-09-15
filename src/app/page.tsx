import NavBar from "@/components/navbar/Navbar";
import HomeScreen from "@/modules/home/screens/HomeScreen";
import Profile_Hosting from "@/modules/profile/screens/Profile_Hosting";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Profile_Hosting />
    </div>
  );
}
