<template>
  <div class="wrap">
    <!-- <div class="header">
      <div class="logo">
        <img src="../assets/img/indexlogo.png" alt />
      </div>

      <div class="welcome">
        wellcome&nbsp;
        <span>用户名称</span>
      </div>
      <div class="back">
        <el-button type="text" style="color:#019997" @click="backLog">登出</el-button>
      </div>
    </div>-->
    <div class="head">
      <div class="headLeft">
        <h3>
          库存管理系统
        </h3>
      </div>
      <div class="headRight">
        <!-- <i class="el-icon-user-solid"></i>：<span>王小明</span>
        <el-button type="text" style="color:#019997" @click="backLog">登出</el-button>-->
        <el-dropdown @command="backLog">
          <span class="el-dropdown-link">
            <i class="el-icon-user-solid"></i>
            王小明
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>登出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import API from "../util/api";
export default {
  props: [],
  components: {},
  data() {
    return {};
  },
  methods: {
    backLog() {
      this.$axios({
        url: API.BackLog
      }).then(res => {
        this.$router.push('/login')
        this.$message({
          message: res.Msg,
          type: "warning"
        });
      });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>
<style scoped>
.wrap{
  padding-left: 2px;
  padding-right: 5px;
}
.head {
  height: 50px;
  background-color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  
}
.head h3 {
  font-size: 20px;
}
.head h3 i {
  font-size: 20px;
}
.head .headRight {
  padding-right: 20px;
}
.headRight /deep/ .el-dropdown-link {
  cursor: pointer;
}
.head .headRight i {
  font-size: 15px;
}
.head .headRight span {
  margin-right: 10px;
}
</style>