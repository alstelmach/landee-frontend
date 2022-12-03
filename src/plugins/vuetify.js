import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetifyOptions = {
  components,
  directives,
};

const vuetify = createVuetify(vuetifyOptions);

export default vuetify;
