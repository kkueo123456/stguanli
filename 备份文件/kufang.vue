<template>
  <div>
    <!-- 库房头部搜索及功能 -->
    <div class="head">
      <div class="headLeft">
        <div class="rongqi">
          <el-input placeholder="请输入货品编号" v-model="search" clearable></el-input>
        </div>
        <div class="rongqi">
          <el-button type="primary">搜索</el-button>
        </div>
        <div class="rongqi">
          <el-button type="primary">扫码</el-button>
        </div>
      </div>
      <div class="headRight">
        <div class="rongqi">
          <el-button type="primary">出库</el-button>
        </div>
        <div class="rongqi">
          <el-button type="primary">调拨</el-button>
        </div>
        <div class="rongqi">
          <el-button type="primary">分销</el-button>
        </div>
        <div class="rongqi">
          <el-button type="primary">盘点</el-button>
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
          <select name="public-choice" v-model="value" id="inputselect" @change="gai">
            <option :value="item.value" v-for="(item,index) in options" :key="index">{{item.label}}</option>
          </select>
        </div>
      </div>
      <div class="navRight">
        <!-- <el-button type="primary">品牌筛选</el-button> -->
      </div>
    </div>
    <!-- 库房主体内容 -->
    <div class="main">
      <!-- 库房主体内容列表 -->
      <div class="list" v-for="(item,index) in data" :key="index">
        <!-- 主体内容列表左 -->
        <div class="mainLeft">
          <!-- 主体内容列表左边图片 -->
          <div class="leftTu"></div>
          <!-- 主体内容列表右侧信息 -->
          <div class="Rightzi">
            <!-- 主体内容列表右侧标题及相应标签 -->
            <div class="title">
              <h2 class="listTit">{{item.name}}</h2>
              <div class="biaoqianList">
                <span class="biaoqian" v-for="(item2,index) in item.biaoqian" :key="index">{{item2}}</span>
              </div>
            </div>
            <!-- 主体内容列表右侧信息头下方商品详细信息 -->
            <div class="another">
              <ul class="anotherList">
                <li class="anotherStyle">品牌:{{item.logo}}</li>
                <li class="anotherStyle">入库价格:{{item.price}}</li>
              </ul>
              <ul class="anotherList">
                <li class="anotherStyle">系列:{{item.lie}}</li>
                <li class="anotherStyle">入库时间:{{item.time|timeFilter}}</li>
              </ul>
              <ul class="anotherList">
                <li class="anotherStyle">款式:{{item.kuan}}</li>
                <li class="anotherStyle">仓位:{{item.cangwei}}</li>
              </ul>
              <ul class="anotherList">
                <li class="anotherStyle">成色:{{item.color}}</li>
                <li class="anotherStyle">编号:{{item.num}}</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 主体内容列表右 -->
        <div class="mainRight">
          <div class="detail" @click="detail(item.id)">查看详情</div>
          <h4 class="dingPri">销售定价:{{item.finPri}}</h4>
        </div>
      </div>
      <!-- 库房主体内容下方分页功能 -->
      <fenye class="pages" @jumpPage="changeye"></fenye>
    </div>
  </div>
</template>
<script>
import fenye from "../components/fenye";
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
          label: "上海总仓"
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
      ]
    };
  },
  methods: {
    gai() {
      var arr = this.data.filter((item, index) => {
        if (item.cw == this.value) {
          return item
        }
      });
      console.log(arr)
      // this.data=arr
    },
    detail(id) {
      this.$router.push("/detail?id=" + id);
    },
    // handleCurrentChange(val) {
    //   console.log(val);
    // },
    changeye(val) {
      console.log(val);
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
  width: 460px;
  display: flex;
  justify-content: space-between;
}
.headRight .rongqi .el-button--primary {
  width: 90px;
  background-color: #019997;
  border-color: #019997;
  border-radius: 25px;
}
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
  margin-right: 10px;

}
.slect #inputselect {
  width: 145px;
  height: 30px;
  border: 1px solid #019997;
}
.navLeft {
  width: 890px;
  display: flex;
  justify-content: space-between;
}
.navRight {
  padding-right: 20px;
}
.navRight .el-button--primary {
  background-color: #019997;
  border-color: #019997;
  border-radius: 20px;
}
.main {
  background-color: white;
  padding-left: 16px;
  padding-right: 20px;
  padding-bottom: 20px;
}
.main .list {
  padding-top: 40px;
  border-bottom: 1px solid #019997;
  padding-bottom: 30px;
}
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
}
.listTit {
  font-size: 18px;
  color: #019997;
  margin-right: 20px;
  margin-bottom: 55px;
}
.Rightzi .title {
  display: flex;
}
.biaoqianList .biaoqian {
  display: inline-block;
  width: 55px;
  height: 20px;
  border: 1px solid red;
  color: red;
  margin-right: 15px;
  text-align: center;
  line-height: 20px;
}
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
.mainRight {
  margin-top: 70px;
  padding-right: 20px;
}
.mainRight .detail {
  font-size: 12px;
  color: #35a3d8;
  margin-bottom: 15px;
  text-align: right;
  cursor: pointer;
}
.mainRight .dingPri {
  color: #588cfe;
  font-size: 18px;
}
.pages {
  text-align: center;
  margin-top: 100px;
}
</style>