import * as React from "react"
 
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
 

const CreateRoom = ({ trigger } : {trigger : React.ReactNode}) => {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)");
    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    { trigger }
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-secondary">
                    <DialogHeader>
                        <DialogTitle>Add room</DialogTitle>
                        <DialogDescription>
                            Add a room for branch 1 here. Click save when
                            you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <ProfileForm />
                </DialogContent>
            </Dialog>
        );
      }
      return (
          <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                  { trigger }
              </DrawerTrigger>
              <DrawerContent>
                  <DrawerHeader className="text-left">
                      <DrawerTitle>Edit profile</DrawerTitle>
                      <DrawerDescription>
                          Make changes to your profile here. Click save when
                          you're done.
                      </DrawerDescription>
                  </DrawerHeader>
                  <ProfileForm className="px-4" />
                  <DrawerFooter className="pt-2">
                      <DrawerClose asChild>
                          <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                  </DrawerFooter>
              </DrawerContent>
          </Drawer>
      );
}


const ProfileForm = ({ className }: React.ComponentProps<"form">) => {
  return (
      <form className={cn("grid items-start gap-4", className)}>
          <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                  type="email"
                  id="email"
                  defaultValue="shadcn@example.com"
              />
          </div>
          <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@shadcn" />
          </div>
          <Button type="submit">Save changes</Button>
      </form>
  );
}


export default CreateRoom