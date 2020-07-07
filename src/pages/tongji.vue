<template>
  <!-- 数据统计 -->
  <div class="EchartsWrap">
    <transition enter-active-class="animate__zoomInLeft">
      <div id="myChart"></div>
    </transition>
    <div id="myChart2"></div>
  </div>
</template>
<script>
export default {
  props: [],
  components: {},
  data() {
    return {
      ser: [],
      fun: [],
      funNum: null
    };
  },
  methods: {
    cs() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      let myChart2 = this.$echarts.init(document.getElementById("myChart2"));
      var option = {
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ["product", "售出", "退回", "销售"],
          source: this.ser.map(item => {
            return {
              product: item.month,
              售出: item.sele,
              退回: item.back,
              销售: item.zong
            };
          })
        },

        xAxis: { type: "category" },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
      };
      //饼图
      var option2 = {
        title: {
          text: "饼状统计图",
          subtext: "",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: this.fun
        },
        series: [
          {
            name: "公司状况",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: this.funNum,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      myChart.setOption(option);
      myChart2.setOption(option2);
      myChart.on("click", function(params) {
        // 控制台打印数据的名称
        window.open(
          "https://www.baidu.com/s?wd=" + encodeURIComponent(params.name)
        );
      });
    }
  },
  mounted() {
    this.ser = [
      {
        month: "一月",
        sele: 43.3,
        zong: 193.7
      },
      {
        month: "二月",
        sele: 46,
        back: 78,
        zong: 93
      },
      {
        month: "三月",
        sele: 70,
        back: 56,
        zong: 22
      },
      {
        month: "四月",
        sele: 23,
        back: 23,
        zong: 23
      }
    ];
    this.fun = ["销售", "采购", "库房", "直播","网上售出"];
    this.funNum = [
      { value: 223, name: "销售" },
      { value: 310, name: "采购" },
      { value: 234, name: "库房" },
      { value: 135, name: "直播" },
      { value: 1678, name: "网上售出" }
    ];
    this.cs();
  },
  watch: {},
  computed: {}
};
</script>
<style  scoped>
.EchartsWrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
#myChart {
  width: 48%;
  max-height: 500px;
  padding-top: 20px;
  background-color: white;
}
#myChart2 {
  width: 48%;
  max-height: 500px;
  padding-top: 20px;
  background-color: white;
}
</style>