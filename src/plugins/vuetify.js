import "vuetify/styles"; // Import Vuetify styles
import "@mdi/font/css/materialdesignicons.css"; // Import Material Design Icons font
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  // Add your configuration here, e.g., themes, icons, etc.
  icons: {
    defaultSet: "mdi",
  },
});

export default vuetify;
