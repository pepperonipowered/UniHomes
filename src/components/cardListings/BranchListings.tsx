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
                <Badge className="" variant="secondary">{item.amenities}</Badge>
              </div>
            </div>
            }
          header={
            <div className="flex items-center space-x-2">
              {item.badges === "Featured" && <Badge variant="secondary">Featured</Badge>}
              {item.header}
            </div>
          }
          className="shadow-md"
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    badges: "Featured",
    amenities: "May Tabo",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    badges: "Featured",
    amenities: "May Tabo",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    badges: "",
    amenities: "Walang Tabo",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];

