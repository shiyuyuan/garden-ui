
<template>
  <div>
    <gd-tab :tabNav="tabNavData" :tabContent="tabContentData" :idx="idxs">
    </gd-tab>
  </div>
</template>
<script>
export default {
  data(){
    return{
      tabNavData:['tab1','tab2','tab3','tab4'],
      tabContentData:['页面1','页面2','页面3','页面4'],
      idxs:1
    }
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>

</style>