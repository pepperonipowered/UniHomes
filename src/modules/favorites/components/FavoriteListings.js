import BranchListings from "@/components/cardListings/BranchListings";

export default function FavoriteListings() {
    return (
        <div className="h-max w-1/2 px-16 py-32">
            <BranchListings/>
            {/* You can map the listings here */}
        </div>
    );

}