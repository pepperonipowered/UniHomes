import BranchListings from '@/components/cardListings/BranchListings';

interface Amenity {
	amenity_name: string;
	value: boolean;
}
interface Favorites {
	id: number;
	title: string;
	description: string;
	price: number;
	featured: boolean;
	amenities: Amenity[];
	lessor_name: string;
}
interface FavoriteListingsProps {
	listings: Favorites[];
}

export default function FavoriteListings({ listings }: FavoriteListingsProps) {
	return (
		<div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-2 sm:grid-cols-3 xs:grid-cols-2'>
			{listings.map((item) => (
				<div key={item.title}>
					<BranchListings {...item} />
				</div>
			))}
		</div>
	);
}
