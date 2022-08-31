

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
        result += `<li><a class='link' @click="activeIndex = ${index}" id="toc-link-${index}" :class="{'active-color': ${index} === activeIndex}"  href="#${itemText}">${itemText}</a></li>\n`
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



/*private function routeChange(val: any) {
    const data = document.getElementsByClassName(`toc-link-${val.hash}`)[0] as Element
    this.linkLists.forEach((list: Element) => {
        data == list ? list.classList.add('active-color') : list.classList.remove('active-color')
    })

}*/

/*nextTick(async () => {
    await this.getTitleHeight()
    await this.getCataloglist()
}).then(r => {
    console.log(r)
})

// 获取每个文章标题的距顶部的高度
private async function getTitleHeight() {
    const titlelist = Array.prototype.slice.call((this.$refs.article as Element).getElementsByClassName('toc-title'))
    titlelist.forEach((item, index) => {
        this.listHeight.push(item.offsetTop)
    })
    // 滚动的距离无法取到最后一个，因此在数组最后加上上一个两倍达到效果
    this.listHeight.push(2 * (titlelist[titlelist.length - 1].offsetTop))
}

// 获取目录的所有ul、a标签
private async function getCataloglist() {
    const catalogList = (this.$refs.catalog as Element).getElementsByClassName('catalog-list')
    this.linkLists = document.getElementsByName('link')
    this.target = Array.prototype.slice.call(catalogList)
}

 export function handleScroll() {
    const scrollY = window.pageYOffset
    this.fixed = scrollY > 230
    for (let i = 0; i < this.listHeight.length - 1; i++) {
        const h1: number = this.listHeight[i]
        const h2: number = this.listHeight[i + 1]
        if (scrollY >= h1 && scrollY <= h2) {
            const data: Element = document.getElementsByClassName(`toc-link-#${i}`)[0] as Element // 获取文章滚动到目录的目标元素
            this.linkLists.forEach((list: Element) => {
                let top = 0
                top = i > 7 ? -28 * (i - 7) : 0
                this.target[0].style.marginTop = `${top}px`
                data == list ? list.classList.add('active') : list.classList.remove('active') // 其他移除active
            })
        }
    }
}*/


