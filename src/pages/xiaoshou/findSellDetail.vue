<template>
<!-- 查看销售订单 -->
  <div>
    <el-header>查看销售历史订单</el-header>
    <el-main>
      <div class="layout">
        <!-- 信息标题下方订单详情列表 -->
        <div class="detailList">
          <div class="detailListTit">
            <h3>订单详情</h3>
            <div class="detailListTit-Right">共{{spNum}}件商品</div>
          </div>
          <!-- 主体内容 -->
          <div class="main">
            <!-- 主体内容列表 -->
            <div class="list" v-for="(item,index) in data" :key="index">
              <!-- 主体内容列表左 -->
              <div class="mainLeft">
                <!-- 主体内容列表左边图片 -->
                <div class="leftTu"></div>
                <!-- 主体内容列表右侧信息 -->
                <div class="Rightzi">
                  <!-- 主体内容列表右侧标题及相应标签 -->
                  <div class="zhutititle">
                    <h2 class="listTit">{{item.name}}</h2>
                    <!-- <div class="biaoqianList">
                <span class="biaoqian" v-for="(item2,index) in item.biaoqian" :key="index">{{item2}}</span>
                    </div>-->
                    <div class="listBq">
                      <span class="listBqji">{{item.mai}}</span>
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
                <!-- 出库及dialog -->
                
                <!-- 下方销售定价 -->
                <h4 class="dingPri">指导售价:{{item.price}}</h4>
                <!-- 销售价格填写 -->
                <div class="mainRight-xs">
                  <span>销售价格:{{item.finPri}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 下方付款方式等 -->
        <div class="miaoshuBottom">
          <div class="miaoshuBottomLeft">
            <!-- 客户寄卖 -->
            <ul>
              <h3>客户信息</h3>
              <li>
                <div class="title">
                  <span>
                    <i>*</i>手机号码
                  </span>
                  <el-input v-model="form3.phone" placeholder="输入手机号码" :disabled="true"></el-input>
                </div>
              </li>
              <li>
                <div class="title">
                  <span>
                    <i>*</i>客户姓名
                  </span>
                  <el-input v-model="form3.name" placeholder="输入姓名" :disabled="true"></el-input>
                </div>
              </li>

              <li>
                <div class="title">
                  <span>
                    <i>*</i>联系地址
                  </span>
                  <el-input v-model="form3.add" placeholder="输入地址" :disabled="true"></el-input>
                </div>
              </li>
             
            </ul>
          </div>
          <div class="miaoshuBottomRight"></div>
        </div>

        <!-- 提交订单与取消 -->
        <div class="footer">
         
        </div>
      </div>
    </el-main>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  props: [],
  components: {},
  data() {
    return {
      //几件商品
      spNum: "0",
      // 主题数据
     
      //移除的dialog及id
      Deldialog: false,
      DelId: "",
      /*付款方式客户寄卖*/
      form3: {
        name: "",
        phone: "",
        add: ""
      },
      /*上传文件*/
      fileList: []
    };
  },
  methods: {
   
    //提交订单
    tijiao() {
      console.log(this.data);
    },
    //暂存
    zancun() {}
  },
  mounted() {
    this.spNum = this.data.length;
    this.$store.dispatch("getmainData");

  },
  watch: {},
  computed: {
    ...mapGetters(["data", "session"])

  }
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
}
/* 主体有效去 */
.el-main .layout {
  width: 1300px;
  margin: 0 auto;
}
.el-main .head .choose {
  margin-bottom: 50px;
}
/* 主题下方提示标题 */
.main-title {
  font-size: 28px;
  margin-bottom: 40px;
}
/* 主题下方列表详情 */
.detailListTit {
  display: flex;
  justify-content: space-between;
}
.detailListTit h3 {
  font-size: 20px;
}
.detailListTit .detailListTit-Right {
  color: red;
}
/* 主体样式 */
/* 下拉菜单下方主题样式 */
.main {
  background-color: white;
  margin-top: 20px;
  padding-bottom: 20px;
}
.main .list {
  padding-top: 40px;
  border: 1px solid black;
  padding-bottom: 20px;
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
/* 下拉菜单下方主题样式列表标题 */
.list {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.listTit {
  font-size: 18px;
  color: $bg1;
  margin-right: 20px;
  margin-bottom: 10px;
}
.zhutititle .listBq .listBqji {
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
.another .anotherList {
  margin-right: 20px;
}
.another .anotherStyle {
  color: #606060;
  font-size: 13px;
  margin-bottom: 10px;
  white-space: nowrap;
}
/* 下拉菜单下方主题样式列表右侧 */

.mainRight {
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20px;
}
.mainRightTop {
  display: flex;
  justify-content: flex-end;
}
.mainRight .detail {
  margin-bottom: 15px;
  text-align: right;
  cursor: pointer;
  margin-left: 10px;
}

.mainRight .dingPri {
  color: rgb(181, 181, 181);
  font-size: 16px;
  text-align: right;
}
.mainRight .mainRight-ck {
  color: red;
  font-weight: normal;
  text-align: end;
  cursor: pointer;
}
.mainRight .mainRight-xs {
  color: $bg1;
  font-size: 20px;
  display: flex;
}
.mainRight-xs span {
  white-space: nowrap;
  line-height: 40px;
}
.mainRight-xs /deep/ .el-input__inner {
  padding-right: 0;
  margin-left: 10px;
}
/* 公共标题 */
.title {
  margin-top: 32px;
}
.title span {
  font-size: 18px;
  margin-right: 20px;
  width: 100px;
  line-height: 40px;
}
.title i {
  color: red;
  margin-right: 10px;
}
/* 付款方式 */
.miaoshuBottomLeft {
  display: flex;
  justify-content: space-between;
}
.miaoshuBottomLeft ul li .title {
  display: flex;
}
.miaoshuBottomLeft ul li .title /deep/ .el-input {
  width: 70%;
}
.miaoshuBottomLeft ul {
  width: 40%;
  margin-top: 20px;
}
.miaoshuBottomLeft ul h3 {
  font-size: 18px;
  color: $bg1;
  padding-left: 15px;
}

</style>