import {MAPPING} from "@/utils/constants";


export function getApiBaseUrl() {
    return process.env.VUE_APP_PROXY === 'true'
        ? `/proxy${MAPPING}` : process.env.VUE_APP_BASE_API + MAPPING
}
