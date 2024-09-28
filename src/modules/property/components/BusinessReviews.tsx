import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import tempValues from "@/lib/constants/tempValues";
import { Star } from "lucide-react";
import React from "react";

const BusinessReviews = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center">
      {tempValues.REVIEWS.map((review, index) => (
        <BentoGrid key={index} className="w-full">
          <BentoGridItem
            title={
              <div className="flex items-center justify-between">
                <span className="text-sm line-clamp-1">{review.name}</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500" fill="#eab308" />
                  <span className="ml-1 text-xs sm:text-sm">4.5</span>
                </div>
              </div>
            }
            description={
              <p className="line-clamp-2 text-xs sm:text-sm">{review.review}</p>
            }
            className="shadow-sm flex flex-col justify-between p-4 rounded-md"
          />
        </BentoGrid>
      ))}
    </div>
  );
};

export default BusinessReviews;
