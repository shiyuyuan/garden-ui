<template>
  <div class="gd-tree">
    <gd-tree-node :treeData="data" />
  </div>
</template>
<script>
import gdTreeNode from "./treeNode.vue";
export default {
  name: "gdTree",
  components: {
    gdTreeNode
  },
  props: {
    data: Object
  }
};
</script>