import { Router } from "express";
import { getMessages } from "../__loadDataBase.js";
import { roomNameMessagerMiddleware } from "./room_name_messageM.js";
const roomNameMessageRouter = Router();

roomNameMessageRouter.get('/room/:name/messages', roomNameMessagerMiddleware, async (req, res) => {
    try {
        const roomName = req.params.name;
        console.log(`Fetching messages for room: ${roomName}`);

        const messages = await getMessages(roomName);
        console.log('Retrieved messages:', messages);

        return res.status(200).json({
            success: true,
            messages: messages || []
        });

    } catch (error) {
        console.error('Error fetching messages:', error);
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

export default roomNameMessageRouter;