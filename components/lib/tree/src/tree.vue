<template>
  <div class="gd-tree">
    <gd-tree-node :node="child" v-for="(child,index) in data" :key="index" />
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
    data: []
  }
};
</script>