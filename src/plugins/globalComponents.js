import BaseButton from "../components/BaseButton";
import BaseNav from "../components/BaseNav";
import BaseTable from "../components/BaseTable";
import BaseHeader from "../components/BaseHeader";

export default {
  install(Vue) {
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseNav.name, BaseNav);
    Vue.component(BaseTable.name, BaseTable);
    Vue.component(BaseHeader.name, BaseHeader);
  }
};
