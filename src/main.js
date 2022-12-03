import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

const rootContainer = "#app";

createApp(App).use(vuetify).mount(rootContainer);
