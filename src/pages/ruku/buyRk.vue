<template >
  <!-- 采购入库 -->
  <div>
    <!-- 采购入库头部填写订单 -->
    <div class="head">
      <div class="headLeft">
        <!-- <div class="rongqi">
          <el-button type="primary" @click="Warehouse">批量入库</el-button>
        </div>-->
        <v-pi :isShow="isShow" @xuanCang="Warehouse" :diaork="true"></v-pi>
        <!-- <search @search="headSearch"></search> -->
      </div>
    </div>
    <!-- 采购入库头部下方下拉菜单及查找 -->
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
          <select name="public-choice" v-model="value" id="inputselect" @change="gai">
            <option :value="item.value" v-for="(item,index) in options" :key="index">{{item.label}}</option>
          </select>
        </div>
        <!-- 采购入库头部下方日期下拉列表 -->
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
    <!-- 采购入库主体内容 -->
    <div class="main">
      <div class="tabMain">
        <el-table :data="data">
          <el-table-column prop="name" label="商品名" :span="2"></el-table-column>
          <el-table-column prop="logo" label="品牌" :span="2"></el-table-column>
          <el-table-column prop="color" label="成色" :span="2"></el-table-column>
          <el-table-column prop="num" label="编号" :span="2"></el-table-column>
          <el-table-column prop="finPri" label="销售定价" :span="2"></el-table-column>
          <el-table-column label="销售日期" :span="2">
            <template slot-scope="scope">{{scope.row.time|timeFilter}}</template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" :span="2">
            <template slot-scope="scope">
              <look :look="scope.row.id">查看</look>

              <el-button type="text" @click="ruku(scope.row.id)">入库</el-button>
              <!-- <el-button type="text" @click="del(scope.row.id)" style="color:red">作废</el-button> -->
              <el-dialog
                title="请选择仓位"
                :visible.sync="dialogVisible"
                width="30%"
                :modal-append-to-body="false"
              >
                <el-select v-model="Cangvalue" placeholder="请选择">
                  <el-option
                    v-for="item in Cangoption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogSure">确 定</el-button>
                </span>
              </el-dialog>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 采购入库内容下方分页功能 -->
      <fenye class="pages" @jumpPage="changeye"></fenye>
    </div>
  </div>
</template>
<script>
import fenye from "../../components/fenye";
import dingdan from "../../components/dingdan";
import vPi from "../../components/piRuku";
import look from "../../components/look";
import search from "../../components/search";
import { mapGetters } from "vuex";

export default {
  props: [],
  components: {
    dingdan,
    fenye,
    vPi,
    look,
    search
  },
  data() {
    return {
      search: "",
      //批量入库弹框
      isShow: {
        show: false
      },
      options: [
        {
          value: "0",
          label: "全部渠道"
        },
        {
          value: "1",
          label: "双皮奶"
        }
      ],
      value: "0",
      /*下拉选择仓位*/

      Cangoption: [
        {
          value: "0",
          label: "唐山丰润仓"
        },
        {
          value: "1",
          label: "唐山开平仓"
        }
      ],
      Cangvalue: "0",
      /*数据*/

 

      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: "",

      isAdmin: "",
      /*入库弹出的dialog及需要的id*/
      dialogId: "",
      dialogVisible: false
    };
  },
  methods: {
    //头部搜索
    headSearch(val){
      console.log(val)
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

    /*入库按钮*/

    ruku(id) {
      this.dialogVisible = true;
      this.dialogId = id;
    },
    /*入库确定*/

    dialogSure() {
      this.dialogVisible = false;
      console.log(this.dialogId, "商品id");
      console.log(this.Cangvalue, "仓位");
    },
    /*批量入库*/

    Warehouse(val) {
      console.log(val);
    }
  },

  mounted() {
    this.$store.dispatch("getmainData");

  },
  beforeRouteEnter(to, from, next) {
    let isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin == 1) {
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
  width: 100%;
  height: 60px;
  padding-top: 10px;
}
.headLeft{
  display flex
}
.headLeft .sou{
  margin-left 15px
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
  width: 100px;
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
  padding-bottom: 20px;
  height: 100%;
  padding-top: 30px;
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

/* 右侧编辑 */
.bianji {
  font-size: 16px;
  color: red;
  text-align: right;
  cursor: pointer;
  margin-bottom: 20px;
}
</style>