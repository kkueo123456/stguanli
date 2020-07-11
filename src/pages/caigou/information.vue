<template >
  <!-- 补全信息 -->
  <div>
    <!-- 订单头部填写订单 -->
    <div class="head">
      <div class="headLeft">
        <search @search="headSearch"></search>
      </div>
    </div>
    <!-- 补全信息头部下方下拉菜单及查找 -->
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
        <div class="slect">
          <select name="public-choice" v-model="value3" id="inputselect" @change="gai">
            <option :value="item.value" v-for="(item,index) in options" :key="index">{{item.label}}</option>
          </select>
        </div>

        <!-- 补全信息头部下方日期下拉列表 -->
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
    <!-- 补全信息主体内容 -->
    <div class="main">
      <!-- 补全信息主体内容列表 -->
      <div class="tabMain">
        <el-table :data="data">
          <el-table-column prop="name" label="商品名" :span="2"></el-table-column>
          <el-table-column prop="logo" label="品牌" :span="2"></el-table-column>
          <el-table-column prop="man" label="采购员" :span="2"></el-table-column>
          <el-table-column prop="cangwei" label="订单状态" :span="2"></el-table-column>
          <el-table-column prop="finPri" label="采购价格" :span="2"></el-table-column>
          <el-table-column label="采购日期" :span="2">
            <template slot-scope="scope">{{scope.row.time|timeFilter}}</template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="150" :span="2">
            <template slot-scope="scope">
              <look :look="scope.row.id"></look>
              <update :up="scope.row.id"></update>
              <!-- <el-button type="text" @click="del(scope.row.id)" style="color:red">作废</el-button> -->
              <el-button type="text" @click="back(scope.row.id)" style="color:red">退回</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 补全信息内容下方分页功能 -->
      <fenye class="pages" @jumpPage="changeye"></fenye>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import fenye from "../../components/fenye";
import dingdan from "../../components/dingdan";
import nullify from "../../components/nullify";
import look from "../../components/look";
import update from "../../components/update";
import search from "../../components/search";
export default {
  props: [],
  components: {
    dingdan,
    fenye,
    nullify,
    look,
    update,
    search
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
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: "",
      isAdmin: ""
    };
  },
  methods: {
    //头部搜索
    headSearch(val) {
      console.log(val);
    },
    gai() {
      console.log(this.value);
    },

    changeye(val) {
      console.log(val);
    },
    checkall() {
      console.log(this.value2);
    },
    /*清空*/
    navclear() {
      this.search = "";
      this.value2 = "";
      this.value1 = "";
      this.value = "0";
    },
    // 退回
    back(id) {
      this.$confirm("即将退回, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "退回成功!" + id
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退回" + id
          });
        });
    }
  },
  mounted() {
    this.$store.dispatch("getmainData");

  },
  beforeRouteEnter(to, from, next) {
    let isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin == 1 || isAdmin == 2) {
      next();
    }
  },
  watch: {},
  computed: {
    ...mapGetters(["data", "session"])
  }
};
</script>
<style lang="stylus" scoped>
@import '../../stylus/index.styl';

/* 头部样式 */
.head {
  // width: 100%;
  height: 60px;
}

.headLeft {
  width: 380px;
  line-height: 60px;
}

.headLeft .rongqi .el-button--primary {
  background-color: $bg1;
  border-color: $bg1;
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
  padding-right: 16px;
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