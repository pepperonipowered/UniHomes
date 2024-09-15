import NavBar from '@/components/navbar/Navbar';
import { MessagesScreen } from '@/modules/messages/screens/MessagesScreen';
// import HomeScreen from '@/modules/home/screens/HomeScreen';

export default function Home() {
	return (
		<div>
			<NavBar />
			{/* <HomeScreen /> */}
			<MessagesScreen />
		</div>
	);
}
