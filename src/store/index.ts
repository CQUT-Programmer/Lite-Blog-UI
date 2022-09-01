import {defineStore} from "pinia";
import {BlogContent} from "@/utils/constants";
import dayjs from "dayjs";
import {DateFormat} from "@/utils/constants";
import {getStorage} from "@/utils/storage";



export const useStore = defineStore({
    id: 'piniaTest',

    state: () => {

        const blogContent: BlogContent = {
            id: '12345678',
            title: '携手创作，共同成长，8月更文活动奖品大升级！｜ 掘金·日新计划',
            author: {
                headUrl : 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                name: 'blogTest',
                awesomeNumber: 23784323442,
            },
            creationTime: dayjs(Date(), DateFormat.COMMON),
            readingVolume: 9999,
            label: [{name: '算法'},{name: '前端'},{name: 'java'}],
            posterImg: require('@/assets/image/blogLogo.png'),
            describe: '博客测试描述',
            content:  getStorage('blog_text'),
            awesomeNumber: 1234,
            commentNumber: 184867,
        }

        const clientHeight = document.documentElement.clientHeight - 1
        return {
            blogContent,
            clientHeight
        }

    },

    getters: {

    },

    actions: {

    },

})
