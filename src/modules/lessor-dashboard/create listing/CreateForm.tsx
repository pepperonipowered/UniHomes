"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { map, z } from "zod";
import createRoomSchema from "../schema/schema";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form"
import { Input, Textarea } from "@nextui-org/input";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, MoveLeft, MoveRight } from "lucide-react";

type CreateRoomData = z.infer<typeof createRoomSchema>;

const CreateForm = () => {
    const [formStep, setFormStep] = React.useState(0);
    const createRoomForm = useForm<CreateRoomData>({
        resolver: zodResolver(createRoomSchema),
        defaultValues: {

        }
    });

    function onSubmit(values: CreateRoomData) {
        console.log(values);
    }
    return (
        <Form {...createRoomForm}>
            <form
                onSubmit={createRoomForm.handleSubmit(onSubmit)}
                className="space-y-8"
            >
                <div
                    className={cn("grid grid-cols-12 gap-6", {
                        hidden: formStep == 1,
                    })}
                >
                    {/* room name */}
                    <FormField
                        control={createRoomForm.control}
                        name="room_name"
                        render={({ field }) => {
                            const { error } = useFormField();
                            return (
                                <Input
                                    isClearable
                                    variant="bordered"
                                    label="Room Name"
                                    type="text"
                                    errorMessage={error?.message}
                                    isInvalid={!!error?.message}
                                    size="sm"
                                    isRequired
                                    onClear={() => field.onChange("")}
                                    radius="sm"
                                    className="col-span-6"
                                    {...field}
                                />
                            );
                        }}
                    />
                    {/* room number */}
                    <FormField
                        control={createRoomForm.control}
                        name="room_number"
                        render={({ field }) => {
                            const { error } = useFormField();
                            return (
                                <Input
                                    isClearable
                                    variant="bordered"
                                    label="Room Number"
                                    type="number"
                                    errorMessage={error?.message}
                                    isInvalid={!!error?.message}
                                    size="sm"
                                    isRequired
                                    onClear={() => {
                                        field.onChange(0);
                                    }}
                                    radius="sm"
                                    className="col-span-6"
                                    {...field}
                                    {...createRoomForm.register("room_number", {
                                        valueAsNumber: true,
                                    })}
                                />
                            );
                        }}
                    />
                    {/* capacity */}
                    <FormField
                        control={createRoomForm.control}
                        name="room_capacity"
                        render={({ field }) => {
                            const { error } = useFormField();
                            return (
                                <Input
                                    isClearable
                                    variant="bordered"
                                    label="Capacity"
                                    type="number"
                                    errorMessage={error?.message}
                                    isInvalid={!!error?.message}
                                    size="sm"
                                    isRequired
                                    onClear={() => field.onChange(0)}
                                    radius="sm"
                                    className="col-span-6"
                                    {...field}
                                    {...createRoomForm.register(
                                        "room_capacity",
                                        {
                                            valueAsNumber: true,
                                        }
                                    )}
                                />
                            );
                        }}
                    />
                    {/* occupants */}
                    <FormField
                        control={createRoomForm.control}
                        name="occupants"
                        render={({ field }) => {
                            const { error } = useFormField();
                            return (
                                <Input
                                    isClearable
                                    variant="bordered"
                                    label="Occupants"
                                    type="number"
                                    errorMessage={error?.message}
                                    isInvalid={!!error?.message}
                                    size="sm"
                                    isRequired
                                    onClear={() => field.onChange(0)}
                                    radius="sm"
                                    className="col-span-6"
                                    {...field}
                                    {...createRoomForm.register("occupants", {
                                        valueAsNumber: true,
                                    })}
                                />
                            );
                        }}
                    />
                    {/* description */}
                    <FormField
                        control={createRoomForm.control}
                        name="room_description"
                        render={({ field }) => {
                            const { error } = useFormField();
                            return (
                                <Textarea
                                    label="Description"
                                    variant="bordered"
                                    className="col-span-full"
                                    errorMessage={error?.message}
                                    isInvalid={!!error?.message}
                                    {...field}
                                />
                            );
                        }}
                    />
                </div>
                <div
                    className={cn("grid grid-cols-12 gap-6", {
                        hidden: formStep == 0,
                    })}
                >
                    <FormField
                        control={createRoomForm.control}
                        name="room_price"
                        render={({ field }) => {
                            const { error } = useFormField();
                            return (
                                <Input
                                    isClearable
                                    variant="bordered"
                                    label="Price"
                                    type="number"
                                    errorMessage={error?.message}
                                    isInvalid={!!error?.message}
                                    size="sm"
                                    isRequired
                                    onClear={() => field.onChange(0)}
                                    radius="sm"
                                    className="col-span-6"
                                    {...field}
                                    {...createRoomForm.register("room_price", {
                                        valueAsNumber: true,
                                    })}
                                />
                            );
                        }}
                    />
                    <FormField
                        control={createRoomForm.control}
                        name="room_size"
                        render={({ field }) => {
                            const { error } = useFormField();
                            return (
                                <Input
                                    isClearable
                                    variant="bordered"
                                    label="Size"
                                    type="number"
                                    errorMessage={error?.message}
                                    isInvalid={!!error?.message}
                                    size="sm"
                                    isRequired
                                    onClear={() => field.onChange(0)}
                                    radius="sm"
                                    className="col-span-6"
                                    {...field}
                                    {...createRoomForm.register("room_size", {
                                        valueAsNumber: true,
                                    })}
                                />
                            );
                        }}
                    />
                </div>
                <div className=" flex items-center gap-3">
                    <Button
                        type="submit"
                        className={cn("w-max", {
                            hidden: formStep == 0,
                        })}
                    >
                        Submit
                    </Button>
                    <Button
                        type="button"
                        onClick={() => {
                            createRoomForm.trigger(['room_name', 'room_capacity', 'room_description', 'room_price', 'room_size', 'occupants']);
                            const room_name_state = createRoomForm.getFieldState('room_name');
                            const room_capacity_state = createRoomForm.getFieldState('room_capacity');
                            const room_description_state = createRoomForm.getFieldState('room_description');
                            const room_price_state = createRoomForm.getFieldState('room_price');
                            const room_size_state = createRoomForm.getFieldState('room_size');
                            const occupants_state = createRoomForm.getFieldState('occupants');
                            
                            if (!room_name_state.isDirty || room_name_state.invalid) return;
                            if (!room_capacity_state.isDirty || room_capacity_state.invalid) return;
                            if (!room_description_state.isDirty || room_description_state.invalid) return;
                            if (!room_price_state.isDirty || room_price_state.invalid) return;
                            if (!room_size_state.isDirty || room_size_state.invalid) return;
                            if (!occupants_state.isDirty || occupants_state.invalid) return;

                            setFormStep(1);
                        }}
                    >
                        <span className="flex items-center gap-2">
                            Next <MoveRight className="w-5 h-auto " />
                        </span>
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default CreateForm;
