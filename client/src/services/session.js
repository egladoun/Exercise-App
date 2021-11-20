import router from "../router";
import { Login } from "./users";

const session = {
    user: null,
    messages: [],
    toRoute: '/Sharing',
    async Login(handle, password){
        try{
            const response = Login(handle, password);

            this.user = response.user;

            router.push(this.toRoute);
        } catch (error) {
            console.log("There was a problem in logging in");
        }
    }
};

export default session;

//export function