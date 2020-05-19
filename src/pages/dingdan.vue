<template>
  <div>
    <el-header>填写采购订单</el-header>
    <el-main>
      <div class="layout">
        <!-- 填写订单头部 -->
        <div class="head">
          <div class="choose">
            <el-radio v-model="radio" label="1">自主采购</el-radio>
            <el-radio v-model="radio" label="2">客户寄卖</el-radio>
          </div>
          <div class="headBottom">
            <div class="rongqi">
              <span>
                <i>*</i>货品名称
              </span>
              <el-input v-model="kufangform.name" placeholder="请输入货品名称" maxlength="30"></el-input>
            </div>
            <div class="rongqi">
              <span>
                <i>*</i>采购价格
              </span>
              <el-input v-model="kufangform.pri" placeholder="请输入采购价格"></el-input>
            </div>
          </div>
        </div>
        <!-- 入库人员才显示的框 -->
        <div class="isshow">
          <h3>此处为入库人员填写</h3>
          <div class="isshowCon">
            <div class="rongqi">
              <span>
                <i>*</i>货品名称
              </span>
              <el-input v-model="num" placeholder="由入库人员填写"></el-input>
              <el-button type="text">编码生成</el-button>
            </div>
            <div class="rongqi-cangku">
              <span>
                <i>*</i>仓库
              </span>
              <el-select v-model="value1" filterable placeholder="由入库人员填写">
                <el-option
                  v-for="item in kufangoption"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="rongqi-cangku">
              <span>
                <i>*</i>仓位
              </span>
              <el-select v-model="value2" filterable placeholder="由入库人员填写">
                <el-option
                  v-for="item in kufangoption"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
        </div>
        <!-- 添加图片 -->
        <div class="picList">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </div>
        <!-- 基础属性 -->
        <div class="origin">
          <div class="origin title">
            <span>
              <i>*</i>基础属性
            </span>
          </div>
          <!-- 下拉选项 -->
          <div class="select">
            <ul>
              <li>
                <el-select v-model="value" placeholder="请选择品牌">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </li>
              <li>
                <el-select v-model="value" placeholder="请选择材质">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </li>
            </ul>
            <ul>
              <li>
                <el-select v-model="value" placeholder="请选择系列">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </li>
              <li>
                <el-select v-model="value" placeholder="请选择尺寸">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </li>
            </ul>
            <ul>
              <li>
                <el-select v-model="value" placeholder="请选择款式">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </li>
              <li>
                <el-select v-model="value" placeholder="请选择颜色">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </li>
            </ul>
            <ul>
              <li>
                <el-select v-model="value" placeholder="请选择成色">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </li>
              <li>
                <el-select v-model="value" placeholder="请选择配件">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </li>
            </ul>
          </div>
          <!-- 货品描述 -->
          <div class="miaoshu">
            <div class="title">
              <span>
                <i>*</i>货品描述
              </span>
            </div>
            <div class="miaoshuBody">
              <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea"></el-input>
            </div>
          </div>
          <!-- 货品描述下方付款方式等 -->
          <div class="miaoshuBottom">
            <div class="miaoshuBottomLeft">
              <!-- 自主回收 -->
              <ul v-show="radio==1">
                <h3>自主回收</h3>
                <li>
                  <div class="title">
                    <span>
                      <i>*</i>付款方式
                    </span>
                    <el-select v-model="form2.fangshi" placeholder="微信">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </li>
                <li>
                  <div class="title">
                    <span>
                      <i>*</i>付款账号
                    </span>
                    <el-input v-model="form2.user" placeholder="输入付款账号"></el-input>
                  </div>
                </li>
                <li>
                  <div class="title">
                    <span>
                      <i>*</i>付款单号
                    </span>
                    <el-input v-model="form2.numB" placeholder="输入付款单号"></el-input>
                  </div>
                </li>
                <li>
                  <div class="title">
                    <span>
                      <i>*</i>截图凭证
                    </span>
                    <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :before-remove="beforeRemove"
                      multiple
                      :limit="3"
                      :on-exceed="handleExceed"
                      :file-list="fileList"
                    >
                      <el-button size="small" type="primary">点击上传</el-button>
                      <div slot="tip" class="el-upload__tip">限制三个文件</div>
                    </el-upload>
                  </div>
                </li>
              </ul>
              <!-- 客户寄卖 -->
              <ul v-show="radio==2">
                <h3>客户寄卖</h3>
                <li>
                  <div class="title">
                    <span>
                      <i>*</i>客户姓名
                    </span>
                     <el-input v-model="form3.name" placeholder="输入姓名"></el-input>
                  </div>
                </li>
                <li>
                  <div class="title">
                    <span>
                      <i>*</i>手机号码
                    </span>
                    <el-input v-model="form3.phone" placeholder="输入手机号码"></el-input>
                  </div>
                </li>
                <li>
                  <div class="title">
                    <span>
                      <i>*</i>联系地址
                    </span>
                    <el-input v-model="form3.add" placeholder="输入地址"></el-input>
                  </div>
                </li>
                <li>
                  <div class="title">
                    <span>
                      <i>*</i>截图凭证
                    </span>
                    <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :before-remove="beforeRemove"
                      multiple
                      :limit="3"
                      :on-exceed="handleExceed"
                      :file-list="fileList"
                    >
                      <el-button size="small" type="primary">点击上传</el-button>
                      <div slot="tip" class="el-upload__tip">限制三个文件</div>
                    </el-upload>
                  </div>
                </li>
              </ul>
            </div>
            <div class="miaoshuBottomRight"></div>
          </div>
        </div>
        <!-- 提交订单与取消 -->
        <div class="footer">
          <span>采购员：王小明</span>
          <div>
            <button class="tijiao" @click="tijiao">提交订单</button>
            <button class="zancun">暂存</button>
            <button class="tuihui">取消退回</button>
          </div>
        </div>
      </div>
    </el-main>
  </div>
</template>
<script>
export default {
  props: [],
  components: {},
  data() {
    return {
      /*自主采购与客户寄卖*/
      radio: "",
      /*货品名称，采购价格*/
      kufangform: {
        name: "",
        pri: ""
      },
      // 库房人员填写
      num: "",
      kufangoption: [],
      value1: "",
      value2: "",
      /*下拉菜单绑定*/
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      /*上传图片*/
      dialogImageUrl: "",
      dialogVisible: false,
      /*货品描述*/
      textarea: "",
      /*付款方式自主回收*/
      form2: {
        fangshi: "",
        user: "",
        numB: ""
      },
      /*付款方式客户寄卖*/ 
      form3:{
        name:"",
        phone:"",
        add:''
      },
      /*上传文件*/
      fileList: []
    };
  },
  methods: {
    /*上传图片需要的方法*/
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    /*上传文件需要的方法*/
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    /*点击文件列表中已上传的文件时的钩子*/

    handlePreview(file) {
      console.log(file);
    },
    /*文件上传限制*/
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    /*上传图片后准备移除*/
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    // 提交
    tijiao(){
      if(this.radio==""){
        alert('未选择采购方式')
      }
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>
<style scoped>
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
.el-main .head /deep/ .el-radio__label {
  font-size: 18px;
  font-weight: bold;
}
.head /deep/ .el-radio__input.is-checked + .el-radio__label {
  color: #019997;
}
.head /deep/ .el-radio__input.is-checked .el-radio__inner {
  border-color: #019997;
  background-color: #019997;
}
.rongqi span {
  font-size: 18px;
  margin-right: 20px;
  width: 100px;
  line-height: 40px;
}
.rongqi i {
  color: red;
  margin-right: 10px;
}
.rongqi {
  display: flex;
  margin-bottom: 20px;
}
.el-main .head .rongqi /deep/ .el-input {
  width: 30% !important;
  margin-right: 10px;
}
/* 库房人员显示框 */
.isshow {
  height: 120px;
  background-color: #f0f0f0;
  padding: 30px;
}
.isshow h3 {
  font-size: 22px;
  color: #019997;
  margin-bottom: 30px;
}
.isshow .isshowCon {
  display: flex;
  justify-content: space-between;
}
.isshow .isshowCon .rongqi {
  width: 600px;
}
.isshow .isshowCon .rongqi /deep/ .el-input {
  width: 60% !important;
}
.isshowCon .rongqi-cangku i {
  color: red;
  margin-right: 10px;
}
.isshowCon .rongqi-cangku span {
  font-size: 18px;
  margin-right: 20px;
  width: 100px;
  line-height: 40px;
}
/* 上传图片框 */
.picList {
  border: 1px solid #9a9a9a;
  padding: 20px;
  margin-top: 50px;
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
/* 基础属性下拉 */
.select {
  display: flex;
}
.select ul {
  margin-right: 60px;
}
.select ul li {
  margin-top: 20px;
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
.miaoshuBottomLeft ul h3{
  font-size: 18px;
  color: #019997;
  padding-left: 15px;
}
/* 上传文件的按钮 */
.miaoshuBottomLeft ul li .title /deep/ .el-button--primary {
  background-color: #019997;
  border: #019997;
}
/* 底部提交订单 */
.footer {
  display: flex;
  margin-top: 30px;
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
.footer .zancun{
  background-color:rgb(239, 156, 0) ;
}
</style>