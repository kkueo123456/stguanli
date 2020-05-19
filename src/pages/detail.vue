<template>
  <div class="zong">
    <!-- 详情页头部 -->
    <div class="head">
      <div class="layout">
        <div class="headrongqi">
          <!-- 头部左侧图片 -->
          <div class="headLeft">
            <div class="headLeftBig">
              <div class="xiaotu">
                <el-image :src="url" 
                 style="width: 100%; height: 100%"
                :preview-src-list="srcList"></el-image>
              </div>
            </div>
            <div class="headLeftSm">
              <span class="headLeftSmTu" v-for="(item,index) in srcList" :key="index" @click="changeImg(index)">
                  <img :src="item" alt="">
              </span>
            </div>
          </div>
          <!-- 头部右侧名称等 -->
          <div class="headRight">
            <!-- 头部右侧名称标题 -->
            <h3 class="headTit">商品名称 : {{data[0].name}}</h3>
            <!-- 头部右侧编码 -->
            <div class="headnum">编码 : {{data[0].num}}</div>
            <!-- 头部右侧售价及成色 -->
            <div class="headPri">
              <span class="shoujia">售价 : {{data[0].price}}</span>
              <span>{{data[0].color}}</span>
            </div>
            <!-- 头部右侧入库价格及时间 -->
            <div class="headru">
              <span class="ruPri">入库价格 : {{data[0].finPri}}</span>
              <span class="ruTime">入库时间 : {{data[0].time|timeFilter}}</span>
            </div>
            <!-- 头部右侧仓库及仓位 -->
            <div class="headCang">
              <span class="cangku">仓库 : {{data[0].cangwei}}</span>
              <span class="cangwei">仓位 : {{data[0].cangwei}}</span>
            </div>
            <!-- 头部右侧底下相关操作 -->
            <!-- <div class="headButton">
              <span>出库</span>
              <span>调拨</span>
              <span>编辑</span>
              <span>分销</span>
              <span>调价</span>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <!-- 商品详情 -->
    <div class="detail">
      <div class="layout">
        <div class="spdetail">
          <div class="spdetailLeft">商品详情</div>
          <div class="spdetailRight">
            <ul>
              <li>品牌：{{data[0].logo}}</li>
              <li>材质：{{data[0].cai}}</li>
              <li>成色：{{data[0].color}}</li>
            </ul>
            <ul>
              <li>系列：{{data[0].lie}}</li>
              <li>材质：{{data[0].cai}}</li>
              <li>成色：{{data[0].color}}</li>
            </ul>
            <ul>
              <li>品牌：{{data[0].logo}}</li>
              <li>材质：{{data[0].cai}}</li>
              <li>成色：{{data[0].color}}</li>
            </ul>
            <ul>
              <li>配件：大全套</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 价格调整 -->
    <div class="jump">
      <h3>价格调整</h3>
      <div class="jumpList tiaojia">
        <ul>
          <li>调价前：100000元</li>
          <li>调价后：120000元</li>
          <li>调价人：张三</li>
          <li>调价时间：2020/04/04</li>
        </ul>
        <ul>
          <li>调价前：100000元</li>
          <li>调价后：120000元</li>
          <li>调价人：张三</li>
          <li>调价时间：2020/04/04</li>
        </ul>
        <ul>
          <li>调价前：100000元</li>
          <li>调价后：120000元</li>
          <li>调价人：张三</li>
          <li>调价时间：2020/04/04</li>
        </ul>
        <ul>
          <li>调价前：100000元</li>
          <li>调价后：120000元</li>
          <li>调价人：张三</li>
          <li>调价时间：2020/04/04</li>
        </ul>
      </div>
    </div>
    <!-- 调拨轨迹 -->
    <div class="jump">
      <h3>调拨轨迹</h3>
      <div class="jumpList tiaobo">
        <ul>
          <li>调价前：100000元</li>
          <li>调价后：120000元</li>
          <li>调价人：张三</li>
          <li>调价时间：2020/04/04</li>
        </ul>
        <ul>
          <li>调价前：100000元</li>
          <li>调价后：120000元</li>
          <li>调价人：张三</li>
          <li>调价时间：2020/04/04</li>
        </ul>
        <ul>
          <li>调价前：100000元</li>
          <li>调价后：120000元</li>
          <li>调价人：张三</li>
          <li>调价时间：2020/04/04</li>
        </ul>
        <ul>
          <li>调价前：100000元</li>
          <li>调价后：120000元</li>
          <li>调价人：张三</li>
          <li>调价时间：2020/04/04</li>
        </ul>
      </div>
    </div>
    <!-- 销售轨迹 -->
    <div class="jump">
      <h3>销售轨迹</h3>
      <div class="jumpList xiaoshou">
        <ul>
          <li>调价前：100000元</li>
          <li>调价后：120000元</li>
          <li>调价人：张三</li>
          <li>调价时间：2020/04/04</li>
        </ul>
        <ul>
          <li>调价前：100000元</li>
          <li>调价后：120000元</li>
          <li>调价人：张三</li>
          <li>调价时间：2020/04/04</li>
        </ul>
        <ul>
          <li>调价前：100000元</li>
          <li>调价后：120000元</li>
          <li>调价人：张三</li>
          <li>调价时间：2020/04/04</li>
        </ul>
        <ul>
          <li>调价前：100000元</li>
          <li>调价后：120000元</li>
          <li>调价人：张三</li>
          <li>调价时间：2020/04/04</li>
        </ul>
      </div>
    </div>
    <!-- 图片详情 -->
    <!-- <div class="picDetail">
      <h3>图片详情</h3>
      <div class="pic"></div>
    </div> -->
  </div>
</template>
<script>
export default {
  props: [],
  components: {},
  data() {
    return {
      id: "",
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
          cai: "牛批"
        }
      ],
      url:
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
      srcList: [
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg"
      ]
    };
  },
  methods: {
      changeImg(index){
          this.url=this.srcList[index]
      }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>
<style  scoped>
.zong {
  /* 总体外框的有效区 */
  width: 1130px;
  margin: 0 auto;
}
.layout {
  width: 1130px;
  margin: 0 auto;
}
.head {
  /* 头部 */
  padding-top: 60px;
  margin-bottom: 40px;
}
.headrongqi {
  display: flex;
}
.headLeft {
  width: 305px;
  height: 375px;
}
.headLeft .headLeftBig .xiaotu {
  width: 295px;
  height: 275px;
}
.headLeft .headLeftBig {
  width: 295px;
  height: 275px;
  background-color: coral;
}
.headLeft .headLeftSmTu {
  width: 90px;
  height: 80px;
  display: inline-block;
  margin-right: 8px;
  background-color: crimson;
  margin-top: 10px;
  border:1px solid yellowgreen;
  box-sizing: content-box;
}
.headLeft .headLeftSmTu img{
    width: 100%;
    height: 100%;
}
.headrongqi .headRight {
  padding-left: 20px;
}
.headRight .headTit {
  font-size: 30px;
  font-weight: normal;
}
.headRight .headnum {
  margin-top: 20px;
  margin-bottom: 40px;
}
.headRight .headPri span {
  color: #ff2626;
  font-weight: bold;
}
.headRight .headPri {
  margin-bottom: 50px;
}
.headRight .headPri .shoujia {
  font-size: 18px;
  margin-right: 60px;
}
.headRight .headru {
  margin-bottom: 30px;
}
.headRight .headru .ruPri {
  margin-right: 60px;
}
.headRight .headCang .cangku {
  margin-right: 60px;
}
.headRight .headButton span {
  width: 120px;
  height: 40px;
  background-color: crimson;
  text-align: center;
  line-height: 40px;
  margin-right: 10px;
  color: white;
  display: inline-block;
  cursor: pointer;
  margin-top: 62px;
}
/* 商品详情栏 */
.detail {
  width: 100%;
  height: 150px;
  background-color: #e5f5f4;
  margin-bottom: 20px;
}
.detail .spdetail {
  display: flex;
}
.detail .spdetail .spdetailLeft {
  width: 195px;
  background-color: #4b4b4b;
  color: white;
  font-size: 30px;
  text-align: center;
  line-height: 150px;
}
.detail .spdetail .spdetailRight {
  padding: 20px;
  display: flex;
}
.detail .spdetail .spdetailRight ul {
  height: 100px;
  display: flex;
  /* 弹性盒垂直排列 */
  flex-direction: column;
  justify-content: space-between;
  margin-right: 65px;
}
.detail .spdetail .spdetailRight ul li {
}
/* 价格调整栏 */
.jump h3 {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: normal;
}
.jump .jumpList {
  padding: 30px;
  background-color: #fce5f2;
  margin-bottom: 25px;
}
.jump .jumpList ul {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
/* 调拨轨迹栏 */
.jump .tiaobo {
  background-color: #fefdcc;
}
/* 销售轨迹栏 */
.jump .xiaoshou {
  background-color: #ebebeb;
}
/* 图片详情 */

</style>