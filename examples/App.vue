<template>
  <div id="app">
    <gd-tab
      :tabNav="tabNavData"
      :tabContent="tabContentData"
      :idx="idxs"
      @tabChange="tabChangeClick"
    ></gd-tab>
    <!-- <component :is="tabContentData[3]"></component> -->
  </div>
</template>

<script>
const Pagination = () => import("./demo/pagination/index");
const Tree = () => import("./demo/tree/index");
const Card = () => import("./demo/card/index");
const Mvvm = () => import("./demo/mvvm/index");
const Tab = () => import("./demo/tab/index");
const Collapse = () => import("./demo/collapse/index");

const Alert = () => <gd-alert title="成功提示的文案" type="success"></gd-alert>;
export default {
  name: "App",
  components: {},
  data() {
    return {
      tabNavData: [
        "Pagination",
        "tree",
        "alert",
        "card",
        "collapse",
        "tab",
        "mvvm"
      ],
      tabContentData: [Pagination, Tree, Alert, Card, Collapse, Tab, Mvvm],
      idxs: 0
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
