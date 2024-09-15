"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "pl-0 pt-3 pb-3 pr-0 bg-white text-black rounded-lg shadow-lg w-full", // Set width to full and removed padding
        className
      )}
      classNames={{
        months:
          "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 bg-white text-black",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center text-black", // Centered caption with black text
        caption_label: "text-lg font-semibold", // Larger font size for the month
        nav: "space-x-2 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-8 w-8 bg-transparent p-0 text-black opacity-75 hover:opacity-100" // Updated button styling
        ),
        nav_button_previous: "absolute left-2", // Position left arrow
        nav_button_next: "absolute right-2", // Position right arrow
        table: "w-full border-collapse", // Table structure to align day names and dates
        head_row: "grid grid-cols-7", // Use grid to ensure correct alignment for 7 columns
        head_cell: "text-gray-700 uppercase font-semibold text-xs text-center", // Uppercase and gray for days of the week
        row: "grid grid-cols-7 mt-1", // Ensure dates are aligned in 7 columns too
        cell: "h-12 w-12 text-center text-sm p-0 relative", // Wider cells for dates (h-12 w-12)
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-12 w-12 p-0 font-normal text-black rounded-full hover:bg-gray-200 focus:outline-none focus:ring-0" // White background, black text, light hover effect
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-blue-500 text-white font-semibold hover:bg-blue-600 rounded-full focus:ring-0 focus:outline-none", // Blue background for selected day, white text
        day_today: "bg-gray-200 text-black rounded-full", // Today highlighted with light gray
        day_outside: "text-gray-400 opacity-50", // Faded style for outside days
        day_disabled: "text-gray-400 opacity-50", // Faded style for disabled days
        day_range_middle: "bg-blue-400 text-white rounded-full", // Range middle day style (if needed)
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronLeft className="h-5 w-5 text-black" />
        ), // Black arrow for previous
        IconRight: ({ ...props }) => (
          <ChevronRight className="h-5 w-5 text-black" />
        ), // Black arrow for next
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
