import EleTree from './src/index.vue'
EleTree.install = function (Vue) {
	Vue.component(EleTree.name, EleTree)
}
export default EleTree