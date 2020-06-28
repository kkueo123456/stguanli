<template>
<!-- 右侧头部组件 -->
  <div class="wrap">
    <div class="head">
      <div class="headLeft">
        <h3>
          库存管理系统
        </h3>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item) in $route.meta" :key="item.name" >{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="headRight">

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
        this.$router.push("/login");
        this.$message({
          message: res.Msg,
          type: "warning"
        });
      });
    }
  },
  mounted() {
    // let arr = this.$route.meta.map(item=>{
    //    return item
    // })
    console.log(this.$route)
  },
  watch: {},
  computed: {}
};
</script>
<style scoped>
.wrap {
  padding-left: 2px;
  padding-right: 5px;
}
.head {
  height: 52px;
  background-color: white;
  padding-top: 10px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
}
.head h3 {
  font-size: 20px;
}
.head h3 i {
  font-size: 20px;
}
.head .headLeft{
  padding-left: 10px;
}
.head .headRight {
  padding-right: 20px;
  line-height: 52px;
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