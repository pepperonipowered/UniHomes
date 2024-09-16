"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import spiels from "@/lib/constants/spiels";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

const Profile = () => {
  const [date, setDate] = useState(null);

  return (
    <section className="w-full p-2">
      <form className="px-2">
        <div className="flex flex-col gap-4 ">
          <div className="flex gap-2">
            <div className="flex-1">
              <Label>First name</Label>
              <Input
                id="first-name"
                placeholder="Tyler"
                type="text"
                className="border-2 border-gray-300 focus:border-gray-500 transition-all duration-200"
              />
            </div>
            <div className="flex-1">
              <Label>Last name</Label>
              <Input
                id="last-name"
                placeholder="Aasdasd"
                type="text"
                className="border-2 border-gray-300 focus:border-gray-500 transition-all duration-200"
              />
            </div>
          </div>
          <p className="opacity-60">
            This is your public display name. It can be your real name or a
            pseudonym. You can only change this once every 30 days.
          </p>
          <Label>Contact Number</Label>
          <Input
            id="contact-number"
            placeholder="1234567890"
            type="text"
            className="border-2 border-gray-300 focus:border-gray-500 transition-all duration-200"
          />
          <Label>Address</Label>
          <Input
            id="address"
            placeholder="123 Main St."
            type="text"
            className="border-2 border-gray-300 focus:border-gray-500 transition-all duration-200"
          />

          <Label>Date of Birth</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="border-2 border-gray-300 focus:border-gray-500 transition-all duration-200 w-full sm:w-auto pl-3 text-left font-normal"
              >
                {date ? format(date, "MMMM d, yyyy") : <span>Pick a date</span>}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                className="rounded-md"
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
                captionLayout="dropdown-buttons"
                fromYear={1900}
                toYear={new Date().getFullYear()}
              />
            </PopoverContent>
          </Popover>

          <Label>Email</Label>
          <Input
            id="email"
            placeholder="example@example.com"
            type="email"
            className="border-2 border-gray-300 focus:border-gray-500 transition-all duration-200"
          />
          <Label>Lifestyle Tag/s</Label>
          <div>
            <Badge variant="destructive">Destructive</Badge>
          </div>

          <div className="flex gap-2">
            <Button className="w-full sm:w-auto bg-black text-white hover:bg-gray-800">
              {spiels.BUTTON_UPDATE_PROFILE}
            </Button>
            <Button className="w-full sm:w-auto bg-red-500 text-white hover:bg-red-600">
              {spiels.BUTTON_DELETE_ACCOUNT}
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Profile;
