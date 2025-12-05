import { RoomType } from "../index";

export const defaultRoom = {
    id: "0",
    admin: { id: "0", name: "", isReady: false },
    name: "",
    password: "",
    privacy: RoomType.PUBLIC,
    createdAt: "",
    discussionTime: 0,
    voteTime: 0,
    moveTime: 0,
    maxPlayers: 0,
    players: []
}