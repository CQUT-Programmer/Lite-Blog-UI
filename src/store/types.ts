import {Dayjs} from "dayjs";

//vo用户
export interface UserState {
    userId: number,
    accessToken: string,
    refreshToken: string
    userName: string,
    avatar: string
}

//vo博客类
export interface BlogContent {
    id: string
    title: string,
    author: {
        headUrl: string,
        name: string,
        awesomeNumber: number
    },
    creationTime: any,
    readingVolume: number,
    posterImg: string,
    describe: string,
    label: Array<any>,
    content: string,
    awesomeNumber: number,
    commentNumber: number,
}

export interface User {
    avatar: string,
    name: string,
    //TODO 待更改，仅测试
    id: string
}

//vo评论
export interface Comment {
    user: User,
    commentText: string,
    commentTime: string | Dayjs
    replyComment: Array<{
        user: User,
        replyUser: User,
        commentText: string,
        commentTime: string | Dayjs,
        replyText: string
    }>
}
