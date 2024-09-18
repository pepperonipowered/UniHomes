// import HomeScreen from '@/modules/home/screens/HomeScreen';
import NavBar from '@/components/navbar/Navbar';
import FavoritesScreen from '@/modules/favorites/screens/FavoritesScreen';

export default function Home() {
	return (
		<div className=''>
			<NavBar />
			{/* <HomeScreen /> */}
			<FavoritesScreen />
		</div>
	);
}
