import NavBar from '@/components/navbar/Navbar';
import Footer  from "@/modules/home/components/Footer";
import Listing from '@/modules/listing/Listing';

export const metadata = {
    title: 'Listings | Unihomes',
    description: 'Web Platform',
  }
export default async function searchListing() {
	return (
        <>
            <NavBar />
            <Listing />
            <Footer />
        </>
    );
}
