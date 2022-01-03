<template>
  <div id="app">
    111
    <gd-tab :tabNav="tabNavData" :tabContent="tabContentData" :idx="idxs"/>
  </div>
</template>

<script>
const Card = () =>import('./demo/card/index')
const Mvvm = () =>import('./demo/mvvm/index')
const Tab = () =>import('./demo/tab/index')
const Collapse = () =>import('./demo/collapse/index')
const Alert = () =><gd-alert title="成功提示的文案" type="success"></gd-alert>
export default {
  name: "App",
  components: {
  },
    data(){
    return{
      tabNavData:['alert','card','collapse','tab','mvvm'],
      tabContentData:[
        Alert,
        Card,
        Collapse,
        Tab,
        Mvvm],
      idxs:1
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
