<template>
  <div class="gd-collapse-item">
    <div class="gd-collapse-header" @click="headerClick">
      <h4>{{title}}</h4>
    </div>
    <div class="el-collapse-item__wrap" v-show="isActive">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "gdCollapseItem",
  props: {
    title: {
      type: String,
      default: ""
    },
    name: {
      type: [String, Number],
      default: ""
    }
  },
  inject: ["collapse"],
  computed: {
    isActive() {
      //   return this.$parent.value.indexOf(this.name) > -1;

      return this.collapse.activeNames.indexOf(this.name) > -1;
    }
  },
  methods: {
    headerClick() {
      this.collapse.$emit("item-click", this);
      //   this.isActive = !this.isActive;
    }
  },
  components: {}
};
</script>