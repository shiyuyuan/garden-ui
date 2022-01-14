
<template>
  <div>
    <gd-tree :treeData="datas" ref="vtree" @clickNode="clickNode" :checkBox="checkbox"></gd-tree>
    <button @click="findSelected">获取选中项</button>
  </div>
</template>
<script>
export default {
  methods: {
    findSelected() {
      console.log(
        "you clicked" + JSON.stringify(this.$refs.vtree.getSelectedNode())
      );
      if (this.checkbox) {
        console.log(
          "you choosed " + JSON.stringify(this.$refs.vtree.getCheckedNodes())
        );
      }
    },
    clickNode(target) {
      console.log("you clicked " + target.id);
    }
  },
  data() {
    return {
      msg: "Welcome to Your vtree App",
      checkbox: true,
      datas: [
        {
          text: "xiaoming",
          id: "1",
          icon: "folder",
          children: [
            {
              text: "1-1",
              id: "1-1",
              icon: "folder",
              children: [
                { text: "1-1-1", id: "1-1-1", icon: "file" },
                { text: "1-1-2", id: "1-1-2", icon: "file" }
              ]
            },
            {
              text: "1-2",
              id: "1-2",
              icon: "folder",
              children: [
                { text: "1-2-1", id: "1-2-1", icon: "file" },
                { text: "1-2-2", id: "1-2-2", icon: "file" }
              ]
            }
          ]
        },
        {
          text: "hua",
          id: "2",
          icon: "folder",
          children: [
            {
              text: "2-2",
              id: "2-2",
              icon: "file"
            }
          ]
        },
        {
          text: "hua",
          id: "3",
          icon: "folder",
          children: [
            {
              text: "3-3",
              id: "3-3",
              icon: "file"
            }
          ]
        }
      ]
    };
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