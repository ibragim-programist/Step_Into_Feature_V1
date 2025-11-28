import { Router } from "express";
import { addRoom } from "../_setDataBase.js";
import { roomsAddRoomMiddleware } from "./rooms_addroomM.js";
const roomAddRoomRouter = Router();

roomAddRoomRouter.post('/rooms/addRoom', roomsAddRoomMiddleware, async (req, res) => {
    try {
        const { nameRoom, passRoom } = req.body;
        const result = await addRoom(nameRoom, passRoom);
        res.status(200).json({ success: result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})


export default roomAddRoomRouter;