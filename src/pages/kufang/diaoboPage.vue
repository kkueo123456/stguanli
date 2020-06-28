<template>
<!-- 调拨单页 -->
  <div>
    <el-header>调拨单</el-header>
    <el-main>
      <div class="layout">
        <h3 class="main-title">唐山分仓&nbsp;->&nbsp;北京分仓</h3>
        <div class="headLeft">
          <search @search="headSearch"></search>

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
        <!-- 信息标题下方订单详情列表 -->
        <div class="detailList">
          <div class="detailListTit"></div>
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
                <h4 class="mainRight-ck" @click="remove(item.id)">移除</h4>
                <el-dialog title="移除" :visible.sync="Deldialog" width="30%">
                  <span>确定移除？</span>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="Deldialog = false">取 消</el-button>
                    <el-button type="primary" @click="confirmDel">确 定</el-button>
                  </span>
                </el-dialog>
                <look :look="item.id"></look>
              </div>
            </div>
          </div>
        </div>

        <!-- 提交订单与取消 -->
        <div class="footer">
          <div class="footer-button">
            <button class="tijiao" @click="tijiao">上传调拨单</button>
            <button class="zancun" @click="zancun">暂存</button>
            <button class="tuihui">取消退回</button>
          </div>
        </div>
      </div>
    </el-main>
  </div>
</template>
<script>
import look from "../../components/look";
import search from "../../components/search";

export default {
  props: [],
  components: {
    look,
    search
  },
  data() {
    return {
      // 搜索
  
      //扫描
      saomiao: "",
      // 主题数据
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
          finPri: "",
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
          finPri: "",
          id: "1",
          cw: "0"
        },
        {
          img: "../../img/login.png",
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
          finPri: "",
          id: "2",
          cw: "1"
        }
      ],
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
    /*头部搜索按钮*/
    headSearch(val) {
      console.log(val);
    },
    //扫码提交
    submit() {},
    remove(id) {
      this.Deldialog = true;
      this.DelId = id;
    },
    //确定移除
    confirmDel() {
      this.$message({
        showClose: true,
        message: this.DelId + "删除成功",
        type: "success"
      });
      this.Deldialog = false;
    },

    //提交订单
    tijiao() {
      console.log(this.data);
    },
    //暂存
    zancun() {}
  },
  mounted() {
    this.$refs.input.focus();
  },
  watch: {},
  computed: {}
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

/* 头部搜索扫码样式 */
.headLeft {
  display: flex;
  margin-bottom: 10px;
}

.headLeft .rongqi {
  margin-right: 20px;
}

.headLeft .el-input--suffix /deep/ .el-input__inner {
  width: 275px;
  border-radius: 18px;
  border: 1px solid $bg1;
}

.headLeft .rongqi .el-button--primary {
  background-color: $bg1;
  border-color: $bg1;
  border-radius: 12px;
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

/* 下拉菜单下方主题样式列表下方信息 */
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

/* 底部提交订单 */
.footer {
  width: 100%;
  display: flex;
  margin-top: 30px;
}

.footer-button {
  margin: 0 auto;
}

.footer span {
  margin-right: 40px;
  line-height: 40px;
}

.footer button {
  border: none;
  width: 200px;
  height: 40px;
  cursor: pointer;
  margin-right: 15px;
  color: white;
}

.footer .tijiao {
  background-color: red;
}

.footer .tuihui {
  background-color: #4b4b4b;
}

.footer .zancun {
  background-color: rgb(239, 156, 0);
}
</style>