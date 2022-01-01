import Alert from './alert'
import Card from './card'
import Collapse from './collapse'
import CollapseItem from './collapseItem'
const components = {
	Alert,
	Card,
	Collapse,
	CollapseItem
}
const install = function (Vue) {
	// 避免重複安裝
	if (install.installed) {
		return
	}
	Object.keys(components).forEach(key => {
		Vue.component(components[key].name, components[key])
	})
	console.log(components)
}
const Api = {
	install
}
export default Api