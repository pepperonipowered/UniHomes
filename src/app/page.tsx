import NavBar from '@/components/navbar/Navbar';
import { AdminDashboardScreen } from '@/modules/admin-dashboard/screen/AdminDashboardScreen';

export default async function Home() {
	return (
		<div className=''>
			<NavBar />
			<AdminDashboardScreen />
		</div>
	);
}
