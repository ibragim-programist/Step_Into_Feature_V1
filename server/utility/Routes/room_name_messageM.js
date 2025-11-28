import { checkValidName } from "../security/__checkValidData.js";


export const roomNameMessagerMiddleware = async (req, res, next) => {
    const roomName = req.params.name;

    if(checkValidName(roomName)) {
        next();
    } else {
        next('Not valid data');
    }
}