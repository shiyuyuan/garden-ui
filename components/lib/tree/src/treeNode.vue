<template>
  <ul>
    <div class="gd-tree-node_content" @click="handleClick">
      <i
        class="gd-icon_updown"
        :class="{'is-active':this.expanded}"
        v-if="node.children&&node.children.length>0"
      ></i>
      <span class="gd-tree-node_label">{{node.text}}</span>
    </div>
    <div class="gd-tree-node_children" v-show="expanded">
      <gdTreeNode
        class="gd-tree-node"
        v-for="(item,index) in node.children"
        :key="index"
        :node="item"
      >{{item.title}}</gdTreeNode>
    </div>
  </ul>
</template>
<script>
export default {
  name: "gdTreeNode",
  props: {
    node: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      expanded: false
    };
  },
  methods: {
    handleClick(node) {
      this.expanded = !this.expanded;
      this.$parent.$emit("node-click", this.node);
    }
  }
};
</script>