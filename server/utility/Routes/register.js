import { Router } from "express";
import { addUser } from "../_setDataBase.js";
import { registerMiddleware } from "./registerM.js";
const RegisterRouter = Router();

RegisterRouter.post('/register', registerMiddleware, async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const result = await addUser(name, email, password);
        res.status(200).json({ success: result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

export default RegisterRouter;