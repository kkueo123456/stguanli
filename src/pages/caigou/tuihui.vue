<template>
  <!-- 退回页 -->
  <div>
    <!-- 退回头部填写订单 -->
    <div class="head">
      <div class="headLeft">
        <div class="rongqi">
          <dingdan></dingdan>
        </div>
      </div>
    </div>
    <!-- 退回头部下方下拉菜单及查找 -->
    <div class="nav">
      <div class="navLeft">
        <div class="slect">
          <select name="public-choice" v-model="value" id="inputselect" @change="gai">
            <option :value="item.value" v-for="(item,index) in options" :key="index">{{item.label}}</option>
          </select>
        </div>
        <div class="slect">
          <select name="public-choice" v-model="value3" id="inputselect" @change="gai">
            <option :value="item.value" v-for="(item,index) in options" :key="index">{{item.label}}</option>
          </select>
        </div>
        <div class="slect">
          <select name="public-choice" v-model="value4" id="inputselect" @change="gai">
            <option :value="item.value" v-for="(item,index) in options" :key="index">{{item.label}}</option>
          </select>
        </div>
        <!-- 退回头部下方日期下拉列表 -->
        <div class="slect">
          <div class="block">
            <el-date-picker
              v-model="value2"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="right"
            ></el-date-picker>
          </div>
        </div>
      </div>
      <div class="navRight">
        <el-button type="primary" @click="navclear">清空</el-button>
        <el-button type="primary" @click="checkall">搜索</el-button>
      </div>
    </div>
    <!-- 退回主体内容 -->
    <div class="main">
      <div class="tabMain">
        <el-table :data="data">
          <el-table-column prop="name" label="商品名" :span="2"></el-table-column>
          <el-table-column prop="logo" label="品牌" :span="2"></el-table-column>
          <el-table-column prop="lie" label="系列" :span="2"></el-table-column>
          <el-table-column prop="kuan" label="款式" :span="2"></el-table-column>
          <el-table-column prop="color" label="成色" :span="2"></el-table-column>
          <el-table-column prop="num" label="编号" :span="2"></el-table-column>
          <el-table-column prop="cangwei" label="仓位" :span="2"></el-table-column>
          <el-table-column prop="finPri" label="销售价格" :span="2"></el-table-column>
          <el-table-column label="调拨日期" :span="2">
            <template slot-scope="scope">{{scope.row.time|timeFilter}}</template>
          </el-table-column>
          <el-table-column prop="zt" fixed="right" label="状态" :span="2"></el-table-column>
        </el-table>
      </div>
      <!-- 退回主体内容下方分页功能 -->
      <fenye class="pages" @jumpPage="changeye" :pageNum="pageNum"></fenye>
    </div>
  </div>
</template>
<script>
import dingdan from "../../components/dingdan";
import fenye from "../../components/fenye";
export default {
  props: [],
  components: {
    dingdan,
    fenye
  },
  data() {
    return {
      search: "",
      options: [
        {
          value: "0",
          label: "全部渠道"
        },
        {
          value: "1",
          label: "双皮奶"
        },
        {
          value: "2",
          label: "蚵仔煎"
        },
        {
          value: "3",
          label: "龙须面龙须面"
        },
        {
          value: "4",
          label: "北京烤鸭"
        }
      ],
      //第一个下拉列表的value
      value: "0",
      //第二个下拉列表的value
      value3: "0",
      //第二个下拉列表的value
      value4: "0",
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
          cangwei: "唐山总仓/C-1-20",
          color: "95-97新",
          num: "12345678909123",
          finPri: "130000",
          id: "0",
          zt: "已退回",
          mai: "寄"
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
          finPri: "150000",
          id: "1",
          zt: "已退回",
          mai: "寄"
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
          finPri: "420000",
          id: "2",
          zt: "已退回",
          mai: "寄"
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
          finPri: "6220000",
          id: "2",
          zt: "已退回",
          mai: "寄"
        }
      ],

      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: "",
      pageNum: 0
    };
  },
  methods: {
    /*添加采购订单*/

    dingdan() {
      this.$router.push("/dingdan");
    },
    gai() {},
    detail(id) {},
    handleCurrentChange(val) {},
    /*上方时间下拉菜单的查看全部*/

    checkall() {
      console.log(this.value2);
      // var data1 = new Date(this.value2[0]).getTime();
      // var data2 = new Date(this.value2[1]).getTime();
    },
    /*清空*/

    navclear() {
      this.search = "";
      this.value2 = "";
      this.value1 = "";
      this.value = "0";
    },
    changeye(val) {
      console.log(val);
    }
  },
  mounted() {
    this.pageNum=12
  },
  beforeRouteEnter(to, from, next) {
    let isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin == 1 || isAdmin == 3) {
      next();
    }
  },
  watch: {},
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
}

.headLeft .rongqi .el-button--primary {
  background-color: $bg1;
  border-color: $bg1;
}

/* 头部下方下拉菜单等样式 */
.nav {
  height: 50px;
  border-radius: 10px;
  background-color: white;
  padding-top: 20px;
  padding-left: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

.slect {
  width: 148px;
  margin-right: 10px;
}

.slect #inputselect {
  width: 145px;
  height: 38px;
  border: 1px solid $bg1;
}

.navLeft {
  display: flex;
  justify-content: space-between;
}

.navLeft /deep/ .el-input__inner {
  border: 1px solid $bg1;
  width: 320px;
}

.navRight {
  padding-right: 20px;
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
  padding-bottom: 20px;
  height: 100%;
  padding-top: 50px;
  min-height: 50vh;
}

/* 表格样式 */
.tabMain /deep/ .el-table thead {
  color: $bg1;
}

.tabMain /deep/ .el-table th.is-leaf {
  text-align: center;
}

.tabMain /deep/ .el-table td {
  text-align: center;
}

.pages {
  text-align: center;
}
</style>