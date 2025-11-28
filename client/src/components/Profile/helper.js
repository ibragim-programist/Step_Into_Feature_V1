import axios from "axios"

const serverUrl = 'http://localhost:7523';

export const changeUserData = async (currentUser, newUser) => {
    try {
        const res = await axios.post(`${serverUrl}/changeUser`, {
            currentUser,
            newUser
        });

        return res.data ? res.data : false;
    } catch (e) {
        console.log('Fatal Error in changing User data : ', e);
        return false;
    }
}