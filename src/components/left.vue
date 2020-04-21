<template>
  <div class="left">
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        text-color="#fff"
        active-text-color="#019997"
      >
        <el-menu-item index="1" class="guanli" style="padding-left:0px" v-if="list==0">
          <router-link to="/index/kufang" active-class="active">库&nbsp;&nbsp;&nbsp;&nbsp;房</router-link>
        </el-menu-item>
        <el-menu-item index="2" class="guanli" style="padding-left:0px">
          <router-link to="/index/caigou" active-class="active">采&nbsp;&nbsp;&nbsp;&nbsp;购</router-link>
        </el-menu-item>
        <el-menu-item index="3" class="guanli" style="padding-left:0px">
          <router-link to="/index/ruku" active-class="active">待&nbsp;入&nbsp;库</router-link>
        </el-menu-item>
        <el-menu-item index="4" class="guanli" style="padding-left:0px">
          <router-link to="/index/guanli" active-class="active">客户管理</router-link>
        </el-menu-item>
        <el-menu-item index="5" class="guanli" style="padding-left:0px">
          <router-link to="/index/tongji" active-class="active">数据统计</router-link>
        </el-menu-item>
      
      </el-menu>
    </el-col>
  </div>
</template>
<script>
export default {
  props: [],
  components: {},
  data() {
    return {
        list:0
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>
<style scoped>
.left {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 10px;
}
.left a {
  color: black;
  height: 70px;
  display: block;
  line-height: 70px;
  font-size: 16px;
}
.left .active {
  background-color: #d1ecec;
  color: #019997;
}
.left .guanli {
  padding: 0;
  height: 70px;
}

</style>