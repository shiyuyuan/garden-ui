
<template>
  <gd-tree :data="data" @node-click="handleNodeClick"></gd-tree>
</template>
<script>
export default {
  data() {
    return {
      data: {
        title: "一级1",
        children: [
          {
            title: "二级1-1",
            children: [
              {
                title: "三级1-1-1",
                children: [
                  {
                    title: "四级1-1-1-1",
                    children: [
                      {
                        title: "五级1-1-1-1-1"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            title: "二级1-2",
            children: [
              {
                title: "三级1-2-1"
              }
            ]
          }
        ]
      },
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    }
  }
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