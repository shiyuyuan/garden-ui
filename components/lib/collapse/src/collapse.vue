<template>
  <div class="gd-collapse">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "gdCollapse",
  props: {
    accordion: {
      type: Boolean
    },
    value: {
      type: [Array, String, Number],
      defaule() {
        return [];
      }
    }
  },
  data() {
    return {
      activeNames: [].concat(this.value)
    };
  },
  watch: {},
  created() {
    this.$on("item-click", item => {
      let index = this.activeNames.indexOf(item.name);
      // 是手风琴
      if (this.accordion) {
        this.activeNames = [];
      }
      if (index > -1) {
        this.activeNames.splice(index, 1);
      } else {
        this.activeNames.push(item.name);
      }
    });
  },
  provide() {
    return {
      collapse: this
    };
  },
  components: {}
};
</script>