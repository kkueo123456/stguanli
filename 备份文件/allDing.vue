<template>
<!-- 未定价页 -->
  <div>
    <!-- 未定价头部填写订单 -->
    <div class="head">
      <div class="headLeft">
        <div class="rongqi">
          <dingdan></dingdan>
        </div>
      </div>
       <div class="headRight">
        <el-button type="primary">批量定价</el-button>
      </div>
    </div>
    <!-- 未定价头部下方下拉菜单及查找 -->
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
        <!-- 未定价头部下方日期下拉列表 -->
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
    <!-- 未定价主体内容 -->
    <div class="main">
      <!-- 未定价主体内容列表 -->
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
              <div class="listBq"><span class="listBqji">{{item.mai}}</span></div>
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
          <span>指导定价:</span>
          <el-input placeholder="请输入价格" v-model="item.zhidao" clearable></el-input>
          <el-button type="primary" @click="sure(item.zhidao,item.id)">确定</el-button>
        </div>
      </div>
      <!-- 未定价主体内容下方分页功能 -->
      <fenye class="pages" @jumpPage='changeye'></fenye>
    </div>
  </div>
</template>
<script>
import fenye from "../components/fenye";
import dingdan from '../components/dingdan'
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
          finPri: "120000",
          id: "0",
          zt: "未鉴定",
          mai:'寄',
          zhidao:''
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
          zt: "已退回",
          mai:'寄',
          zhidao:''

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
          zt: "已售出",
          mai:'寄',
          zhidao:''

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
          zt: "入库在售",
          mai:'寄',
          zhidao:''

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
      ding: ""
    };
  },
  methods: {
     /*添加采购订单*/ 
    //  dingdan() {
    //   this.$router.push("/dingdan");
    // },
    gai() {
      console.log(this.value);
    },
    detail(id) {
      this.$router.push("/detail?id=" + id);
    },
    checkall(){
      console.log(this.value2)
 
    },
    sure(val,id){
      console.log(val)
      console.log(id)
    },
    changeye(val){
      console.log(val)
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
  display: flex;
  justify-content: space-between;
}
.head .headRight .el-button--primary{
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
.title .listBq .listBqji{
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
  width: 28%;
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
}
.mainRight span {
  line-height: 40px;
  font-size: 14px;
  text-align: center;
  display: inline-block;
}
.mainRight /deep/ .el-button {
  height: 40px;
  background-color: #019997;
  border: 1px solid #019997;
}
.mainRight /deep/ .el-input{
  width: 50%;
}
.mainRight /deep/ .el-input__inner{
  border: 1px solid #019997;
  border-radius: 0;

}

.bianji {
  font-size: 18px;
  color: #588cfe;
  text-align: right;
  cursor: pointer;
}
</style>