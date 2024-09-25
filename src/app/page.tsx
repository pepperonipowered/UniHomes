import NavBar from '@/components/navbar/Navbar';
import { AdminDashboardScreen } from '@/modules/admin-dashboard/screen/AdminDashboardScreen';
import Footer from '@/modules/home/components/Footer';
import Listing from '@/modules/listing/Listing';
import Property from '@/modules/property/Property';

export default async function Home() {
	return (
		<div className=''>
			{/* <NavBar /> */}
			{/* <AdminDashboardScreen /> */}
			{/* <Listing /> */}
			<Property />
			{/* <Footer /> */}
		</div>
	);
}
