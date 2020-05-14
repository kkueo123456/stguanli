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
        <div class="rongqi">
          <el-button type="primary">扫码</el-button>
        </div>
      </div>
      <div class="headRight">
        <div class="rongqi">
          <el-button type="primary" @click="inKu">入库</el-button>
        </div>
        <div></div>
        <div class="rongqi">
          <el-button type="primary" @click="diao">调拨</el-button>
        </div>
        <div class="rongqi">
          <el-button type="primary" @click="pandian">盘点</el-button>
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
    <!-- 库房主体内容 -->
    <div class="main">
      <div class="tabMain">
        <el-table :data="data" border>
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
          <el-table-column fixed="right" label="操作" width="200" :span="2">
            <template slot-scope="scope">
              <el-button type="text" @click="detail(scope.row.id)">查看</el-button>
              <el-button type="text" @click="update(scope.row.id)">编辑</el-button>
              <el-button type="text" @click="chuku(scope.row.id)">出库</el-button>
              <el-dialog
                title="选择出库原因"
                :visible.sync="centerDialogVisible"
                :modal-append-to-body="false"
                width="30%"
              >
                <el-radio-group v-model="chukuRadio">
                  <el-radio :label="3">想卖</el-radio>
                  <el-radio :label="6">假的，出库</el-radio>
                  <el-radio :label="9">随便选</el-radio>
                </el-radio-group>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="centerDialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="sure">确 定</el-button>
                </span>
              </el-dialog>
            </template>
          </el-table-column>
        </el-table>
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
          label: "吉尔吉斯斯坦总仓"
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
      ],
      /*选择日期*/

      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      /*出库的dialog及id*/
      centerDialogVisible: false,
      chukuid: "",
      /*选择出库原因*/

      chukuRadio: ""
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
      console.log(this.search);
    },
    /*头部右侧入库*/

    inKu() {
      this.$router.push("/dingdan");
    },
    /*头部右侧调拨*/
    diao() {
      console.log("调拨");
    },
    /*头部右侧盘点*/
    pandian() {
      this.$router.push('/pandian')
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
    /*查看信息*/

    detail(id) {
      this.$router.push("/detail?id=" + id);
    },
    // handleCurrentChange(val) {
    //   console.log(val);
    // },
    /*翻页功能*/

    changeye(val) {
      console.log(val);
    },
    update(id) {
      console.log("编辑");
    },
    /*出库*/
    chuku(id) {
      this.centerDialogVisible = true;
      this.chukuid = id;
      console.log("出库", id);
    },
    sure() {
      this.centerDialogVisible = false;
      console.log(this.chukuid, this.chukuRadio);
    }
  },
  mounted() {},
  watch: {},
  beforeRouteEnter(to, from, next) {
    let isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin == 0) {
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
  justify-content: space-between;
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
}
.headRight {
  width: 300px;
  display: flex;
  justify-content: space-around;
}
.headRight .rongqi .el-button--primary {
  width: 90px;
  background-color: #019997;
  border-color: #019997;
  border-radius: 25px;
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
  width: 100px;
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
  padding-top: 50px;
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