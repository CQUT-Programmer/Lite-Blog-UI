import dayjs, {Dayjs} from "dayjs"

import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)

export const parseTime = (
    time?: object | string | number | null,
    cFormat?: string): string | null => {
    const format = cFormat || '{y}-{M}-{d} {h}:{m}:{s}'

    //默认返回当前时间
    if (time === null)
        return dayjs().format(format)
    let date: Dayjs


    if (typeof time === "object") {
     /*   if (time instanceof Date)
            date = dayjs(time)
        else if (time instanceof Dayjs)
            date = time
        else*/
            date = time as Dayjs
    } else {
        if (typeof time === 'string') {
            if (/^[0-9]+$/.test(time)) {
                time = parseInt(time)
            } else {
                // support safari
                // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
                time = time.replace(new RegExp(/-/gm), '/')
            }
        }
        if (typeof time === 'number' && time.toString().length === 10)
            date = dayjs.unix(time)
        else
            date = dayjs(time)
    }
    const formatObj: { [key: string]: number } = {
        y: date.year(),
        M: date.month() + 1,
        d: date.date(),
        h: date.hour(),
        m: date.minute(),
        s: date.second(),
        a: date.day()
    }
    return format.replace(/{([yMdhmsa])+}/g, (result, key) => {
        const value = formatObj[key]
        if (key === 'a') {
            return ['日', '一', '二', '三', '四', '五', '六'][value]
        }
        return value.toString().padStart(2, '0')
    })
}


export const formatRangeTime = (time: any): string => {

    return dayjs(parseTime(time)).fromNow()
}
