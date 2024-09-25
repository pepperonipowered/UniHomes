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

export function NavbarModalRegistration({ isOpen, onClose, openModal }) {
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
          <div className="mt-4">
            <Label htmlFor="dob" className="font-semibold">
              Date of Birth
            </Label>
            <Input id="dob" type="date" className="border-gray-400" />
          </div>
          <div className="mt-4">
            <Label htmlFor="contact" className="font-semibold">
              Contact Number
            </Label>
            <Input id="number" type="contact" className="border-gray-400" />
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
