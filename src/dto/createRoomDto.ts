import {z} from "zod"
import {createRoomSchema} from "../schemas";

export type CreateRoomDto = z.infer<typeof createRoomSchema>;