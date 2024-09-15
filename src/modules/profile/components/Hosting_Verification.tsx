"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { FileUpload } from "@/components/ui/file-upload";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

const Hosting_Verification: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = (newFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  return (
    <section className="w-full p-4">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl">Hosting Verification</h1>
        <p>
          Please upload necessary documents to verify yourself as a host. Make
          sure your photos aren’t blurry and the front of your driver’s license
          clearly shows your face.
        </p>
        <div className="flex flex-col md:flex-row-reverse gap-2">
          <div className="lg:w-1/4">
            <Card className="border-none">
              <CardHeader>
                <CardTitle>Your Privacy</CardTitle>
                <CardDescription>
                  We aim to keep the data you share during this process private,
                  safe, and secure. Learn more in our Privacy Policy.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="flex flex-col lg:w-3/4 mt-5 gap-5">
            <div>
              <Label className="font-bold text-lg">Government ID</Label>
              <p className="mt-2">
                You’ll need to add an official government ID. Depending on what
                country you’re from, you can add a driver’s license, passport,
                or national identity card. This helps us make sure you’re really
                you and is required to publish your listing(s).
              </p>
              <div className=" flex justify-center md:w-1/2 lg:w-[205px] ">
                <FileUpload onChange={handleFileUpload} />
              </div>
            </div>
            <div>
              <Label className="font-bold text-lg">Business License</Label>
              <p className="mt-2">
                You’ll need to add your official business license. This helps us
                make sure you’re really you and is required to publish your
                listing(s)
              </p>
              <div className=" flex justify-center md:w-1/2 lg:w-[205px] ">
                <FileUpload onChange={handleFileUpload} />
              </div>
            </div>
            <div>
              <Label className="font-bold text-lg">
                Which number can guests use to contact you?
              </Label>
              <p className="mt-2">
                This number should be able to receive texts or calls.
              </p>
              <Input
                id="text"
                placeholder="639-000-000-000"
                type="text"
                className="border-2 border-gray-300 focus:border-gray-500 transition-all duration-200 mt-2 mb-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hosting_Verification;
