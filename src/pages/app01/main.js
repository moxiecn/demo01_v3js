/**
 * @description: main entry configuration file.
 * @author: moxie.liu
 * @date: 2021-02-23
 */
import { createApp } from 'vue'
// import { createStore } from 'vuex'

import RootApp from './RootApp.vue'
import { router1 } from './router/router.js'

// const sgaStore = createStore({
//     state() {
//         return {
//             sgaUserID: "admin",
//             count: 0
//         }
//     },
//     mutations: {
//         increment(state) {
//             state.count++
//         },
//         logout(state) {
//             state.sgaUserID = "";
//         }
//     }
// });
const app = createApp(RootApp);
app.use(router1);
// app.use(sgaStore);
//the following, we use sagStore.commit to operate state.
// sgaStore.commit('increment')
// console.log(sgaStore.state.count) // -> 1

app.mount('#rootApp')