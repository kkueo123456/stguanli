<template>
  <!-- 调拨查询页 -->
  <div>
    <!-- 头部搜索及功能 -->
    <div class="head">
      <div class="headLeft">
        <search @search="headSearch"></search>
      </div>
    </div>
    <!-- 头部下方下栏菜单及品牌筛选 -->
    <div class="nav">
      <div class="navLeft">
        <div class="slect">
          <select name="public-choice" v-model="value" id="inputselect" @change="gai">
            <option :value="item.value" v-for="(item,index) in options" :key="index">{{item.label}}</option>
          </select>
        </div>
        <div class="slect">
          <select name="public-choice" v-model="value" id="inputselect" @change="gai">
            <option :value="item.value" v-for="(item,index) in options" :key="index">{{item.label}}</option>
          </select>
        </div>
        <div class="slect">
          <select name="public-choice" v-model="value" id="inputselect" @change="gai">
            <option :value="item.value" v-for="(item,index) in options" :key="index">{{item.label}}</option>
          </select>
        </div>
        <div class="slect">
          <select name="public-choice" v-model="value2" id="inputselect" @change="gai">
            <option
              :value="item.value"
              v-for="(item,index) in ztoptions"
              :key="index"
            >{{item.label}}</option>
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
        <el-button type="primary" @click="navFind">查找</el-button>
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="main">
      <div class="tabMain">
        <el-table :data="data">
          <el-table-column prop="number" label="调拨单号" :span="2"></el-table-column>
          <el-table-column prop="fistCang" label="原始仓" :span="2"></el-table-column>
          <el-table-column prop="finCang" label="接收仓" :span="2"></el-table-column>
          <el-table-column prop="diaoboPerson" label="调拨员" :span="2"></el-table-column>
          <el-table-column prop="rukuPerson" label="入库员" :span="2"></el-table-column>
          <el-table-column prop="dbzt" label="调拨单状态" :span="2"></el-table-column>
          <el-table-column prop="zhuangtai" label="接收情况" :span="2"></el-table-column>
          <el-table-column label="调拨日期" :span="2">
            <template slot-scope="scope">{{scope.row.time|timeFilter}}</template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="150" :span="2">
            <template slot-scope="scope">
              <dblook :look="scope.row.id" :onlyLook="true"></dblook>
              <el-button type="text" @click="update(scope.row.id)" v-if="scope.row.dbzt=='暂存'">编辑</el-button>
              <!-- <el-button type="text" @click="del(scope.row.id)" style="color:red">作废</el-button> -->
              <nullify :nullId="scope.row.id"></nullify>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 主体内容下方分页功能 -->
      <fenye class="pages" @jumpPage="changeye"></fenye>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import fenye from "../../components/fenye";
import nullify from "../../components/nullify";
import search from "../../components/search";
import dblook from "../../components/diaoboLook";
export default {
  props: [],
  components: {
    fenye,
    nullify,
    dblook,
    search
  },
  data() {
    return {
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
        }
      ],
      ztoptions: [
        { value: "0", label: "已生成" },
        { value: "1", label: "已作废" },
        { value: "2", label: "暂存" }
      ],
      value: "0",
      /*调拨查询主要数据*/

      /*选择日期*/

      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: "0",
      value3: "",
      value4: ""
    };
  },
  methods: {
    gai() {},
    /*头部搜索按钮*/
    headSearch(val) {
      console.log(val);
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
    /*翻页功能*/

    changeye(val) {
      console.log(val);
    },
    //编辑
    update(id) {
      this.$router.push("/diaoboEdit?id=" + id);
    }
    // 作废
  },
  mounted() {
    this.$store.dispatch("getmainData");

  },
  watch: {},
  beforeRouteEnter(to, from, next) {
    let isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin == 1) {
      next();
    }
  },
  computed: {
    ...mapGetters(["data", "session"])
  }
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

.head .headLeft {
  display: flex;
}

.head .headLeft .rongqi {
  margin-right: 20px;
}

.headLeft .el-input--suffix /deep/ .el-input__inner {
  width: 275px;
  border-radius: 18px;
  border: 1px solid $bg1;
}

.headLeft .rongqi .el-button--primary {
  background-color: $bg1;
  border-color: $bg1;
  border-radius: 12px;
}

/* 头部下方下拉菜单等样式 */
.nav {
  border-radius: 10px;
  background-color: white;
  padding: 12px 0 12px 12px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

.slect {
  margin-right: 10px;
}

.slect #inputselect {
  width: 100px;
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
  padding-right: 10px;
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
  padding-bottom: 40px;
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