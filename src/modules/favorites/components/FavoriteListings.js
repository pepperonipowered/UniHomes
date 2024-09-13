import Listings from "@/components/cardListings/Listings";

export default function FavoriteListings() {
    return (
        <div className="h-full w-1/2 grid grid-cols-2 gap-4 box-border p-4 border-4">
            <Listings/>
            <Listings/>
        </div>
    );

}