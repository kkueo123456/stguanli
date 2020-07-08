<template>
  <!-- 盘点页面 -->
  <div>
    <el-header>盘点</el-header>
    <el-main>
      <div class="layout">
        <div class="el-main-Tit">
          <div class="el-main-Tit-Left">
            <h3>唐山仓</h3>
            <h3>A-01</h3>
            <h3>A-02</h3>
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
              <el-button>导出表格</el-button>
            </div>
          </div>
        </div>
        <!-- 主题头部下方 -->
        <div class="main-bottom">
          <div class="main-bottom-head">
            <div class="gong">
              共50件商品
              <el-radio-group v-model="radio">
                <el-radio :label="3" @change="all">全部</el-radio>
                <el-radio :label="6" @change="ready">已盘点</el-radio>
                <el-radio :label="9" @change="no">未盘点</el-radio>
              </el-radio-group>
            </div>
            <div class="ready">已盘点{{pandianNum}}件</div>
          </div>
        </div>
        <audio ref="audio" :src="audioUrl">您的浏览器不支持 audio 标签。</audio>

        <div class="main-bottom-body">
          <div class="tabMain">
            <el-table :data="panList" border>
              <el-table-column prop="num" label="商品编号" :span="2"></el-table-column>
              <el-table-column prop="name" label="商品名称" :span="2"></el-table-column>
              <el-table-column prop="color" label="商品成色" :span="2"></el-table-column>
              <el-table-column prop="zhuangtai" label="状态" :span="2"></el-table-column>
              <el-table-column prop="saomiao" label="扫描次数" :span="2"></el-table-column>
              <el-table-column label="入库时间" :span="2">
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
import look from "../components/look";

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
      pandianNum: "0",
      //音频
      audioUrl:
        "http://ysb.yisell.com/yisell/ybys2018050819052088/sound/yisell_sound_201404102304403674_88366.mp3"
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
      this.$refs.audio.play();
      this.pandianInput = "";
      this.pandianNum++;
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
@import '../stylus/index.styl';

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