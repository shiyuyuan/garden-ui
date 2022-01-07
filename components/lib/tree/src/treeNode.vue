<template>
  <ul>
    <div class="gd-tree-title">
      <i class="gd-icon_updown" v-if="treeData.children&&treeData.children.length>0"></i>
      <span class="gd-tree-title_text">{{treeData.title}}</span>
    </div>
    <gdTreeNode
      class="gd-tree-node"
      v-for="(item,index) in treeData.children"
      :key="index"
      :treeData="item"
    >{{item.title}}</gdTreeNode>
  </ul>
</template>
<script>
export default {
  name: "gdTreeNode",
  props: {
    treeData: {
      type: Object,
      require: true
    }
  },
  data() {
    return {};
  }
};
</script>