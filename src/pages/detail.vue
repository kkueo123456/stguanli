<template>
  <div class="zong">
    <el-header>商品详情</el-header>
    <!-- 详情页头部 -->
    <div class="head">
      <div class="layout">
        <div class="headrongqi">
          <!-- 头部左侧图片 -->
          <div class="headLeft">
            <div class="headLeftBig">
              <div class="xiaotu">
                <el-image :src="url" style="width: 100%; height: 100%" :preview-src-list="srcList"></el-image>
              </div>
            </div>
            <div class="headLeftSm">
              <span
                class="headLeftSmTu"
                v-for="(item,index) in srcList"
                :key="index"
                @click="changeImg(index)"
              >
                <img :src="item" alt />
              </span>
            </div>
          </div>
          <!-- 头部右侧名称等 -->
          <div class="headRight">
            <div class="headRightTop">
              <!-- 头部右侧名称标题 -->
              <ul>
                <li>
                  <span>编号:</span>
                  {{data[0].num}}
                </li>
                <li>
                  <span>产品标题:</span>
                  {{data[0].name}}
                </li>

                <li>
                  <span>指导定价:</span>
                  {{data[0].num}}
                </li>
              </ul>
              <ul>
                <li>
                  <span>品牌:</span>
                  {{data[0].logo}}
                </li>
                <li>
                  <span>系列:</span>
                  {{data[0].lie}}
                </li>
                <li>
                  <span>款式:</span>
                  {{data[0].kuan}}
                </li>
              </ul>
              <ul>
                <li>
                  <span>材质:</span>
                  {{data[0].cai}}
                </li>
                <li>
                  <span>尺寸:</span>
                  {{data[0].cai}}
                </li>
                <li>
                  <span>颜色:</span>
                  {{data[0].cai}}
                </li>
                <li>
                  <span>配件:</span>
                  {{data[0].cai}}
                </li>
                <li>
                  <span>成色:</span>
                  {{data[0].color}}
                </li>
                <li>
                  <span>年份:</span>
                  中古
                </li>
              </ul>
              <ul>
                <li>
                  <span>入库价格:</span>
                  {{data[0].finPri}}
                </li>
                <li>
                  <span>入库时间:</span>
                  {{data[0].time}}
                </li>
                <li>
                  <span>仓位:</span>
                  {{data[0].cangwei}}
                </li>
                <li>
                  <span>仓库:</span>
                  {{data[0].cangwei}}
                </li>
                <li>
                  <span>采购员:</span>张三
                </li>
                <li>
                  <span>入库员:</span>张三
                </li>
              </ul>
            </div>
            <!-- 头部右侧底下相关操作 -->
            <!-- <div class="headButton">
              <span>出库</span>
              <span>调拨</span>
              <span>编辑</span>
              <span>分销</span>
              <span>调价</span>
            </div>-->
            <div class="headRightBottom">
              <div class="headRightBottom-Left">
                <h3>商品描述</h3>
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 7}"
                  v-model="textarea1"
                  :readonly="true"
                  :min="500"
                ></el-input>
              </div>
              <div class="headRightBottom-Right">
                <h3>买点</h3>
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 7}"
                  v-model="textarea1"
                  :readonly="true"
                ></el-input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品详情 -->
    <div class="detail">
      <div class="layout"></div>
    </div>
    <!-- 价格调整 -->
    <div class="jump">
      <div class="jumpLeft">
        <h3>价格调整</h3>
        <el-scrollbar style="height:100%">
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
        </el-scrollbar>
      </div>
      <div class="jumpRight">
        <h3>调拨轨迹</h3>
        <el-scrollbar style="height:100%">
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
        </el-scrollbar>
      </div>
    </div>
    <!-- 调拨轨迹 -->
    <div class="jump"></div>

    <!-- 图片详情 -->
    <!-- <div class="picDetail">
      <h3>图片详情</h3>
      <div class="pic"></div>
    </div>-->
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
      ],
      //商品描述
      textarea1: ""
    };
  },
  methods: {
    changeImg(index) {
      this.url = this.srcList[index];
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';

/* 头部样式 */
.el-header {
  text-align: center;
  height: 65px !important;
  background-color: rgb(75,75,75);
  color: white;
  font-size: 26px;
  line-height: 65px;
  letter-spacing: 5px;
  margin-bottom 20px
}

.zong {
  /* 总体外框的有效区 */
  width: 1800px;
  margin: 0 auto;
}

.layout {
  width: 1800px;
  margin: 0 auto;
}

.head {
  /* 头部 */
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
  border: 1px solid yellowgreen;
  box-sizing: content-box;
}

.headLeft .headLeftSmTu img {
  width: 100%;
  height: 100%;
}

.headrongqi .headRight {
  padding-left: 20px;
}

.headRight {
  /* width: 100%; */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* 商品详情栏 */
.spdetailRight {
  display: flex;
}

.headRightTop {
  display: flex;
  flex-direction: column;
}

.headRightBottom {
  display: flex;
}

.headRightTop ul {
  display: flex;
}

.headRightTop ul li {
  width: 230px;
  margin-bottom: 15px;
  margin-right: 15px;
}

.headRightTop ul li span {
  color: $bg1;
  margin-right: 5px;
}

.headRightBottom h3 {
  margin-bottom: 30px;
  color: $bg1;
}

.headRightBottom-Left {
  margin-right: 20px;
  width: 48%;
}

.headRightBottom-Right {
  width: 48%;
}

/* 价格调整栏 */
.jump {
  display: flex;
  justify-content: space-between;
}

.jump .jumpLeft {
  width: 49%;
}

// 滚动栏设置
.jumpLeft /deep/ .el-scrollbar__wrap {
  overflow-x: hidden;
  background-color: #fefdcc;
}

.jumpRight /deep/ .el-scrollbar__wrap {
  overflow-x: hidden;
  background-color: #fefdcc;
}

.jump .jumpRight {
  width: 49%;
}

.jump h3 {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: normal;
}

// 滚动栏里内容显示的固定高度
.jump .jumpList {
  height: 250px;
  padding: 30px;
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