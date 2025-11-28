import { Router } from "express";
import { checkExistRoom } from "../__loadDataBase.js";
import { roomNamePassMiddleware } from "./room_name_passM.js";
const roomNamePass = Router();

roomNamePass.get('/room/:name/:password', roomNamePassMiddleware, async (req, res) => {
    try {
        const { name, password } = req.params;
        const roomData = await checkExistRoom(name, password);
        
        if (!roomData) {
            return res.status(404).json({ error: "Room not found" });
        }

        res.status(200).json({ 
            success: {
                name: roomData.name,
                id: roomData.id,
                password: roomData.password
            }
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default roomNamePass;