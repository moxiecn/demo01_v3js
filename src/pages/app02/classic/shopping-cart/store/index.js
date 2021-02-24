import { createStore, createLogger } from 'vuex'
import cart from './modules/cart.js'
import products from './modules/products.js'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        cart,
        products
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})