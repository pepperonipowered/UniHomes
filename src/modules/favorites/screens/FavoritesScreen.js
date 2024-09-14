import FavoriteListings from '@/modules/favorites/components/FavoriteListings';
import NavBar from '@/components/navbar/Navbar';
import HeroSection from '@/modules/favorites/components/Hero';


export default function FavoritesScreen() {
    return (
        <div>
            {/* DESKTOP */}
            <div className='hidden lg:block'>
                <NavBar/>
                <div className='min-h-screen flex justify-center'>
                    <HeroSection/>
                    <FavoriteListings/>
                </div>
            </div>

            {/* MOBILE */} 
            <div className='lg:hidden'>
                <NavBar/>
                <div className='min-h-screen flex justify-center'>
                    <HeroSection/>
                </div>
                <div className='min-h-screen flex justify-center'>
                    <FavoriteListings/>
                </div>
            </div>
        </div>
    );
}