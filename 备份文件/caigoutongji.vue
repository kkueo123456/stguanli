<template>
  <!-- 定价完成页 -->
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
          <select name="public-choice" v-model="value" id="inputselect" @change="gai">
            <option :value="item.value" v-for="(item,index) in options" :key="index">{{item.label}}</option>
          </select>
        </div>
        <div class="slect">
          <select name="public-choice" v-model="value" id="inputselect" @change="gai">
            <option :value="item.value" v-for="(item,index) in options" :key="index">{{item.label}}</option>
          </select>
        </div>
        <!-- 采购头部下方日期下拉列表 -->
        <div class="slect">
          <div class="block">
            <el-date-picker
              v-model="value2"
              type="datetimerange"
              :picker-options="pickerOptions"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="right"
            ></el-date-picker>
          </div>
        </div>
      </div>
      <div class="navRight">
        <el-button type="primary" @click="checkall">查看全部</el-button>
      </div>
    </div>
    <!-- 采购主体内容 -->
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
          <div class="zdjia">指导定价：{{item.finPri}}</div>
          <el-button type="primary" @click="changejia(index,item.finPri)">修改</el-button>
          <el-dialog title="修改定价" :visible.sync="dialogVisible" width="30%" :before-close="changejia">
            <!-- 直接使用item.finPri所有点开的定价都会为最后一个的定价，解决方法通过自定义ding并在点击修改时传值 -->
            <span class="dialog-tit">现在定价：&nbsp;{{ding}}</span>

            <div class="dialog-gai">
              <span>修改定价：</span>
              <el-input placeholder="请输入价格" v-model="dialogPri" clearable class="dialog-input"></el-input>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false" class="dialog-cancle">取 消</el-button>
              <el-button type="primary" @click="dialogSure" class="dialog-sure">确 定</el-button>
            </span>
          </el-dialog>
        </div>
      </div>
      <!-- 采购主体内容下方分页功能 -->
      <fenye class="pages" @jumpPage="changeye"></fenye>
    </div>
  </div>
</template>
<script>
import fenye from "../components/fenye";
import dingdan from "../components/dingdan";
export default {
  props: [],
  components: {
    dingdan,
    fenye
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
          finPri: "130000",
          id: "0",
          zt: "未鉴定",
          mai: "寄"
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
          finPri: "150000",
          id: "1",
          zt: "已退回",
          mai: "寄"
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
          finPri: "420000",
          id: "2",
          zt: "已售出",
          mai: "寄"
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
          finPri: "6220000",
          id: "2",
          zt: "入库在售",
          mai: "寄"
        }
      ],
      pickerOptions: {
        shortcuts: [
          {
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: "",
      /*dialog弹框的显示隐藏*/

      dialogVisible: false,
      /*与上面现在定价绑定*/

      ding: "",
      /*与上方修改定价绑定*/

      dialogPri: ""
    };
  },
  methods: {
    /*添加采购订单*/

    dingdan() {
      this.$router.push("/dingdan");
    },
    gai() {
      console.log(this.value);
    },
    detail(id) {},
    handleCurrentChange(val) {},
    /*上方时间下拉菜单的查看全部*/

    checkall() {
      console.log(this.value2);
      var data1 = new Date(this.value2[0]).getTime();
      var data2 = new Date(this.value2[1]).getTime();
      console.log(data1 + "-" + data2);
    },
    changejia(index, pri) {
      this.dialogVisible = true;
      this.ding = pri;
    },
    dialogSure() {
      this.dialogVisible = false;
      console.log(this.dialogPri);
    },
    changeye(val) {
      console.log(val);
    }
  },
  mounted() {},
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
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.slect {
  width: 148px;
}
.slect #inputselect {
  width: 145px;
  height: 30px;
  border: 1px solid #019997;
}
.navLeft {
  display: flex;
  justify-content: space-between;
}
.navLeft /deep/ .el-input__inner {
  border: 1px solid #019997;
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
.another .anotherList{
  margin-right: 20px;
}
.another .anotherStyle {
  color: #606060;
  font-size: 13px;
  margin-bottom: 10px;
  white-space:nowrap;
}
/* 下拉菜单下方主题样式列表右侧 */
.mainRight {
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
}
.mainRight .zdjia {
  font-size: 16px;
  color: #019997;
  line-height: 40px;
}
.mainRight /deep/ .el-button {
  width: 80px;
  height: 40px;
  background-color: #019997;
  border: 1px solid #019997;
  margin-left: 20px;
}

.mainRight /deep/ .el-input__inner {
  border: 1px solid #019997;
  border-radius: 0;
  padding: 0;
}
/* 下拉菜单下方主题列表右侧修改及dialog */
.mainRight .dialog-gai .dialog-input {
  width: 80% !important;
}
.mainRight .dialog-gai {
  display: flex;
  margin-top: 20px;
}
.mainRight .dialog-gai span {
  width: 100px;
  line-height: 40px;
  font-size: 18px;
  color: #019997;
  font-weight: bold;
}
.mainRight /deep/ .dialog-footer .dialog-cancle {
  color: white;
  background-color: black;
  border: 1px solid black;
}
.mainRight /deep/ .el-dialog__header {
  text-align: center;
  background-color: #019997;
}
.mainRight /deep/ .el-dialog__title {
  color: white;
}
.mainRight /deep/ .el-dialog__body {
  padding: 50px;
}
.mainRight /deep/ .dialog-tit {
  font-size: 18px;
  font-weight: bold;
}

.bianji {
  font-size: 18px;
  color: #588cfe;
  text-align: right;
  cursor: pointer;
}
</style>