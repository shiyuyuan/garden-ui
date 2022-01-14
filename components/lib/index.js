import Alert from './alert'
import Card from './card'
import Collapse from './collapse'
import CollapseItem from './collapseItem'
import Tab from './tab'
import Tree from './tree'
import Pagination from './pagination'
//二次封装 
import EchartUI from './echartUI'
import EleTable from '../eleComponents/eleTable'
import EleTree from '../eleComponents/eleTree'
const components = {
	Alert,
	Card,
	Collapse,
	CollapseItem,
	Tab,
	Tree,
	Pagination,
	EchartUI,
	EleTable,
	EleTree
}
const install = function (Vue) {
	// 避免重複安裝
	if (install.installed) {
		return
	}
	Object.keys(components).forEach(key => {
		Vue.component(components[key].name, components[key])
	})
}
const Api = {
	install
}
export default Api