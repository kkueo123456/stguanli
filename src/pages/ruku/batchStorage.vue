<template>
  <!-- 采购入库 -->
  <div>
    <el-header>批量入库</el-header>
    <el-main>
      <div class="layout">
        <div class="el-main-Tit">
          <div class="el-main-Tit-Left">
            <h3>唐山仓</h3>
          </div>
          <div class="el-main-Tit-Right">
            <div class="input">
              <el-input
                placeholder="输入框选中状态才可扫描"
                v-model="pandianInput"
                clearable
                class="dialog-input"
                ref="input"
                @keydown.enter.native="submit"
              ></el-input>
            </div>
            <div class="daochu">
              <el-button @click="batch">批量入库</el-button>
            </div>
          </div>
        </div>
        <!-- 主题头部下方 -->
        <div class="main-bottom"></div>
        <div class="main-bottom-body">
          <div class="tabMain">
            <el-table :data="panList" border>
              <el-table-column prop="num" label="商品编号" :span="2"></el-table-column>
              <el-table-column prop="name" label="商品名称" :span="2"></el-table-column>
              <el-table-column prop="color" label="商品成色" :span="2"></el-table-column>
              <el-table-column label="扫描时间" :span="2">
                <template slot-scope="scope">{{scope.row.time|timeFilter}}</template>
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="200" :span="2">
                <template slot-scope="scope">
                  <look :look="scope.row.id"></look>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </el-main>
  </div>
</template>
<script>
import look from "../../components/look";

export default {
  props: [],
  components: {
    look
  },
  data() {
    return {
      /*选择盘点的状态*/
      radio: 6,
      /*盘点的输入框*/

      pandianInput: "",
      panList: [],
      /*已盘点的件数*/
      pandianNum: "0"
    };
  },
  methods: {
    //   选择全部商品
    all() {
      console.log("全部");
    },
    // 已盘点的商品
    ready() {
      console.log("已盘点");
    },
    // 未盘点的商品
    no() {
      console.log("未盘点");
    },
    submit() {
      this.pandianNum++;
    },
    batch() {
      this.$confirm("确定入库？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "入库成功!" 
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消入库"
          });
        });
    }
  },
  mounted() {
    this.$refs.input.focus();
    this.panList = [
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
        cw: "2",
        zhuangtai: "未盘点",
        saomiao: "0"
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
        cw: "0",
        zhuangtai: "未盘点",
        saomiao: "0"
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
        cw: "1",
        zhuangtai: "未盘点",
        saomiao: "0"
      }
    ];
  },
  watch: {},
  computed: {}
};
</script>
<style lang="stylus" scoped>
@import '../../stylus/index.styl';

/* 头部样式 */
.el-header {
  text-align: center;
  height: 105px !important;
  background-color: black;
  color: white;
  font-size: 30px;
  line-height: 105px;
  letter-spacing: 5px;
  margin-bottom: 20px;
}

/* 主体有效去 */
.el-main .layout {
  width: 1300px;
  margin: 0 auto;
}

.el-main-Tit {
  height: 60px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: rgb(229, 254, 253);
  display: flex;
  justify-content: space-between;
}

.el-main-Tit-Left {
  display: flex;
}

.el-main-Tit-Left h3 {
  font-size: 30px;
  margin-right: 25px;
  line-height 60px
}

.el-main-Tit-Right {
  display: flex;
}

.el-main-Tit-Right .input /deep/ .el-input__inner {
  padding-right: 0;
  /* border: 1px solid $bg1; */
}

.el-main-Tit-Right .daochu /deep/ .el-button {
  border: 1px solid $bg1;
  background: $bg1;
  color: white;
  border-radius: 0;
  margin-left: 20px;
}

.main-bottom-head {
  display: flex;
  justify-content: space-between;
}

.main-bottom-head .gong {
  color: red;
}

.gong .el-radio-group {
  margin-left: 20px;
}

.main-bottom-head .ready {
  color: $bg1;
}

.main-bottom-body {
  margin-top: 20px;
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