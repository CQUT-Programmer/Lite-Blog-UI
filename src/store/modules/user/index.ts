import {defineStore} from "pinia";
import {UserState} from "../../types"

import {getStorage, getToken} from "@/utils/storage"
import {DEFAULT_AVATAR} from "@/utils/constants";
import keys from "@/constant/key";

import {loginApi} from "@/api/login";

const USER_INFO_KEY = 'lite-blog-user-info'
const userInfo: UserState = JSON.parse(
    getStorage(USER_INFO_KEY) || "{}"
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
            accessToken: getToken() || "",
            refreshToken: getToken(keys.tokenRefreshKey) || "",
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
        async login(params) {
            return loginApi(params);
        }
    }
})

export default useUserStore
