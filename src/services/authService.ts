import { helper } from "../utils/helper";
import { baseService } from "./baseService";
export const auth = {
    login,
    userProfile,
    getMenus

}
async function login(data: {[key: string]: any}) {
    return await baseService.postServer('authorize', data)
}
function userProfile(data: JSON) {

    if (helper.isDebug())
        console.log('auth:userProfile:data:', data);

}

async function getMenus() {
    return await baseService.postServer('getmenu')
}
