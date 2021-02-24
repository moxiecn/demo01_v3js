export default {
    install: (app, options) => {
        app.config.globalProperties.$translate = (key) => {
            return key.split('.')
                .reduce((o, i) => { if (o) return o[i] }, i18n)
        }

        app.provide('i18n', options)

        // app.directive('my-directive', {
        //     bind(el, binding, vnode, oldVnode) {
        //         // some logic ...
        //     }
        //     //to-do something
        // })

        // app.mixin({
        //     created() {
        //         // some logic ...
        //     }
        //     //to-do something
        // })
    }
}