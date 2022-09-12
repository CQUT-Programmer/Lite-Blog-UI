import {defineStore} from "pinia";
import {BlogContent, Comment} from "@/store/types";
import dayjs from "dayjs";
import {DateFormat} from "@/constant/settings";
import {getStorage} from "@/utils/storage";

const useStore = defineStore('piniaTest',{

    state: () => {

        const blogContent: BlogContent = {
            id: '12345678',
            title: '携手创作，共同成长，8月更文活动奖品大升级！｜ 掘金·日新计划',
            author: {
                headUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                name: 'blogTest',
                awesomeNumber: 23784323442,
            },
            creationTime: dayjs(Date(), DateFormat.COMMON),
            readingVolume: 9999,
            label: [{name: '算法'}, {name: '前端'}, {name: 'java'}],
            posterImg: require('@/assets/image/blogLogo.png'),
            describe: '博客测试描述',
            content: getStorage('blog_text'),
            awesomeNumber: 1234,
            commentNumber: 184867,
        }


        const userNameHeader = '用户巴拉巴拉'
        let number = 0
        const clientHeight = document.documentElement.clientHeight - 1
        /**
         * commentText: '评论的内容,图片文字都可',
         * replyText: '具体回复的是哪条内容，即别人的评论，图片文字都可'
         */
        const comment: Array<Comment> = [
            {
                user: {
                    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                    name: userNameHeader + (++number).toString(),
                    id: (++number).toString(),
                },
                commentText: '评论的内容',
                commentTime: dayjs(),
                replyComment: [
                    {
                        user: {
                            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                            name: userNameHeader + (++number).toString(),
                            id: (++number).toString(),
                        },
                        replyUser: {
                            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                            name: userNameHeader + (++number).toString(),
                            id: (++number).toString(),
                        },
                        commentText: '评论的内容',
                        commentTime: dayjs(),
                        replyText: '回复内容，图片文字都可'
                    },
                    {
                        user: {
                            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                            name: userNameHeader + (++number).toString(),
                            id: (++number).toString()
                        },
                        replyUser: {
                            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                            name: userNameHeader + (++number).toString(),
                            id: (++number).toString()
                        },
                        commentText: '评论的内容',
                        commentTime: dayjs(),
                        replyText: '回复内容，图片文字都可'
                    },
                    {
                        user: {
                            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                            name: userNameHeader + (++number).toString(),
                            id: (++number).toString()
                        },
                        replyUser: {
                            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                            name: userNameHeader + (++number).toString(),
                            id: (++number).toString()
                        },
                        commentText: '评论的内容',
                        commentTime: dayjs(),
                        replyText: '回复内容，图片文字都可'
                    },
                ]
            },

            {
                user: {
                    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                    name: userNameHeader + (++number).toString(),
                    id: (++number).toString()
                },
                commentText: '评论的内容',
                commentTime: dayjs(),
                replyComment: [
                    {
                        user: {
                            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                            name: userNameHeader + (++number).toString(),
                            id: (++number).toString()
                        },
                        replyUser: {
                            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                            name: userNameHeader + (++number).toString(),
                            id: (++number).toString()
                        },
                        commentText: '评论的内容',
                        commentTime: dayjs(),
                        replyText: '回复内容，图片文字都可'
                    },
                    {
                        user: {
                            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                            name: userNameHeader + (++number).toString(),
                            id: (++number).toString()
                        },
                        replyUser: {
                            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                            name: userNameHeader + (++number).toString(),
                            id: (++number).toString()
                        },
                        commentText: '评论的内容',
                        commentTime: dayjs(),
                        replyText: '回复内容，图片文字都可'
                    },
                    {
                        user: {
                            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                            name: userNameHeader + (++number).toString(),
                            id: (++number).toString()
                        },
                        replyUser: {
                            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                            name: userNameHeader + (++number).toString(),
                            id: (++number).toString()
                        },
                        commentText: '评论的内容',
                        commentTime: dayjs(),
                        replyText: '回复内容，图片文字都可'
                    },

                ]
            },

            {
                user: {
                    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                    name: userNameHeader + (++number).toString(),
                    id: (++number).toString()
                },
                commentText: '评论的内容',
                commentTime: dayjs(),
                replyComment: [
                    {
                        user: {
                            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                            name: userNameHeader + (++number).toString(),
                            id: (++number).toString()
                        },
                        replyUser: {
                            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                            name: userNameHeader + (++number).toString(),
                            id: (++number).toString()
                        },
                        commentText: '评论的内容',
                        commentTime: dayjs(),
                        replyText: '回复内容，图片文字都可'
                    },
                    {
                        user: {
                            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                            name: userNameHeader + (++number).toString(),
                            id: (++number).toString()
                        },
                        replyUser: {
                            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                            name: userNameHeader + (++number).toString(),
                            id: (++number).toString()
                        },
                        commentText: '评论的内容',
                        commentTime: dayjs(),
                        replyText: '回复内容，图片文字都可'
                    },
                    {
                        user: {
                            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                            name: userNameHeader + (++number).toString(),
                            id: (++number).toString()
                        },
                        replyUser: {
                            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                            name: userNameHeader + (++number).toString(),
                            id: (++number).toString()
                        },
                        commentText: '评论的内容',
                        commentTime: dayjs(),
                        replyText: '回复内容，图片文字都可'
                    },

                ]
            },
        ]

        return {
            blogContent,
            clientHeight,
            comment
        }

    },

    getters: {},

    actions: {},

})

export default useStore;
