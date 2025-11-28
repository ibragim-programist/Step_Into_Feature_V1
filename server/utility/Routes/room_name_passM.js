import { checkValidName, checkValidPassword } from "../security/__checkValidData.js";


export const roomNamePassMiddleware = async (req, res, next) => {
    const { name, password } = req.params;

    if(checkValidName(name) && checkValidPassword(password)) {
        next();
    } else {
        next('Not valid data');
    }
}