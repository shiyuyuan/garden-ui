import Vue from 'vue'
import App from './App.vue'
//本地按需引入
// import '../components/css/alert.scss'
// import '../components/css/card.scss'
// import Card from '../components/lib/card/index'
// import Alert from '../components/lib/alert/index'
// Vue.use(Card)
// Vue.use(Alert)
//本地全部引入
// import '../components/css/index.scss'
// import GardenUI from '../components/lib/index'
// Vue.use(GardenUI)
//线上全部引入
import "garden-ui/dist/css/index.css";
import GardenUI from 'garden-ui'
Vue.use(GardenUI)
//按需引入
// import "garden-ui/dist/css/card.css";
// import "garden-ui/dist/css/alert.css";
// import { Alert } from "garden-ui"
// Vue.use(Alert)


Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
