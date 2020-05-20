<template >
  <!-- 采购入库 -->
  <div>
    <!-- 采购入库头部填写订单 -->
    <div class="head">
      <div class="headLeft">
        <!-- <div class="rongqi">
          <el-button type="primary" @click="Warehouse">批量入库</el-button>
        </div> -->
        <v-pi :isShow='isShow' @xuanCang='Warehouse'></v-pi>
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
        <el-table :data="data" >
          <el-table-column prop="name" label="商品名" :span="2"></el-table-column>
          <el-table-column prop="logo" label="品牌" :span="2"></el-table-column>
          <el-table-column prop="lie" label="系列" :span="2"></el-table-column>
          <el-table-column prop="kuan" label="款式" :span="2"></el-table-column>
          <el-table-column prop="color" label="成色" :span="2"></el-table-column>
          <el-table-column prop="num" label="编号" :span="2"></el-table-column>
          <el-table-column prop="cangwei" label="仓位" :span="2"></el-table-column>
          <el-table-column prop="finPri" label="销售定价" :span="2"></el-table-column>
          <el-table-column label="销售日期" :span="2">
            <template slot-scope="scope">{{scope.row.time|timeFilter}}</template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" :span="2">
            <template slot-scope="scope">
              <el-button type="text" @click="ruku(scope.row.id)">入库</el-button>
              <el-button type="text" @click="del(scope.row.id)" style="color:red">作废</el-button>
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
import vPi from '../../components/piRuku'
export default {
  props: [],
  components: {
    dingdan,
    fenye,
    vPi
  },
  data() {
    return {
      search: "",
      //批量入库弹框
      isShow:{
        show:false
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
          finPri: "120000",
          id: "0",
          zt: "未鉴定"
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
          zt: "已退回"
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
          id: "2",
          zt: "未鉴定"
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
          id: "3",
          zt: "入库在售"
        }
      ],
      
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: "",

      isAdmin: "",
      /*入库弹出的dialog及需要的id*/
      dialogId: "",
      dialogVisible: false
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
       // 作废  
    del(id) {
      this.$confirm("确定作废？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "warning",
            message: "删除成功!" + id
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
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
      console.log(val)
    }
  },

  mounted() {},
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
<style  scoped>
/* 头部样式 */
.head {
  width: 100%;
  height: 60px;
  padding-top: 10px;
}
.headLeft .rongqi .el-button--primary {
  background-color: #019997;
  border-color: #019997;
}

/* 头部下方下拉菜单等样式 */
.nav {
  height: 50px;
  border-radius: 10px;
  background-color: white;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
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
  padding-right: 20px;
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
  min-height: 50vh;

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
/* 右侧编辑 */
.bianji {
  font-size: 16px;
  color: red;
  text-align: right;
  cursor: pointer;
  margin-bottom: 20px;
}
</style>