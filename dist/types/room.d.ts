import { RoomType } from "./roomType.enum";
import Player from "./player";
export default interface Room {
    id: number;
    name: string;
    password?: string;
    privacy: RoomType;
    createdAt: string;
    discussionTime: number;
    voteTime: number;
    moveTime: number;
    playersLimit: number;
    players: Player[];
}
