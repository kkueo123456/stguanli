<template >
  <!-- 调拨入库 -->
  <div>
    <!-- 订单头部填写订单 -->
    <!-- <div class="head">
      <div class="headLeft">
        <div class="rongqi">
          <el-button type="primary" @click="Warehouse">批量入库</el-button>
        </div>
      </div>
    </div>-->
    <!-- 头部下方下拉菜单及查找 -->
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
        <!-- 头部下方日期下拉列表 -->
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
    <div class="main">
      <div class="tabMain">
        <el-table :data="tabData">
          <el-table-column prop="number" label="调拨单号" :span="2"></el-table-column>
          <el-table-column prop="fistCang" label="原始仓" :span="2"></el-table-column>
          <el-table-column prop="finCang" label="接收仓" :span="2"></el-table-column>
          <el-table-column prop="diaoboPerson" label="调拨员" :span="2"></el-table-column>
          <el-table-column prop="rukuPerson" label="入库员" :span="2"></el-table-column>
          <el-table-column prop="zhuangtai" label="接收情况" :span="2"></el-table-column>
          <el-table-column label="调拨日期" :span="2">
            <template slot-scope="scope">{{scope.row.time|timeFilter}}</template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" :span="2">
            <template slot-scope="scope">
              <dblook :look="scope.row.id" :onlyLook="false"></dblook>

              <!-- <el-button type="text" @click="del(scope.row.id)" style="color:red" >作废</el-button> -->
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
import fenye from "../../components/fenye";
import dingdan from "../../components/dingdan";
import nullify from "../../components/nullify";
import dblook from "../../components/diaoboLook";

export default {
  props: [],
  components: {
    dingdan,
    fenye,
    nullify,
    dblook
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
      value: "0",

      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: "",
      isAdmin: "",
      /*表单中的信息*/
      tabData: []
    };
  },
  methods: {
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
    Warehouse() {
      console.log("入库");
    },
    look(id) {
      this.$router.push("/rkdetail?id=" + id);
    }
  },
  mounted() {
    this.tabData = [
      {
        id: "0",
        number: "18912367198311",
        fistCang: "唐山",
        finCang: "北京",
        diaoboPerson: "蒲子杰",
        rukuPerson: "蒲子杰",
        zhuangtai: "正常",
        time: "1589163916"
      },
      {
        id: "1",
        number: "18912367198311",
        fistCang: "唐山",
        finCang: "北京",
        diaoboPerson: "蒲子杰",
        rukuPerson: "蒲子杰",
        zhuangtai: "不正常",
        time: "1589163916"
      },
      {
        id: "2",
        number: "18912367198311111111111111111111111111111",
        fistCang: "唐山",
        finCang: "北京",
        diaoboPerson: "蒲子杰",
        rukuPerson: "蒲子杰",
        zhuangtai: "货运受损严重",
        time: "158916391611"
      },
      {
        id: "46",
        number: "18912367198311",
        fistCang: "唐山",
        finCang: "北京",
        diaoboPerson: "蒲子杰",
        rukuPerson: "蒲子杰",
        zhuangtai: "滋滋滋滋滋",
        time: "1589163916"
      }
    ];
  },
  beforeRouteEnter(to, from, next) {
    let isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin == 1) {
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
  padding-right: 20px;
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