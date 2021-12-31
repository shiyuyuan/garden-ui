import Card from './src/card.vue'
Card.install = function (Vue) {
	Vue.component(Card.name, Card)
}
console.log(Card)
export default Card