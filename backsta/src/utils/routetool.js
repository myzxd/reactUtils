export const routerArray = (newRoute) => {
    var arrRote = [];
    newRoute.forEach((s, index) => {
        if (s.children) {
            arrRote = arrRote.concat(routerArray(s.children))
        } else {
            arrRote.push(Object.assign({}, s))
        }
    })
    return arrRote
}

export const routerDrecte = (newRoute) => {
    var arrRote = [];
    newRoute.forEach((s, index) => {
        if (s.children) {
            arrRote.push({
                to: s.children[0].path,
                form: s.path
            })
        }
    })
    return arrRote
}
export const filteRouter = (newRoute) => {
    var newArr = [];
    newRoute.forEach((item, index) => {
        if (item.isCheck) {
            const newitem = {
                tile: item.tile,
                path: item.path
            }
            if (item.children) {
                newitem.children = filteRouter(item.children)
            }
            newArr.push(newitem)
        }
    })
    console.log(newArr)
    return newArr
}