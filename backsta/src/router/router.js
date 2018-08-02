import Hom from "../view/hom/index"
import User from "../view/user/index"
import Commodity from "../view/hom/components/commodity/index"
import Ctiys from "../view/hom/components/commodity/ctity/index"
import Homs from "../view/hom/components/commodity"
import Issue from "../view/hom/components/issue/index"
import Login from "../view/user/logon"
import Logins from "../view/user/logon/index"
import { AuthorityCompoent } from "./interceptor"
const routers = [{
        path: "/user",
        component: User,
        children: [{
            path: "/user/login",
            component: Login,
            children: [{
                path: "/user/login/logins",
                component: Logins
            }]
        }]
    },
    {
        path: "/",
        component: Hom,
        children: [{
                path: "/hom",
                component: Homs,
                tile: "首页",
                isCheck: true,
            },
            {
                path: "/commodity",
                component: Commodity,
                tile: "商品",
                isCheck: true,
                children: [{
                        path: "/commodity/ctiy",
                        component: Ctiys,
                        tile: "商品管理",
                        isCheck: true,
                    },
                    {
                        path: "/commodity/issue",
                        component: Issue,
                        tile: "发布商品",
                        isCheck: true,
                    }
                ]
            },
            {
                path: "/commodity2",
                component: AuthorityCompoent(Commodity),
                tile: "订单",
                isCheck: true,
            }
        ]
    },
]

export default routers