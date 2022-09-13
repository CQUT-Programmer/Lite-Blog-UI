import {defineStore} from "pinia";
import {UserState} from "../../types"

import storage, {getToken, setToken} from "@/utils/storage"
import {DEFAULT_AVATAR, TOKEN_REFRESH_KEY} from "@/utils/constants";
import Keys from "@/constant/key";

import {loginApi} from "@/api/login";
import {StorageType} from "@/constant/settings";

const userInfo: UserState = JSON.parse(
    storage.getStorage(Keys.userInfoKey) || "{}"
)
const useUserStore = defineStore("user", {

    state: () => {

        const user = {
            userId: userInfo.userId || 0,
            userName: userInfo.userName || "",
            avatar: userInfo.avatar || DEFAULT_AVATAR,
        }

        const token = {
            user_id: '',
            accessToken: userInfo.accessToken || getToken() || "",
            refreshToken: userInfo.refreshToken || getToken(TOKEN_REFRESH_KEY) || "",
            expired_at: '',
            updated_at: ''
        }
        return {
            user,
            token
        }
    },
    getters: {},

    actions: {
        async login(params: { mail: string, password: string }){
            return await loginApi(params).then(async (res) => {
                if (res.code == 200 && res.data) {
                    storage.setStorage(res.data, Keys.userInfoKey, StorageType.LOCAL)
                    setToken(res.data.access.token)
                    setToken(res.data.refresh.token, TOKEN_REFRESH_KEY)
                }
            }).catch((err) => {
                console.log(err)
            })

        }
    }
})

export default useUserStore
