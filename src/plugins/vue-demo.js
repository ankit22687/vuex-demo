import "@/assets/vendor/nucleo/css/nucleo.css";
import "@/assets/scss/vue-demo.scss";
import globalComponents from "./globalComponents";

export default {
  install(Vue) {
    Vue.use(globalComponents);
  }
};
