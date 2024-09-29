import NavBar from '@/components/navbar/Navbar';
import { Footer } from '@/modules/lessor-dashboard/components/Footer';
import Listing from '@/modules/listing/Listing';

export default async function searchListing() {
	return (
		<div className='h-screen overflow-auto'>
			<div className='sticky top-0 z-50'>
				<NavBar />
			</div>
			<div className='mt-16 sm:mt-16 md:mt-12 lg:mt-0 '>
				<Listing />
			</div>
			<Footer />
		</div>
	);
}
