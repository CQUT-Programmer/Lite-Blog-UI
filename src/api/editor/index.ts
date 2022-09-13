import service from "@/utils/service";
import {RootObject} from "@/model/rootObject";
import {ContentType, Method} from "@/constant/headers";

export function saveEditorApi(data: FormData) {
    return service<RootObject<any>>({
        url: 'cos/upload/public',
        method: Method.PUT,
        data: data,
        headers: {
            'Content-Type': ContentType.UPLOAD,
        }
    })
}
