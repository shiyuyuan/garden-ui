<template>
  <div id="app">
    <gd-collapse :value="activeName" accordion style="margin:30px">
      <gd-collapse-item title="eleTable" name="1">
        <eleTableComponent />
      </gd-collapse-item>
      <gd-collapse-item title="eleTree" name="2">
        <eleTreeComponent />
      </gd-collapse-item>
      <gd-collapse-item title="eleForm" name="3">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </gd-collapse-item>
      <gd-collapse-item title="组件化" name="4">
        <gd-tab
          :tabNav="tabNavData"
          :tabContent="tabContentData"
          :idx="idxs"
          @tabChange="tabChangeClick"
        ></gd-tab>
      </gd-collapse-item>
    </gd-collapse>
    <!-- <component :is="tabContentData[3]"></component> -->
  </div>
</template>

<script>
import eleTableComponent from "./secondDev/eleTable";
import eleTreeComponent from "./secondDev/eleTree";
const Pagination = () => import("./demo/pagination/index");
const Tree = () => import("./demo/tree/index");
const Card = () => import("./demo/card/index");
const Mvvm = () => import("./demo/mvvm/index");
const Tab = () => import("./demo/tab/index");
const Collapse = () => import("./demo/collapse/index");
const EchartUI = () => import("./demo/echart/index");
const Alert = () => <gd-alert title="成功提示的文案" type="success"></gd-alert>;
export default {
  name: "App",
  components: { eleTableComponent, eleTreeComponent },
  data() {
    return {
      tabNavData: [
        "echartUI",
        "Pagination",
        "tree",
        "alert",
        "card",
        "collapse",
        "tab",
        "mvvm"
      ],
      tabContentData: [
        EchartUI,
        Pagination,
        Tree,
        Alert,
        Card,
        Collapse,
        Tab,
        Mvvm
      ],
      idxs: 2,
      activeName: ["2"]
    };
  },
  methods: {
    tabChangeClick(i) {
      this.idxs = i;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
