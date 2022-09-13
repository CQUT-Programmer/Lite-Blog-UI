export enum ContentType {
    JSON = 'application/json;charset=UTF-8',
    FORM = 'application/x-www-form-urlencoded;charset=UTF-8',
    UPLOAD = 'multipart/form-data',
    TEXT = 'text/plain',
    STREAM = 'application/octet-stream;charset=UTF-8'
}

export enum Device {
    IOS = 'iOS',
    ANDROID = 'Android',
    WINDOWS = 'Windows',
    PC = 'PC'
}

export enum Method {
    GET = 'GET',
    DELETE = 'DELETE',
    HEAD = 'HEAD',
    OPTIONS = 'OPTIONS',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    PURGE = 'PURGE',
    LINK = 'LINK',
    UNLINK = 'UNLINK'
}
