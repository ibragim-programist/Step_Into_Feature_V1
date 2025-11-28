import { checkValidName, checkValidPassword } from "../security/__checkValidData.js";


export const roomsAddRoomMiddleware = async (req, res, next) => {
    const { nameRoom, passRoom } = req.body;

    if(checkValidName(nameRoom) && checkValidPassword(passRoom)) {
        next();
    } else {
        next('Not valid data');
    }
}