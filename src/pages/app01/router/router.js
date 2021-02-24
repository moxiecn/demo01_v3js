import { createRouter, createWebHashHistory } from "vue-router";

const home = () =>
    import ("./components/demo01/home")
const login = () =>
    import ("./components/demo01/login.vue")
const Home1 = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }
const NotFound = { template: '<div>NotFound404</div>' }
const UserGeneric = { template: '<div>UserGeneric</div>' }
import User from './components/demo02/User.vue'
import UserHome from './components/demo02/UserHome.vue'
import UserProfile from './components/demo02/UserProfile.vue'
import UserPosts from './components/demo02/UserPosts.vue'

//demo04
// import UserSettings4 from './components/demo04/UserSettings.vue'
// import UserEmailsSubscriptions4 from './components/demo04/UserEmailsSubscriptions.vue'
// import UserProfile4 from './components/demo04/UserProfile.vue'
// import UserProfilePreview4 from './components/demo04/UserProfilePreview.vue'
const UserSettings4 = () =>
    import ( /* webpackChunkName: "group-user4" */ './components/demo04/UserSettings.vue')
const UserEmailsSubscriptions4 = () =>
    import ( /* webpackChunkName: "group-user4" */ './components/demo04/UserEmailsSubscriptions.vue')
const UserProfile4 = () =>
    import ( /* webpackChunkName: "group-user4" */ './components/demo04/UserProfile.vue')
const UserProfilePreview4 = () =>
    import ( /* webpackChunkName: "group-user4" */ './components/demo04/UserProfilePreview.vue')

//demo03
// import First from './components/demo03/First.vue'
// import Second from './components/demo03/Second.vue'
// import Third from './components/demo03/Third.vue'
const First = () =>
    import ( /* webpackChunkName: "group-user3" */ './components/demo03/First.vue')
const Second = () =>
    import ( /* webpackChunkName: "group-user3" */ './components/demo03/Second.vue')
const Third = () =>
    import ( /* webpackChunkName: "group-user3" */ './components/demo03/Third.vue')

const routes = [
    { path: '/', name: "Home1", component: Home1 },
    { path: '/about', name: "About", component: About },
    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    // 将匹配以 `/user-` 开头的所有内容，并将其放在 `$route.params.afterUser` 下
    { path: '/user-:afterUser(.*)', component: UserGeneric },
    //{ path: "/", redirect: "/login" },
    { path: "/home", name: "home", component: home },
    { path: "/login", name: "login", component: login },
    ///// deom02
    {
        path: "/Users/:username",
        //      path: "/Users/:username(\\d+)?",
        name: "User",
        component: User,
        props: true,
        children: [{
                // 当 /user/:id/profile 匹配成功 
                // UserProfile 将被渲染到 User 的 <router-view> 内部
                path: 'profile',
                component: UserProfile,
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 将被渲染到 User 的 <router-view> 内部
                path: 'posts',
                component: UserPosts,
            },
            // UserHome will be rendered inside User's <router-view>
            // when /user/:id is matched
            // 当 /user/:id 匹配成功
            // UserHome 将被渲染到 User 的 <router-view> 内部
            { path: '', component: UserHome },
        ],
    },
    {
        path: '/demo03/schemaA',
        name: 'demo03SchemaA',
        // a single route can define multiple named components
        // which will be rendered into <router-view>s with corresponding names.
        components: {
            demo03_a: First,
            demo03_b: Second,
            demo03_c: Third,
        },
    },
    {
        path: '/demo03/schemaB',
        name: 'demo03SchemaB',
        components: {
            demo03_a: Third,
            demo03_b: Second,
            demo03_c: First,
        },
    },
    { /// demo04
        path: '/demo04/settings',
        name: "demo04Root",
        alias: "/demo04mp",
        // You could also have named views at tho top
        components: { demo04_main: UserSettings4 },
        children: [{
                path: 'emails',
                name: "demo04Emails",
                alias: "/demo04email",
                meta: { transition: 'slide-right' },
                components: {
                    demo04_content: UserEmailsSubscriptions4,
                }
            },
            {
                path: 'profile',
                name: "demo04Profile",
                alias: "/demo04profile",
                meta: { transition: 'slide-left' },
                components: {
                    demo04_content: UserProfile4,
                    //default: UserProfile4,
                    demo04_helper: UserProfilePreview4,
                },
            },
        ],
    },
]

const router1 = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export { router1 }

//import { createRouter, createWebHistory } from 'vue-router'
// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     //...
//   ],
// })