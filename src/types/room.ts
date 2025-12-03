import { RoomType } from "./roomType.enum"
import {Player} from "./player"

export interface Room {
    id: number
    name: string
    password?: string
    privacy: RoomType
    createdAt: string
    discussionTime: number // tiempo para discusion en segundos
    voteTime: number // tiempo para votar en segundos
    moveTime: number // tiempo para hacer tu jugada: elegir palabra
    maxPlayers: number
    players: Player[]
}