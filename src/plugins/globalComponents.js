import BaseButton from "../components/BaseButton";
import BaseNav from "../components/BaseNav";
import BaseTable from "../components/BaseTable";
import BaseHeader from "../components/BaseHeader";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { CubeSpin } from 'vue-loading-spinner'

export default {
  install(Vue) {
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseNav.name, BaseNav);
    Vue.component(BaseTable.name, BaseTable);
    Vue.component(BaseHeader.name, BaseHeader);
    Vue.component("Loading", Loading);
    Vue.component("Cubespin", CubeSpin);
  }
};
