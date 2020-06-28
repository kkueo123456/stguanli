<template>
<!-- 调拨详情（未知，可能作废） -->
  <div>
    <v-head></v-head>
    <div class="wrap">
      <div class="head">
        <div class="headLeft">
          <div class="rongqi">
            <el-button type="primary" @click="daochuTab">+导出表格+</el-button>
          </div>
        </div>
      </div>
      <!-- 库房头部下方下栏菜单及品牌筛选 -->
      <div class="nav">
        <div class="navLeft">
          <span class="navInformation">调拨单号:1231232131231</span>
          <span class="navInformation">调拨操作员:王小平</span>
          <span class="navInformation">调拨时间:2020/5/11</span>
          <span class="navInformation">来自:北京仓</span>
          <span class="navInformation">目标:唐山仓</span>
          <span class="navInformation">入库员:李四</span>
          <span class="navInformation">入库成功</span>
        </div>
        <div class="navRight">
          <span>共10件商品</span>
        </div>
      </div>
      <!-- 库房主体内容 -->
      <div class="main">
        <!-- 库房主体内容列表 -->
        <div class="list" v-for="(item,index) in data" :key="index">
          <!-- 主体内容列表左 -->
          <div class="mainLeft">
            <!-- 主体内容列表左边图片 -->
            <div class="leftTu"></div>
            <!-- 主体内容列表右侧信息 -->
            <div class="Rightzi">
              <!-- 主体内容列表右侧标题及相应标签 -->
              <div class="title">
                <h2 class="listTit">{{item.name}}</h2>
                <!-- <div class="biaoqianList">
                <span class="biaoqian" v-for="(item2,index) in item.biaoqian" :key="index">{{item2}}</span>
                </div>-->
                <div class="listBq">
                  <span class="listBqji">{{item.mai}}</span>
                </div>
              </div>
              <!-- 主体内容列表右侧信息头下方商品详细信息 -->
              <div class="another">
                <ul class="anotherList">
                  <li class="anotherStyle">品牌:{{item.logo}}</li>
                  <li class="anotherStyle">入库价格:{{item.price}}</li>
                </ul>
                <ul class="anotherList">
                  <li class="anotherStyle">系列:{{item.lie}}</li>
                  <li class="anotherStyle">入库时间:{{item.time|timeFilter}}</li>
                </ul>
                <ul class="anotherList">
                  <li class="anotherStyle">款式:{{item.kuan}}</li>
                  <li class="anotherStyle">仓位:{{item.cangwei}}</li>
                </ul>
                <ul class="anotherList">
                  <li class="anotherStyle">成色:{{item.color}}</li>
                  <li class="anotherStyle">编号:{{item.num}}</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 主体内容列表右 -->
          <div class="mainRight">
            <!-- 出库及dialog -->
            <h4 class="mainRight-ck" @click="chakan(item.id)">查看</h4>
            <!-- 下方销售定价 -->
            <h4 class="dingPri">销售定价:{{item.price}}</h4>
          </div>
        </div>
        <!-- 库房主体内容下方分页功能 -->
        <fenye class="pages" @jumpPage="changeye"></fenye>
      </div>
    </div>
  </div>
</template>
<script>
import fenye from "../../components/fenye";
import vHead from "../../components/head";

export default {
  props: [],
  components: {
    fenye,
    vHead
  },
  data() {
    return {
      search: "",
      options: [
        {
          value: "0",
          label: "唐山总仓"
        },
        {
          value: "1",
          label: "北京总仓"
        },
        {
          value: "2",
          label: "上海总仓"
        },
        {
          value: "3",
          label: "河北总仓"
        },
        {
          value: "4",
          label: "天津总仓"
        }
      ],
      value: "0",
      data: [
        {
          img: "",
          name: "LV老花中号字母带",
          biaoqian: ["在售", "直播", "微信"],
          logo: "路易威灯/LV",
          price: "10000",
          lie: "pallas传奇",
          kuan: "Palla clutch",
          time: "1587472220",
          cangwei: "上海总仓/C-1-20",
          color: "95-97新",
          num: "12345678909123",
          finPri: "120000",
          id: "0",
          cw: "2"
        },
        {
          img: "",
          name: "LV老花中号字母带",
          biaoqian: ["在售", "直播", "微信"],
          logo: "路易威灯/LV",
          price: "10000",
          lie: "pallas传奇",
          kuan: "Palla clutch",
          time: "1587472220",
          cangwei: "唐山总仓/C-1-20",
          color: "95-97新",
          num: "12345678909123",
          finPri: "120000",
          id: "1",
          cw: "0"
        },
        {
          img: "../../img/login.png",
          name: "LV老花中号字母带",
          biaoqian: ["在售", "直播", "微信"],
          logo: "路易威灯/LV",
          price: "10000",
          lie: "pallas传奇",
          kuan: "Palla clutch",
          time: "1587472220",
          cangwei: "北京总仓/C-1-20",
          color: "95-97新",
          num: "12345678909123",
          finPri: "120000",
          id: "2",
          cw: "1"
        }
      ],
      /*选择日期*/

      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: ""
    };
  },
  methods: {
    /*头部搜索按钮*/
    daochuTab() {
      require.ensure([], () => {
        const { export_json_to_excel } = require("../../excel/Export2Excel"); //注意这个Export2Excel路径
        const tHeader = [
          "品牌",
          "入库价格",
          "系列",
          "入库时间",
          "款式",
          "仓位",
          "成色",
          "编号",
          '图片'
        ]; // 上面设置Excel的表格第一行的标题
        const filterVal = [
          "logo",
          "price",
          "lie",
          "time",
          "kuan",
          "cangwei",
          "color",
          "num",
          "img"
        ]; // 上面的index、nickName、name是tableData里对象的属性key值
        const list = this.data; //把要导出的数据tableData存到list
        const data = this.formatJson(filterVal, list);
        export_json_to_excel(tHeader, data, "列表excel"); //最后一个是表名字
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    },
    // handleCurrentChange(val) {
    //   console.log(val);
    // },
    /*翻页功能*/

    changeye(val) {
      console.log(val);
    },
    /*查看*/
    chakan(id) {
      this.$router.push("/detail?id=" + id);
    }
  },
  mounted() {
    console.log(this.$route.query);
  },
  watch: {},
  beforeRouteEnter(to, from, next) {
    let isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin == 1) {
      next();
    }
  },
  computed: {}
};
</script>
<style lang="stylus" scoped>
@import '../../stylus/index.styl';
/* 头部样式 */
.head {
  width: 100%;
  height: 60px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
}
.wrap {
  padding-left: 20px;
  background-color: #f0f4f4;
  padding-right: 20px;
}

.headLeft .rongqi .el-button--primary {
  background-color: $bg1;
  border-color: $bg1;
  width: 200px;
}

/* 头部下方下拉菜单等样式 */
.nav {
  border-radius: 10px;
  background-color: white;
  padding-top: 25px;
  padding-left: 20px;
  padding-bottom: 25px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.slect {
  margin-right: 10px;
}
.slect #inputselect {
  width: 120px;
  height: 30px;
  border: 1px solid $bg1;
}
.navLeft {
  display: flex;
  justify-content: space-between;
}
.navLeft .navInformation {
  margin-right: 25px;
}

.navRight {
  padding-right: 20px;
}
.navRight span {
  color: red;
}
.navRight .el-button--primary {
  background-color: $bg1;
  border-color: $bg1;
  border-radius: 20px;
}
/* 下拉菜单下方主题样式 */
.main {
  background-color: white;
  padding-left: 16px;
  padding-right: 20px;
  padding-bottom: 20px;
}
.main .list {
  padding-top: 40px;
  border-bottom: 1px solid $bg1;
  padding-bottom: 30px;
}
/* 下拉菜单下方主题样式列表左侧图片 */

.main .list .leftTu {
  margin-left: 20px;
  width: 130px;
  height: 125px;
  background-color: tomato;
  margin-right: 20px;
}
.mainLeft {
  display: flex;
}
/* 下拉菜单下方主题样式列表标题 */
.list {
  display: flex;
  justify-content: space-between;
}
.listTit {
  font-size: 18px;
  color: $bg1;
  margin-right: 20px;
  margin-bottom: 10px;
}
.title .listBq .listBqji {
  display: inline-block;
  width: 25px;
  height: 25px;
  line-height: 25px;
  margin-bottom: 25px;
  text-align: center;
  color: white;
  background-color: #169bd5;
}

/* .biaoqianList .biaoqian {
  display: inline-block;
  width: 55px;
  height: 20px;
  border: 1px solid red;
  color: red;
  margin-right: 15px;
  text-align: center;
  line-height: 20px;
} */
/* 下拉菜单下方主题样式列表下方信息*/
.another {
  display: flex;
}
.another .anotherList {
  margin-right: 20px;
}
.another .anotherStyle {
  color: #606060;
  font-size: 13px;
  margin-bottom: 10px;
  white-space: nowrap;
}
/* 下拉菜单下方主题样式列表右侧 */

.mainRight {
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20px;
}
.mainRightTop {
  display: flex;
  justify-content: flex-end;
}
.mainRight .detail {
  margin-bottom: 15px;
  text-align: right;
  cursor: pointer;
  margin-left: 10px;
}

.mainRight .dingPri {
  color: blue;
  font-size: 18px;
}
.mainRight .mainRight-ck {
  color: #35a3d8;
  font-weight: normal;
  text-align: end;
  cursor: pointer;
}
.pages {
  text-align: center;
}
</style>