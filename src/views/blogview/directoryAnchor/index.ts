/**
 * Author: AlbaZhang
 * Time: 2022/9/1
 * @param data
 * principle: 由于 markdown 函数会将 markdown 类型标题解析为 htm l的 <h?/> 模式，
 * 利用正则表达式匹配出所有的 h 标签，由于此时 h 标签会存在自己的 id 类信息，通过给每层 h 标签
 * 套一个我们自定义模板规则的 div，方便后续进行匹配
 */

export function directoryAnchor(data: any) {

    const toc: Array<string> = data.match(/<[hH][1-6][^<]*id=.*?>.*?<\/[hH][1-6]>/g)
    toc.forEach((item, index) => {
        //由于有的 id 信息有自己的规则，便自行套一层，用同样的方式提取 id 信息，
        //方便后续目录的 a标签的id类能精准的匹配上
        const itemText = item.replace(/<[^>]+>/g, '').replace(' ', '-')
        const _toc = `<div class='toc-title' id='${itemText}'>${item}</div>`
        data = data.replace(item, _toc)
    })

    return {data: data, toc: toc}
}


export function toToc(data: string[]) {

    const levelStack: string[] = []
    let result = ''

    //设置无序列表开头
    const addStartUl = () => {
        result += `<ul class='catalog-list'>`
    }

    const addEndUrl = () => {
        result += `</ul>\n`
    }

    //给每层li标签套一层a标签，实现点击 a 标签通过 id 属性跳转到当前页博客对应位置
    const addLi = (index: number, itemText: string) => {
        result += `<li id="toc-link-${index}"><a class='link' onclick="changeActiveIndex = '${index}'"   href="#${itemText}">${itemText}</a></li>\n`
    }

    //利用栈属性，先进先出，时刻保持栈底一定是最高级标题，高级标题包裹着低级标题
    data.forEach((item: any, index: number) => {

        const itemText = item.replace(/<[^>]+>/g, '').replace(' ', '-')
        const itemLabel = item.match(/<\w+2?/)[0] + '>'

        let levelIndex = levelStack.indexOf(itemLabel)

        if (levelIndex == -1) {  // 如果没有找到 <h?> 标签,便添加ul,li
            levelStack.unshift(itemLabel)
            addStartUl()
            addLi(index, itemText)
        } else if (levelIndex == 0) { //如果在顶层直接添加li
            addLi(index, itemText)
        } else {
            while (levelIndex--) { //全部闭合ul标签，抵达下一层目录
                levelStack.shift()
                addEndUrl()
            }
            addLi(index, itemText)
        }
    })
    while (levelStack.length) { //当匹配完还有剩余直接全部闭合
        levelStack.shift()
        addEndUrl()
    }

    return result

}


