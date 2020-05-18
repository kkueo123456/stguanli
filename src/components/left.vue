<template>
  <div class="left">
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        text-color="#fff"
        active-text-color="#019997"
      >
        <el-submenu index="1" class="guanli" style="padding-left:0px" v-if="(isAdmin==1)">
          <template slot="title">
            <router-link to="/index/kufang" active-class="active"  >库&nbsp;&nbsp;&nbsp;&nbsp;房</router-link>
          </template>
          <el-menu-item-group class="caigouliebiao">
            <router-link to="/index/kufang/zaiku" active-class="active2" >>在库货品</router-link>
            <router-link to="/index/kufang/diaoboF" active-class="active2">>调拨查询</router-link>
            <router-link to="/index/kufang/xiaoshou" active-class="active2">>销售订单</router-link>
            <router-link to="/index/kufang/chukuF" active-class="active2">>出库查询</router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2" class="guanli" style="padding-left:0px" v-if="(isAdmin==1)||(isAdmin==3)">
          <template slot="title">
            <router-link to="/index/caigou" active-class="active" >采&nbsp;&nbsp;&nbsp;&nbsp;购</router-link>
          </template>
          <el-menu-item-group class="caigouliebiao">
            <router-link to="/index/caigou/allBuy" active-class="active2" >>全部订单</router-link>
            <router-link to="/index/caigou/information" active-class="active2" >>补全信息</router-link>
            <router-link to="/index/caigou/tuihui" active-class="active2" v-if="(isAdmin==1)||(isAdmin==3)">>退回</router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3" class="guanli" style="padding-left:0px" v-if="(isAdmin==1)">
          <template slot="title">
            <router-link to="/index/ruku" active-class="active" >待&nbsp;入&nbsp;库</router-link>
          </template>
          <el-menu-item-group class="caigouliebiao" >
            <router-link to="/index/ruku/buyEnter" active-class="active2" v-if="(isAdmin==3)||(isAdmin==1)" >>采购入库</router-link>
            <router-link to="/index/ruku/diaoEnter" active-class="active2">>调拨入库</router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4" class="guanli" style="padding-left:0px" v-if="(isAdmin==1)">
          <template slot="title">
            <router-link to="/index/sellMan" active-class="active" >销&nbsp;&nbsp;&nbsp;&nbsp;售</router-link>
          </template>
          <el-menu-item-group class="caigouliebiao" v-if="(isAdmin==1)">
            <router-link to="/index/sellMan/goods" active-class="active2" >>全部货品</router-link>
            <!-- <router-link to="/index/ruku/diaoEnter" active-class="active2">>调拨入库</router-link> -->
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="5" class="guanli" style="padding-left:0px">
          <router-link to="/index/guanli" active-class="active" v-if="(isAdmin==1)">客户管理</router-link>
        </el-menu-item>
        <el-menu-item index="6" class="guanli" style="padding-left:0px">
          <router-link to="/index/tongji" active-class="active" v-if="(isAdmin==1)">数据统计</router-link>
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
      list: 0,
      isAdmin: ""
    };
  },
  methods: {
   
  },
  mounted() {
    this.isAdmin = localStorage.getItem("isAdmin");
    console.log(this.isAdmin)
  },
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
  height: 100%;
}
.el-submenu .el-menu-item {
  color: #989898 !important;
}
.guanli /deep/ .el-submenu__title {
  height: 100% !important;
  padding-left: 0 !important;
  padding: 0;
}
.guanli .caigouliebiao .active2 {
  color: #019997;
}
.guanli .caigouliebiao a {
  color: #989898;
  font-size: 14px;
}
</style>