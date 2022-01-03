<template>
  <div class="gd-tab">
     <div class="gd-tab-nav">
       <div class="gd-tab-bar"
        v-for="(navs,index) in tabNav" :key="index" 
       :class="{'is-active':index===idx}"
       @click="changeIdx(index)"
       >{{navs}}</div>
     </div>
     <div class="gd-tab-content">
        <component v-if="typeof tabContent[idx] ==='function' || tabContent[idx].functional" :is='tabContent[idx]'></component>
        <div v-else class="gd-tab-pane" >{{tabContent[idx]}}</div>
     </div>
  </div>
</template>
<script>
export default {
  name: "gdTab",
  props: {
    tabNav:Array,
    tabContent:Array,
    idx:[String,Number]
  },
  mounted () {
  },
  methods: {
    changeIdx(index){
      this.idx = index;
      console.log(this.tabContent[this.idx])
      console.log(typeof this.tabContent[this.idx] ==='function')
    }
  },
  computed: {
  }

};
</script>