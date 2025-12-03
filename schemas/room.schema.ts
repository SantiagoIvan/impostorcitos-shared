import { z } from "zod";
import {RoomType} from "../types/roomType.enum";

export const createRoomSchema = z.object({
    name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
    privacy: z.enum(RoomType),
    password: z.string().optional(),
    discussionTime: z.number().min(10, "Debe ser mayor a 10 segundos"),
    voteTime: z.number().min(10, "Debe ser mayor a 10 segundos"),
    gameTime: z.number().min(30, "Debe ser mayor a 30 segundos"),
    maxPlayers: z.number().min(2, "Debe permitir al menos 2 jugadores"),
}).refine(
    (data) =>
        data.privacy === RoomType.PUBLIC || (data.privacy === RoomType.PRIVATE && data.password?.length),
    {
        message: "La password es obligatoria para rooms privados",
        path: ["password"],
    }
);

export type CreateRoomDto = z.infer<typeof createRoomSchema>;
