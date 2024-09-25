import NavBar from '@/components/navbar/Navbar';
import LessorBusinessProfileScreen from '@/modules/lessor-dashboard/screens/LessorBusinessProfileScreen';

// import { AdminDashboardScreen } from '@/modules/admin-dashboard/screen/AdminDashboardScreen';

export default async function Home() {
	return (
		<div className=''>
			<NavBar />
			<LessorBusinessProfileScreen />
		</div>
	);
}
