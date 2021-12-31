<template>
  <div id="app">
    <div class="readMe">1.提示文案組件</div>
    <gd-alert title="成功提示的文案" type="success"></gd-alert>
    <div style="margin-bottom:10px"></div>
    <gd-alert title="错误提示的文案" type="error"></gd-alert>
    <div class="readMe">2.卡片組件</div>
    <gd-card width="330" imgHeight="180" imgSrc="p1.png" summary="基于Vue3最新标准，实现后台前端综合解决方案">
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 543报名</div>
          <div class="price">￥299.00</div>
        </div>
      </template>
    </gd-card>
    <div class="readMe">3.手动实现双向数据绑定</div>
    <Mvvm />
  </div>
</template>

<script>
import Mvvm from "./demo/mvvm/index.vue";
export default {
  name: "App",

  components: { Mvvm }
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
.footer {
  text-align: left;
  padding: 0 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.level {
  color: #666;
}
.price {
  color: red;
}
</style>
