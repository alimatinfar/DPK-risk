import { helper } from "../utils/helper";
import { getConfig } from "../utils/config";
export const baseService = {
    postServer
}


async function postServer(uri: string, data?: { [key: string]: any },options?: RequestInit): Promise<Resp> {
    const { baseUrl } = getConfig();
 
    const nores: Resp = { success: false, data: {}, errors: 'خطا در ارتباط', message: '' };
    const baseUri =`${baseUrl}/api/`;
    const token=helper.clientGet('appToken')
    const Authorization=`${token ? `Bearer_${token}` : undefined}`

    return await fetch(`${baseUri}${uri}`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                    ...options?.headers,
                    Authorization
                    },
                body: JSON.stringify(data)
                }).then(r => {
                    return r.json().then(data => {
                        return data;
                });
    })
        .catch((err) => {
            const r: Resp = { success: false, data: {}, errors: 'خطا', message: err.message };
            return r;
        });
}

