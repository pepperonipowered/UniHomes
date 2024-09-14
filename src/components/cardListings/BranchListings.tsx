import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { Badge } from "../ui/badge";

export default function BranchListings() {
  return (
    <BentoGrid className="max-w-4xl mx-auto grid-cols-1 md:grid-cols-2 md:auto-rows-[20rem] ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={
            <div>
              <p>{item.description}</p>
              <div className="flex flex-row">
                <Badge className="relative top-2" variant="secondary">{item.amenities}</Badge>
                {/* Try to create a map badge here for multiple amenitities. */}
              </div>
            </div>
            }
          header={
              <div className="static">
                <div className="bg-gray-200 h-full w-full aspect-video rounded-lg">
                  {item.badges === "Featured" && <Badge className="relative left-3/4 m-1" variant="secondary">Featured</Badge>}
                </div>
              </div>
              
          }
          className="shadow-md"
        />
      ))}
    </BentoGrid>
  );
}

//This should be dynamic, fetched from the database
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    badges: "Featured",
    amenities: "May Tabo",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    badges: "Featured",
    amenities: "May Tabo",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    badges: "",
    amenities: "Walang Tabo",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];

