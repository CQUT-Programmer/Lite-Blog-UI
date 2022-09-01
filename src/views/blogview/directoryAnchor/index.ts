import {VueElement} from "vue";

export function directoryAnchor(data: any) {

    const toc: Array<string> = data.match(/<[hH][1-6][^<]*id=.*?>.*?<\/[hH][1-6]>/g)
    toc.forEach((item, index) => {
        const itemText = item.replace(/<[^>]+>/g, '').replace(' ','-')
        const _toc = `<div class='toc-title' id='${itemText}'>${item}</div>`
        data = data.replace(item, _toc)
    })

    return {data: data, toc: toc}
}



export function toToc(data: string[]) {

    const levelStack: string[] = []
    let result = ''

    const addStartUl = () => {
        result += `<ul class='catalog-list'>`
    }

    const addEndUrl = () => {
        result += `</ul>\n`
    }

    const addLi = (index: number, itemText: string) => {
        result += `<li><a class='link' onclick="changeActiveIndex = '${index}'" id="toc-link-${index}"  href="#${itemText}">${itemText}</a></li>\n`
    }
    data.forEach((item: any, index: number) => {

        const itemText = item.replace(/<[^>]+>/g, '').replace(' ', '-')
        const itemLabel = item.match(/<\w+2?/)[0] + '>'

        let levelIndex = levelStack.indexOf(itemLabel)

        // 如果没有找到 <h?> 标签,便添加ul,li
        if (levelIndex == -1) {
            levelStack.unshift(itemLabel)
            addStartUl()
            addLi(index, itemText)
        } else if (levelIndex == 0) {
            addLi(index, itemText)
        } else {
            while (levelIndex--) {
                levelStack.shift()
                addEndUrl()
            }

            addLi(index, itemText)
        }
    })
    while (levelStack.length) {
        levelStack.shift()
        addEndUrl()
    }

    return result

}


