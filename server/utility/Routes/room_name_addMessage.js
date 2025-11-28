import { Router } from "express";
import { addMessage } from "../_setDataBase.js";
import { roomNameAddMessageMiddleware } from "./room_name_addMessageM.js";
const roomNameAddMessageRouter = Router();

roomNameAddMessageRouter.post('/room/:name/addMessage', roomNameAddMessageMiddleware, async (req, res) => {
    try {
        const { name } = req.params;
        const { msg, owner } = req.body;
        const result = await addMessage(msg, owner, name);
        res.status(200).json({ success: result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})


export default roomNameAddMessageRouter;