import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCaretUp,
  faCaretDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faCaretUp, faCaretDown, faSearch);

const app = createApp(App);
app.component("fa", FontAwesomeIcon);
app.mount("#app");

// Custom Filter

app.config.globalProperties.$filters = {
  // percent
  priceChange(value) {
    value = value.toString();
    if (value.includes("-")) {
      return value;
    } else {
      return "";
    }
  },

  // Comma
  commaSeparator(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },

  stringLimit(value, size) {
    if (!value) return "";
    value = value.toString();
    if (value.length <= size) {
      return value;
    }
    return value.substr(0, size);
  },
};
