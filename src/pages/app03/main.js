import { createApp } from "vue";
import RootApp from "./RootApp.vue";
import store from "./store/index.js";

const app = createApp(RootApp);

app.use(store);

app.mount("#app03");
