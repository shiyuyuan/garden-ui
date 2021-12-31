
<template>
  <div>
    <gd-card width="330" imgHeight="180" imgSrc="p1.png" summary="基于Vue3最新标准，实现后台前端综合解决方案">
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 543报名</div>
          <div class="price">￥299.00</div>
        </div>
      </template>
    </gd-card>
  </div>
</template>
<script>
export default {
  mounted() {},
  methods: {}
};
</script>
<style scoped>
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