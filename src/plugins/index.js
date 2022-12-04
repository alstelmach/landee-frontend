import { loadFonts } from "./web-font-loader";
import vuetify from "./vuetify";

export function registerPlugins(app) {
  loadFonts().then(() => {});
  app.use(vuetify);
}
