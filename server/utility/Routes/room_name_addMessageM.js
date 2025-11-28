
import { checkValidName } from "../security/__checkValidData.js";


export const roomNameAddMessageMiddleware = async (req, res, next) => {
    const { name } = req.params;
    const { msg, owner } = req.body;

    if(checkValidName(name) && checkValidName(owner) && (msg.trim())) {
        next();
    } else {
        next('Not valid data');
    }
}