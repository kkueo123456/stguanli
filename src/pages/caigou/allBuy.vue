<template >
  <!-- 采购人员看的全部订单及详情 -->
  <div>
    <!-- 订单头部填写订单 -->
    <div class="head">
      <div class="headLeft">
        <div class="rongqi">
          <dingdan></dingdan>
        </div>
      </div>
    </div>
    <!-- 采购头部下方下拉菜单及查找 -->
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
          <select name="public-choice" v-model="value4" id="inputselect" @change="gai">
            <option :value="item.value" v-for="(item,index) in options" :key="index">{{item.label}}</option>
          </select>
        </div>
        <div class="slect">
          <select name="public-choice" v-model="value4" id="inputselect" @change="gai">
            <option :value="item.value" v-for="(item,index) in options" :key="index">{{item.label}}</option>
          </select>
        </div>
        <!-- 采购头部下方日期下拉列表 -->
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
        <el-button type="primary" @click="checkall">查找</el-button>
      </div>
    </div>
    <!-- 采购主体内容 -->
    <div class="main">
      <div class="tabMain">
        <el-table :data="data">
          <el-table-column prop="num" label="编号" :span="2"></el-table-column>
          <el-table-column prop="name" label="商品名" :span="2"></el-table-column>
          <el-table-column prop="logo" label="品牌" :span="2"></el-table-column>
          <el-table-column prop="man" label="采购员" :span="2"></el-table-column>
          <el-table-column prop="cangwei" label="仓位" :span="2"></el-table-column>
          <el-table-column prop="finPri" label="采购价格" :span="2"></el-table-column>
          <el-table-column prop="price" label="销售定价" :span="2"></el-table-column>
          <el-table-column prop="dbzt" label="订单状态" :span="2"></el-table-column>
          <el-table-column label="货品状态" :span="2">
            <template slot-scope="scope">{{scope.row.zt}}</template>
          </el-table-column>
          <el-table-column label="采购日期" :span="2">
            <template slot-scope="scope">{{scope.row.time|timeFilter}}</template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100" :span="2">
            <template slot-scope="scope">
              <look :look="scope.row.id" v-if="scope.row.dbzt=='已生成'"></look>
              <!-- <el-button type="text" @click="look(scope.row.id)" v-if="scope.row.dbzt=='已生成'">查看</el-button> -->
              <el-button type="text" @click="update(scope.row.id)" v-if="scope.row.dbzt=='暂存'">编辑</el-button>
              <nullify
                :nullId="scope.row.id"
                v-if="(scope.row.zf ==false||null)||(scope.row.zt !=='入库在售')"
                :nullzt="scope.row.zf"
              ></nullify>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 采购主体内容下方分页功能 -->
      <fenye class="pages" @jumpPage="changeye" :pageNum="pageNum"></fenye>
    </div>
  </div>
</template>
<script>
import fenye from "../../components/fenye";
import nullify from "../../components/nullify";
import dingdan from "../../components/dingdan";
import look from "../../components/look";
export default {
  props: [],
  components: {
    dingdan,
    fenye,
    nullify,
    look
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
          label: "自主采购"
        },
        {
          value: "2",
          label: "客户寄卖"
        },
        {
          value: "3",
          label: "货品置换"
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
          finPri: "",
          id: "0",
          zt: "入库在售",
          man: "蒲子杰",
          dbzt: "已生成",
          zf: true
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
          finPri: "",
          id: "1",
          zt: "未定价",
          man: "蒲子杰",
          dbzt: "暂存",
          zf: false
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
          id: "22",
          zt: "已采购",
          man: "蒲子杰",
          dbzt: "已生成",
          zf: true
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
          id: "31",
          zt: "入库在售",
          man: "蒲子杰",
          dbzt: "暂存",
          zf: null
        }
      ],

      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      //时间列表的value
      value2: "",
      isAdmin: "",
      dialogJudge: false,
      pageNum: 0
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
      this.value3 = "0";
      this.value4 = "0";
      this.value = "0";
    },

    // 编辑
    update(id) {
      this.$router.push("/allBianji?id=" + id);
    }
    // 作废
    // del(id) {
    //   this.$confirm("确定作废？", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     type: "warning"
    //   })
    //     .then(() => {
    //       this.$message({
    //         type: "warning",
    //         message: "删除成功!"+id
    //       });
    //     })
    //     .catch(() => {
    //       this.$message({
    //         type: "info",
    //         message: "已取消删除"
    //       });
    //     });
    // },
  },
  mounted() {
    this.pageNum = 6;
  },
  beforeRouteEnter(to, from, next) {
    let isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin == 1 || isAdmin == 2) {
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
  border-radius: 10px;
  background-color: white;
  padding 12px 0 12px 12px 
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

.slect {
  margin-right: 10px;
}

.slect #inputselect {
  width: 100px;
  border: 1px solid $bg1;
  height: 38px;
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
</style>