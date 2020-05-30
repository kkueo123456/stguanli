<template>
  <div>
     <transition enter-active-class="animate__zoomInLeft">
    <div id="myChart" :style="{width: '600px', height: '600px'}"></div>
     </transition>
  </div>
</template>
<script>
export default {
  props: [],
  components: {},
  data() {
    return {
      ser: []
    };
  },
  methods: {
    cs() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
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
      myChart.setOption(option);
      myChart.on("click", function(params) {
        // 控制台打印数据的名称
        window.open(
          "https://www.baidu.com/s?wd=" + encodeURIComponent(params.name)
        );
        console.log(params.name);
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
    this.cs();
  },
  watch: {},
  computed: {}
};
</script>
<style  scoped>
</style>