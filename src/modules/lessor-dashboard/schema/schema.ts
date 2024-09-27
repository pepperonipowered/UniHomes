"use client"

import { z } from "zod"

const createRoomSchema = z.object({
    room_name: z.string().min(2, "Room name must be at least 2 characters").max(50, "Room name can't exceed 50 characters"),
    room_number: z.number().min(1, "Room number must be at least 1").max(50, "Room number can't exceed 50").transform((v) => Number(v)||0),
    room_capacity: z.number().min(1, "Room capacity must be at least 1").max(50, "Room capacity can't exceed 50").transform((v) => Number(v)||0),
    occupants: z.number().min(1, "Number of occupants must be at least 1").max(50, "Occupants can't exceed 50").transform((v) => Number(v)||0),
    // occupant_type: z.string().min(2, "Occupant type must be at least 2 characters").max(50, "Occupant type can't exceed 50 characters"),
    room_description: z.string().min(2, "Room description must be at least 2 characters").max(50, "Room description can't exceed 50 characters"),
    room_gallery: z.string().url("Room gallery must be a valid URL").optional(),
    room_price: z.number().min(0, "Room price must be a positive number").transform((v) => Number(v)||0),
    room_size: z.number().min(1, "Room size must be at least 1 square meter").max(500, "Room size can't exceed 500 square meters").transform((v) => Number(v)||0),
  });
  
  export default createRoomSchema;