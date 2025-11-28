import { checkValidName, checkValidPassword } from "../security/__checkValidData.js";


export const roomsRemoveRoomMiddleware = async (req, res, next) => {
    const { name, pass } = req.body;

    if(checkValidName(name) && checkValidPassword(pass)) {
        next();
    } else {
        next('Not valid data');
    }
}