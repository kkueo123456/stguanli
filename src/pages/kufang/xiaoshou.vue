<template>
  <div>
    <!-- 库房头部搜索及功能 -->
    <div class="head">
      <div class="headLeft">
        <div class="rongqi">
          <el-input placeholder="请输入货品编号" v-model="search" clearable></el-input>
        </div>
        <div class="rongqi">
          <el-button type="primary" @click="headSearch">搜索</el-button>
        </div>
      </div>
    </div>
    <!-- 库房头部下方下栏菜单及品牌筛选 -->
    <div class="nav">
      <div class="navLeft">
        <div class="slect">
          <select name="public-choice" v-model="value" id="inputselect" @change="gai">
            <option :value="item.value" v-for="(item,index) in options" :key="index">{{item.label}}</option>
          </select>
        </div>
        <div class="slect">
          <div class="block">
            <el-date-picker
              v-model="value2"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="right"
              @change="timePicker"
            ></el-date-picker>
          </div>
        </div>
      </div>
      <div class="navRight">
        <el-button type="primary" @click="navclear">清空</el-button>
        <el-button type="primary" @click="navFind">搜索</el-button>
      </div>
    </div>
    <!-- 库房主体内容 -->
    <div class="main">
      <!-- 库房主体内容列表 -->
      <div class="mainList-wrap" v-for="(item,index) in data" :key="index">
        <div class="listTitTop">
          <div class="listTit-Left">
            <span>销售单号:{{item.xsnum}}</span>
            <span>销售员:{{item.xsman}}</span>
            <span>销售时间:{{item.xstime}}</span>
          </div>
          <div class="listTit-right">
            <el-button type="text" @click="del(item.xsid)" style="color:red">作废</el-button>
            <el-button type="text" @click="checkDing(item.xsid)">查看订单</el-button>
            <el-button type="text" @click="allchuku(index)">批量出库</el-button>
          </div>
        </div>
        <div class="tabMain">
          <el-table :data="item.xsDetail" border>
            <el-table-column prop="name" label="商品名" :span="2"></el-table-column>
            <el-table-column prop="logo" label="品牌" :span="2"></el-table-column>
            <el-table-column prop="lie" label="系列" :span="2"></el-table-column>
            <el-table-column prop="kuan" label="款式" :span="2"></el-table-column>
            <el-table-column prop="color" label="成色" :span="2"></el-table-column>
            <el-table-column prop="num" label="编号" :span="2"></el-table-column>
            <el-table-column prop="cangwei" label="仓位" :span="2"></el-table-column>
            <el-table-column prop="price" label="指导定价" :span="2"></el-table-column>
            <el-table-column prop="finPri" label="销售价格" :span="2"></el-table-column>
            <el-table-column label="调拨日期" :span="2">
              <template slot-scope="scope">{{scope.row.time|timeFilter}}</template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="150" :span="2">
              <template slot-scope="scope">
                <el-button type="text" @click="look(scope.row.id)">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <!-- 库房主体内容下方分页功能 -->
      <fenye class="pages" @jumpPage="changeye"></fenye>
    </div>
  </div>
</template>
<script>
import fenye from "../../components/fenye";
export default {
  props: [],
  components: {
    fenye
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
          xsnum: "XS202005111509",
          xsman: "王小明",
          xstime: "2020/05/11",
          xsid: "0",
          xsDetail: [
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
              img: "",
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
          ]
        },
        {
          xsnum: "XS2020051115012",
          xsman: "王小明",
          xstime: "2020/05/12",
          xsid: "1",
          xsDetail: [
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
              img: "",
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
          ]
        }
      ],
      /*选择日期*/

      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: "",
      value3: ""
    };
  },
  methods: {
    gai() {
      var arr = this.data.filter((item, index) => {
        if (item.cw == this.value) {
          return item;
        }
      });
    },
    /*头部搜索按钮*/
    headSearch() {
      console.log("搜索");
    },
    /*时间选择器*/
    timePicker() {
      console.log(this.value2);
    },
    /*清空*/

    navclear() {
      this.search = "";
      this.value2 = "";
      this.value1 = "";
      this.value = "0";
    },
    /*导航查找*/
    navFind() {
      console.log(this.value2, "查找");
    },
    // handleCurrentChange(val) {
    //   console.log(val);
    // },
    //作废
    del(id) {
      this.$message({
        message: "已作废",
        type: "error"
      });
    },
    /*查看订单*/
    checkDing(id) {
      this.$router.push("/xiaoshouCheck?id="+id);
    },
    /*批量出库*/
    allchuku(index) {
      console.log(this.data[index]);
    },
    /*查看信息*/
    look(id) {
      this.$router.push("/detail?id=" + id);
    },

    /*翻页功能*/
    changeye(val) {
      console.log(val);
    }
  },
  mounted() {},
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
<style  scoped>
/* 头部样式 */
.head {
  width: 100%;
  height: 60px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
}
.head .headLeft {
  display: flex;
  width: 460px;
}
.headLeft .el-input--suffix /deep/ .el-input__inner {
  width: 275px;
  border-radius: 18px;
  border: 1px solid #019997;
}
.headLeft .rongqi .el-button--primary {
  background-color: #019997;
  border-color: #019997;
  border-radius: 12px;
  margin-left: 20px;
}

/* 头部下方下拉菜单等样式 */
.nav {
  height: 50px;
  border-radius: 10px;
  background-color: white;
  padding-top: 20px;
  padding-left: 5px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.slect {
  margin-right: 10px;
}
.slect #inputselect {
  width: 120px;
  height: 38px;
  border: 1px solid #019997;
}
.navLeft {
  display: flex;
  justify-content: space-between;
}
.navLeft /deep/ .el-input__inner {
  border: 1px solid #019997;
  width: 320px;
}
.navRight {
  padding-right: 10px;
}
.navRight .el-button--primary {
  background-color: #019997;
  border-color: #019997;
  border-radius: 20px;
}
/* 下拉菜单下方主题样式 */
.main {
  background-color: white;
  padding-left: 16px;
  padding-right: 20px;
  padding-bottom: 20px;
  height: 100%;
  padding-top: 30px;
}
.main .mainList-wrap {
  padding-top: 20px;
  margin-bottom: 30px;
}
.main .mainList-wrap .listTit-Left span {
  margin-right: 25px;
}
.main .list {
  padding-top: 25px;
  border: 1px solid rgb(205, 205, 205);
  padding-bottom: 25px;
}
.listTitTop {
  display: flex;
  justify-content: space-between;
}

/* 表格样式 */
.tabMain /deep/ .el-table thead {
  color: #019997;
}
.tabMain /deep/ .el-table th.is-leaf {
  text-align: center;
}
.tabMain /deep/ .el-table td {
  text-align: center;
}
.pages {
  text-align: center;
  margin-top: 100px;
}
</style>