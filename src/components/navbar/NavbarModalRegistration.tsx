import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "@radix-ui/react-icons";

export function NavbarModalRegistration({ isOpen, onClose, openModal }) {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);

  const handleCalendarToggle = () => {
    setIsCalendarOpen((prev) => !prev);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[425px] bg-white text-black rounded-[20px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Create an Account</DialogTitle>
          <DialogDescription>
            Fill out the form to create a new account.
          </DialogDescription>
        </DialogHeader>

        <div className="text-black">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fname" className="font-semibold">
                First Name
              </Label>
              <Input
                id="fname"
                placeholder="Pedro"
                className="border-gray-400"
              />
            </div>
            <div>
              <Label htmlFor="lname" className="font-semibold">
                Last Name
              </Label>
              <Input
                id="lname"
                placeholder="Duarte"
                className="border-gray-400"
              />
            </div>
          </div>

          <div className="mt-4">
            <Label htmlFor="email" className="font-semibold">
              Email
            </Label>
            <Input
              id="email"
              placeholder="asdas@peduarte.com"
              className="border-gray-400"
            />
          </div>

          <div className="mt-4">
            <Label htmlFor="password" className="font-semibold">
              Password
            </Label>
            <Input id="password" type="password" className="border-gray-400" />
          </div>

          <div className="mt-4 relative">
            <Label htmlFor="dob" className="font-semibold">
              Date of Birth
            </Label>
            <div className="flex items-center">
              <Input
                id="dob"
                type="text"
                value={date ? date.toLocaleDateString() : ""}
                onFocus={handleCalendarToggle}
                readOnly
                className="border-gray-400 pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={handleCalendarToggle}
              >
                <CalendarIcon className="h-5 w-5 mt-5" />
              </button>
            </div>
            {isCalendarOpen && (
              <div className="absolute z-10 mt-2 left-1/2 transform -translate-x-1/2">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(selectedDate) => {
                    setDate(selectedDate);
                    setIsCalendarOpen(false);
                  }}
                  className="rounded-md border shadow bg-white"
                />
              </div>
            )}
          </div>

          <div className="mt-4">
            <Label htmlFor="number" className="font-semibold">
              Contact Number
            </Label>
            <Input id="number" type="tel" className="border-gray-400" />
          </div>
        </div>

        <DialogFooter>
          <div className="w-full">
            <Button
              type="submit"
              className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            >
              Create Account
            </Button>
            <div className="mt-4 text-center text-black">
              <p>
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-blue-500 hover:underline"
                  onClick={() => {
                    onClose();
                    openModal("login");
                  }}
                >
                  Login
                </a>
              </p>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
