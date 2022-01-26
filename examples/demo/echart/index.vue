
<template>
  <div class="echartDemo">
    <div class="echartDemo1">
      <gd-echart-ui :option="option" :echartId="'EchartsLine'+clourse()" :className="className" />
    </div>
    <div class="echartDemo2">
      <gd-echart-ui :option="option" :echartId="'EchartsLine'+clourse()" :className="className" />
    </div>
    <div class="echartDemo3">
      <gd-echart-ui :option="option" :echartId="'EchartsLine'+clourse()" :className="className" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      className: {
        width: "100%",
        height: "100%"
      },
      option: {
        title: {
          show: false
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          show: false
        },
        toolbox: {},
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "Email",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "Union Ads",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "Video Ads",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "Direct",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "Search Engine",
            type: "line",
            stack: "Total",
            label: {
              show: true,
              position: "top"
            },
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      },
      echartId: "EchartsLine"
    };
  },
  mounted() {
    // console.log(32);
    // console.log(this.clourse());
    // // this.echartId = "EchartsLine" + this.clourse();
    // console.log(this.echartId);
  },
  computed: {},
  methods: {
    clourse() {
      let clourse = function() {
        var a = 1;
        return function() {
          return a++;
        };
      };
      this.clourse = clourse;
      console.log(this.clourse);
    }
  }
};
</script>
<style scoped lang="scss">
.echartDemo {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  & > div {
    flex: 1;
    width: 30%;
    height: 300px;
  }
}
</style>