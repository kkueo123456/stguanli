<template>
  <!-- 在库货品页 -->
  <div>
    <!-- 库房头部搜索及功能 -->
    <div class="head">
      <div class="headLeft">
        <search @search="headSearch"></search>
      </div>
      <div class="headRight">
        <div class="rongqi">
          <el-button type="primary" @click="inKu">入库</el-button>
        </div>
        <div></div>
        <div class="rongqi">
          <el-button type="primary" @click="diao">调拨</el-button>
          <el-dialog
            title="请选择仓位"
            :visible.sync="diaoDialog"
            width="40%"
            :modal-append-to-body="false"
          >
            <div class="block">
              <span class="demonstration">始发仓</span>
              <el-cascader
                :options="beginOption"
                :props="{ multiple: true,
                label:'name', value:'BigId',
                leaf:'cId'
                }"
                v-model="beginValue"
                clearable
              ></el-cascader>
              <!-- <el-cascader
                :options="Cangoption"
                :props="{ multiple: true }"
                v-model="Cangvalue"
                clearable
              ></el-cascader>-->
            </div>
            <div class="block">
              <span class="demonstration">调入仓</span>
              <el-cascader
                :options="transferOption"
                :props="{ multiple: true ,
                label:'name', value:'BigId'
                 }"
                v-model="transferValue"
                clearable
              ></el-cascader>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="diaoDialog = false">取 消</el-button>
              <el-button type="primary" @click="DiaodialogSure">确 定</el-button>
            </span>
          </el-dialog>
        </div>
        <div class="rongqi">
          <el-button type="primary" @click="pandian">盘点</el-button>
          <el-dialog
            title="请选择仓位"
            :visible.sync="pandianDialog"
            width="30%"
            :modal-append-to-body="false"
          >
            <div class="block">
              <span class="demonstration">选择仓位</span>
              <el-cascader
                :options="Cangoption"
                :props="{ multiple: true }"
                v-model="Cangvalue"
                clearable
              ></el-cascader>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="pandianDialog = false">取 消</el-button>
              <el-button type="primary" @click="CangdialogSure">确 定</el-button>
            </span>
          </el-dialog>
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
        <el-table :data="data">
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
              <look :look="scope.row.id"></look>
              <update :up="scope.row.id"></update>
              <el-button type="text" @click="chuku(scope.row.id)">出库</el-button>
              <el-dialog
                title="确定出库？"
                :visible.sync="centerDialogVisible"
                :modal-append-to-body="false"
                width="30%"
              >
                <!-- <span>此操作将出库，是否继续</span> -->
                <el-radio-group v-model="chukuRadio">
                  <el-radio :label="3">寄卖售出</el-radio>
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
import look from "../../components/look";
import search from "../../components/search";
import update from "../../components/update";

export default {
  props: [],
  components: {
    fenye,
    look,
    search,
    update
  },
  data() {
    return {
      //调拨的dialog
      diaoDialog: false,
      beginValue: 0,
      transferValue: 0,
      beginOption: [
        {
          BigId: "0",
          name: "唐山丰润仓",
          children: [
            { BigId: "0-1", name: "丰润a仓" },
            { BigId: "0-2", name: "丰润b仓" },
            { BigId: "0-3", name: "丰润c仓" }
          ]
        },
        {
          BigId: "1",
          name: "唐山开平",
          children: [
            { BigId: "1-1", name: "开平a仓" },
            { BigId: "1-2", name: "开平b仓" },
            { BigId: "1-3", name: "开平c仓" }
          ]
        },
        {
          BigId: "2",
          name: "北京朝阳",
          children: [
            { BigId: "2-1", name: "朝阳a仓" },
            { BigId: "2-2", name: "朝阳b仓" },
            { BigId: "2-3", name: "朝阳c仓" }
          ]
        }
      ],
      transferOption: [
        {
          BigId: "0",
          name: "唐山丰润仓",
          children: [
            { BigId: "0-1", name: "丰润a仓" },
            { BigId: "0-2", name: "丰润b仓" },
            { BigId: "0-3", name: "丰润c仓" }
          ]
        },
        {
          BigId: "1",
          name: "唐山开平",
          children: [
            { BigId: "1-1", name: "开平a仓" },
            { BigId: "1-2", name: "开平b仓" },
            { BigId: "1-3", name: "开平c仓" }
          ]
        },
        {
          BigId: "2",
          name: "北京朝阳",
          children: [
            { BigId: "2-1", name: "朝阳a仓" },
            { BigId: "2-2", name: "朝阳b仓" },
            { BigId: "2-3", name: "朝阳c仓" }
          ]
        }
      ],
      //盘点的选择仓位dialog
      pandianDialog: false,
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
        }
      ],
      /*下拉选择仓位多选*/
      Cangoption: [
        {
          value: "0",
          label: "唐山丰润仓",
          children: [
            { value: "0-1", label: "丰润a仓" },
            { value: "0-2", label: "丰润b仓" },
            { value: "0-3", label: "丰润c仓" }
          ]
        },
        {
          value: "1",
          label: "唐山开平",
          children: [
            { value: "1-1", label: "开平a仓" },
            { value: "1-2", label: "开平b仓" },
            { value: "1-3", label: "开平c仓" }
          ]
        },
        {
          value: "2",
          label: "北京朝阳",
          children: [
            { value: "2-1", label: "朝阳a仓" },
            { value: "2-2", label: "朝阳b仓" },
            { value: "2-3", label: "朝阳c仓" }
          ]
        }
      ],
      Cangvalue: "0",
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
          id: "31",
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
    headSearch(val) {
      console.log(val);
    },
    /*头部右侧入库*/

    inKu() {
      this.$router.push("/dingdan");
    },
    /*头部右侧调拨*/
    diao() {
      this.diaoDialog = true;
    },
    //调拨确定
    DiaodialogSure() {
      console.log(this.beginValue.join(), this.transferValue.join());
      this.$router.push("/diaoboPage");
    },
    /*头部右侧盘点*/
    pandian() {
      this.pandianDialog = true;
    },
    //盘点仓位选择确定
    CangdialogSure() {
      console.log(this.Cangvalue);
      this.pandianDialog = false;
      this.$router.push("/pandian?value=" + this.Cangvalue);
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
    update(id) {
      this.$router.push("/allBianji?id=" + id);
    },
    /*出库*/
    chuku(id) {
      this.centerDialogVisible = true;
      this.chukuid = id;
      console.log("出库", id);
    },
    sure() {
      this.centerDialogVisible = false;
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
  justify-content: space-between;
  width: 460px;
}

.headLeft .el-input--suffix /deep/ .el-input__inner {
  width: 275px;
  border-radius: 18px;
  border: 1px solid $bg1;
}

// 调拨dialog样式
.rongqi /deep/ .el-dialog__body {
  display: flex;
  justify-content: space-between;
}

.headLeft .rongqi .el-button--primary {
  background-color: $bg1;
  border-color: $bg1;
  border-radius: 12px;
}

.headRight {
  width: 300px;
  display: flex;
  justify-content: space-around;
}

.headRight .rongqi .el-button--primary {
  width: 90px;
  background-color: $bg1;
  border-color: $bg1;
  border-radius: 25px;
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