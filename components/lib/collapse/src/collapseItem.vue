<template>
  <div class="gd-collapse-item" :class="{'is-active':isActive}">
    <div class="gd-collapse-item_header" @click="headerClick" :class="{'is-active':isActive }">
      <slot name="title">{{title}}</slot>
      <i class="gd-icon_updown" :class="{'is-active':isActive}"></i>
    </div>
    <transition name="fade">    
      <div class="gd-collapse-item_wrap" v-show="isActive">
        <div class="gd-collapse-item_content"> <slot></slot>
        </div>
      </div>
    </transition>
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
