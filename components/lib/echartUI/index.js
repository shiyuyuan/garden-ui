import EchartUI from './src/index.vue';

/* istanbul ignore next */
EchartUI.install = function (Vue) {
	Vue.component(EchartUI.name, Alert);
};

export default EchartUI;
