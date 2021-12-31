<template>
  <div class="gd-card" :style="width?{width:width+'px'}:{}">
    <div class="gd-card-img" :style="imgHeight?{height:imgHeight+'px'}:{}">
      <img :src="imgSrc" alt="img" />
    </div>
    <div v-if="summary" class="gd-card-summary">{{summary}}</div>
    <div v-else class="gd-card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  name: "gdCard",
  props: {
    width: {
      type: [Number, String],
      default: 0
    },
    imgSrc: {
      type: String,
      default: ""
    },
    imgHeight: {
      type: [Number, String],
      default: 0
    },
    summary: {
      type: String,
      degfault: ""
    }
  }
};
</script>