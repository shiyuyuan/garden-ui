<template>
  <div id="app">
    <div class="readMe">1.提示文案組件</div>
    <gd-alert title="成功提示的文案" type="success"></gd-alert>
    <div style="margin-bottom:10px"></div>
    <gd-alert title="错误提示的文案" type="error"></gd-alert>
    <div class="readMe">2.卡片組件</div>
    <Card />
    <div class="readMe">3.手动实现双向数据绑定</div>
    <Mvvm />
    <div class="readMe">4.折叠面板</div>
    <Collapse />
  </div>
</template>

<script>
import Mvvm from "./demo/mvvm/index.vue";
import Card from "./demo/card/index.vue";
import Collapse from "./demo/collapse/index.vue";
export default {
  name: "App",
  components: { Mvvm, Collapse, Card }
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
.readMe {
  display: flex;
  margin: 20px;
}
</style>
