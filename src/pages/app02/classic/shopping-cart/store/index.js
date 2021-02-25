import { createStore, createLogger } from 'vuex'

//// this file is used to create a vuex4 store instance as the first step.

//the following are 2 vuex store modules imported, cart and products.
import cart from './modules/cart.js';
import products from './modules/products.js';

const debug = process.env.NODE_ENV !== 'production';

//initialized a store for current RootApp.
export default createStore({
    modules: {
        cart,
        products
    },
    strict: debug,
    plugins: debug ? [createLogger()] : [] //if in development log, create a logger, otherwise do nothing.
})