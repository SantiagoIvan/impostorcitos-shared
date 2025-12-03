import { z } from "zod";
import { RoomType } from "../types/roomType.enum";
export declare const createRoomSchema: z.ZodObject<{
    name: z.ZodString;
    privacy: z.ZodEnum<typeof RoomType>;
    password: z.ZodOptional<z.ZodString>;
    discussionTime: z.ZodNumber;
    voteTime: z.ZodNumber;
    gameTime: z.ZodNumber;
    maxPlayers: z.ZodNumber;
}, z.core.$strip>;
export type CreateRoomDto = z.infer<typeof createRoomSchema>;
