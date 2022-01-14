import Tree from './src/studyTree.vue'
Tree.install = function (Vue) {
	Vue.component(Tree.name, Tree)
}
export default Tree