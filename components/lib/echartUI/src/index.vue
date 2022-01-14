<template>
  <div :id="echartId" class="chartContainer"></div>
  <!-- <div :id="echartId" :style="{'width':className.height,'height':className.height}"></div> -->
</template>

<script type="text/babel">
import * as echarts from "echarts";
export default {
  components: {},
  name: "gd-echart-ui",
  props: {
    option: {
      type: Object
    },
    echartId: String,
    className: Object
  },
  created() {
    //   this.elId = uuidv1() //获取随机id
  },
  mounted() {
    var chartDom = document.getElementById(this.echartId);
    var myChart = echarts.init(chartDom);
    this.option && myChart.setOption(this.option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  },
  data() {
    return {};
  },

  methods: {},

  computed: {}
};
</script>