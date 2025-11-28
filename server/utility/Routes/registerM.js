import { checkValidEmail, checkValidPassword, checkValidName } from "../security/__checkValidData.js";


export const registerMiddleware = async (req, res, next) => {
    const { name, email, password } = req.body;

    if(checkValidEmail(email) && checkValidPassword(password) && checkValidName(name)) {
        next();
    } else {
        next('Not valid data');
    }
}