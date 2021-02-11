import { createApp } from "vue";
import baseApp from "./RootApp.vue";

const rootVm = createApp(baseApp); //defines a unique root component object of the this application. It definition is located src/RootApp.vue

rootVm.mount("#rootApp"); //Mount root compponent and root template view. root template view is located public/index.html and its id is named "rootApp".