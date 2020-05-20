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
          <el-input
            placeholder="输入框选中状态才可扫描"
            v-model="saomiao"
            clearable
            ref="input"
            @keydown.enter.native="submit"
          ></el-input>
        </div>
        <div class="rongqi">
          <el-button type="primary">扫码</el-button>
        </div>
      </div>
      <div class="headRight">
        <div class="rongqi">
          <el-button type="primary" @click="jumpSellDing">+销售定价+</el-button>
        </div>
      </div>
    </div>
    <!-- 库房头部下方下栏菜单及品牌筛选 -->

    <!-- 库房主体内容 -->
    <div class="main">
      <!-- 采购主体内容列表 -->
      <div class="list" v-for="(item,index) in data" :key="index">
        <!-- 主体内容列表左 -->
        <div class="mainLeft">
          <!-- 主体内容列表左边图片 -->
          <div class="leftTu"></div>
          <!-- 主体内容列表右侧信息 -->
          <div class="Rightzi">
            <!-- 主体内容列表右侧标题及下方标签 -->
            <div class="title">
              <h2 class="listTit">{{item.name}}</h2>
              <div class="listBq">
                <span class="listBqji">{{item.mai}}</span>
              </div>
            </div>
            <!-- 主体内容列表右侧信息头下方商品详细信息 -->
            <div class="another">
              <ul class="anotherList">
                <li class="anotherStyle">品牌:{{item.logo}}</li>
                <li class="anotherStyle">采购价格:{{item.price}}</li>
              </ul>
              <ul class="anotherList">
                <li class="anotherStyle">系列:{{item.lie}}</li>
                <li class="anotherStyle">采购时间:{{item.time|timeFilter}}</li>
              </ul>
              <ul class="anotherList">
                <li class="anotherStyle">款式:{{item.kuan}}</li>
                <li class="anotherStyle">成色:{{item.color}}</li>
              </ul>
              <ul class="anotherList">
                <li class="anotherStyle">采购员:{{item.num}}</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 主体内容列表右 -->
        <div class="mainRight">
          <el-button type="primary" @click="detail(item.id)">查看</el-button>
          <el-button type="danger" @click="willDel(item.id)">移除</el-button>
          <el-dialog title="移除" :visible.sync="Deldialog" width="30%">
            <span>确定移除？</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="Deldialog = false">取 消</el-button>
              <el-button type="primary" @click="confirmDel">确 定</el-button>
            </span>
          </el-dialog>

          <h4 class="dingPri">销售定价:{{item.finPri}}</h4>
        </div>
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
      //扫描
      saomiao: "",
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

      /*移除的dialog及id*/
      Deldialog: false,
      delid: ""
    };
  },
  methods: {
    //扫描添加商品
    submit() {},
    /*头部搜索按钮*/
    headSearch() {
      console.log(this.search);
    },
    //销售定价
    jumpSellDing(){
        this.$router.push('/sellDing')
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
    // 移除及dialog
    willDel(id) {
      this.Deldialog = true;
      this.delid = id;
    },
    // 确认移除
    confirmDel() {
      this.Deldialog = false;
      console.log(this.delid);
    }
  },
  mounted() {
      this.$refs.input.focus()
  },
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
<style  scoped>
/* 头部样式 */
.head {
  height: 60px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
}
.head .headLeft {
  display: flex;
  justify-content: space-between;
}
.head .headLeft .rongqi {
  margin-right: 20px;
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
  display: flex;
  justify-content: space-around;
}
.headRight .rongqi .el-button--primary {
  background-color: #019997;
  border-color: #019997;
}

/* 下拉菜单下方主题样式 */
.main {
  background-color: white;
  padding-left: 16px;
  padding-right: 20px;
  padding-bottom: 20px;
}
/* 下拉菜单下方主题样式列表 */
.main .list {
  padding-top: 40px;
  border-bottom: 1px solid #019997;
  padding-bottom: 30px;
}
/* 下拉菜单下方主题样式列表左侧图片 */

.main .list .leftTu {
  margin-left: 20px;
  width: 130px;
  height: 125px;
  background-color: tomato;
  margin-right: 20px;
}
.mainLeft {
  display: flex;
}
.list {
  display: flex;
  justify-content: space-between;
  position: relative;
}

/* 下拉菜单下方主题样式列表标题 */
.listTit {
  font-size: 18px;
  color: #019997;
  margin-right: 20px;
  margin-bottom: 10px;
}
.title .listBq .listBqji {
  display: inline-block;
  width: 25px;
  height: 25px;
  line-height: 25px;
  margin-bottom: 25px;
  text-align: center;
  color: white;
  background-color: #169bd5;
}
/* 下拉菜单下方主题样式列表下方信息*/
.another {
  display: flex;
}
.another .anotherStyle {
  color: #606060;
  font-size: 13px;
  margin-right: 20px;
  margin-bottom: 10px;
  white-space: nowrap;
}
/* 下拉菜单下方主题样式列表右侧 */
.mainRight {
  position: absolute;
  right: 0;
  bottom: 40px;
  text-align: right;
}
/* 右侧上方入库与退回 */
.dialogJudge {
  margin-bottom: 20px;
}
.mainRight /deep/ .el-dialog {
  text-align: left;
}
/* 右侧状态样式 */
.mainRight .zhuangtai {
  font-size: 18px;
  color: black;
  margin-bottom: 10px;
  text-align: right;
}
.mainRight .dingPri {
  color: #588cfe;
  font-size: 18px;
  text-align: center;
  margin-top: 25px;
}

.pages {
  text-align: center;
}
</style>