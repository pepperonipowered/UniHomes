import { PencilIcon } from "@heroicons/react/24/solid";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  DatePicker,
} from "@nextui-org/react";
import React, { useRef } from "react";

const ProfileSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const fileInputRef = useRef(null); // Create a reference to the file input

  // Function to trigger file input when pencil is clicked
  const handlePencilClick = () => {
    fileInputRef.current.click(); // Programmatically trigger the file input click
  };

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file); // You can handle the selected file here (e.g., show preview)
    }
  };

  return (
    <section className="w-full p-2">
      <div className="flex p-2 gap-4 h-[20%]">
        <div className="relative">
          <Avatar className="w-32 h-32 ">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {/* Button to trigger file input */}
          <button
            onClick={handlePencilClick}
            className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md hover:bg-gray-200 transition bg-white w-7"
          >
            <PencilSquareIcon className="w-5 h-5 text-gray-600" />
          </button>
          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef} // Reference the file input
            className="hidden"
            accept="image/*" // Only allow image files
            onChange={handleFileChange} // Handle file selection
          />
        </div>
        <div className="flex items-center">
          <div className="flex flex-col">
            <h1 className="font-bold mb-1">Lucky Calalo</h1>
            <p>Baguio City, De Baguio</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 p-4 mt-10">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Personal Details</h1>
          <Button
            value="center"
            onPress={onOpen}
            className="flex items-center text-blue-600 underline hover:text-blue-800 bg-transparent"
          >
            <PencilIcon className="w-4 h-4 mr-1 " />
            Edit
          </Button>
        </div>

        <div>
          <p className="text-base font-medium text-default-400">Full Name</p>
          <h4 className="text-lg font-medium">Lucky Calalo</h4>
        </div>
        <div>
          <p className="text-base font-medium text-default-400">
            Contact Number
          </p>
          <h4 className="text-lg font-medium">091231221312</h4>
        </div>
        <div>
          <p className="text-base font-medium text-default-400">Address</p>
          <h4 className="text-lg font-medium">Baguio City, De Baguio</h4>
        </div>
        <div>
          <p className="text-base font-medium text-default-400">
            Date of Birth
          </p>
          <h4 className="text-lg font-medium">1/1/1999</h4>
        </div>
        <div>
          <p className="text-base font-medium text-default-400">Email</p>
          <h4 className="text-lg font-medium">asdas@adasd.com</h4>
        </div>
      </div>
      <Modal isOpen={isOpen} placement="center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Profile
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-2">
                  <div>
                    <Input
                      key="inside"
                      type="text"
                      label="Full Name"
                      labelPlacement="outside"
                      placeholder="Lucky Calalo"
                    />
                  </div>
                  <div>
                    <Input
                      key="inside"
                      type="number"
                      label="Contact Number"
                      labelPlacement="outside"
                      placeholder="091231221312"
                    />
                  </div>
                  <div>
                    <Input
                      key="inside"
                      type="text"
                      label="Address"
                      labelPlacement="outside"
                      placeholder="Baguio City, De Baguio"
                    />
                  </div>
                  <div>
                    <DatePicker
                      label="Birth Date"
                      labelPlacement="outside"
                      variant="flat"
                      showMonthAndYearPickers
                    />
                  </div>
                  <div>
                    <Input
                      key="inside"
                      type="email"
                      label="Full Name"
                      labelPlacement="outside"
                      placeholder="asdas@adasd.com"
                    />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default ProfileSection;
