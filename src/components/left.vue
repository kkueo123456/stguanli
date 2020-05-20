<template>
  <div class="left">
    <el-scrollbar>
    <h3>ShengTang</h3>
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        text-color="white"
        active-text-color="rgb(16,17,23)"
        background-color="rgb(25,26,35)"
      >
       <el-submenu index="1" class="guanli" style="padding-left:0px" v-if="(isAdmin==1)||(isAdmin==2)">
          <template slot="title">
            <router-link to="/index/caigou" active-class="active" >采购管理</router-link>
          </template>
          <el-menu-item-group class="caigouliebiao">
            <router-link to="/index/caigou/allBuy" active-class="active2" >>全部订单</router-link>
            <router-link to="/index/caigou/information" active-class="active2" >>补全信息</router-link>
            <router-link to="/index/caigou/tuihui" active-class="active2" v-if="(isAdmin==1)||(isAdmin==3)">>退回</router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2" class="guanli" style="padding-left:0px" v-if="(isAdmin==1)">
          <template slot="title">
            <router-link to="/index/kufang" active-class="active"  >仓存管理</router-link>
          </template>
          <el-menu-item-group class="caigouliebiao">
            <router-link to="/index/kufang/zaiku" active-class="active2" >>在库货品</router-link>
            <router-link to="/index/kufang/diaoboF" active-class="active2">>调拨查询</router-link>
            <router-link to="/index/kufang/xiaoshou" active-class="active2">>销售订单</router-link>
            <router-link to="/index/kufang/chukuF" active-class="active2">>出库查询</router-link>
          </el-menu-item-group>
        </el-submenu>
       
        <el-submenu index="3" class="guanli" style="padding-left:0px" v-if="(isAdmin==1)">
          <template slot="title">
            <router-link to="/index/ruku" active-class="active" >入库管理</router-link>
          </template>
          <el-menu-item-group class="caigouliebiao" >
            <router-link to="/index/ruku/buyEnter" active-class="active2" v-if="(isAdmin==3)||(isAdmin==1)" >>采购入库</router-link>
            <router-link to="/index/ruku/diaoEnter" active-class="active2">>调拨入库</router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4" class="guanli" style="padding-left:0px" v-if="(isAdmin==1)">
          <template slot="title">
            <router-link to="/index/sellMan" active-class="active" >销售管理</router-link>
          </template>
          <el-menu-item-group class="caigouliebiao" v-if="(isAdmin==1)">
            <router-link to="/index/sellMan/goods" active-class="active2" >>全部货品</router-link>
            <router-link to="/index/sellMan/findSell" active-class="active2" >>销售查询</router-link>
            <!-- <router-link to="/index/ruku/diaoEnter" active-class="active2">>调拨入库</router-link> -->
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="5" class="guanli" style="padding-left:0px">
          <router-link to="/index/guanli" active-class="active" v-if="(isAdmin==1)">角色管理</router-link>
        </el-menu-item>
         <el-menu-item index="6" class="guanli" style="padding-left:0px">
          <router-link to="/index/customer" active-class="active" v-if="(isAdmin==1)">顾客管理</router-link>
        </el-menu-item>
        <el-menu-item index="7" class="guanli" style="padding-left:0px">
          <router-link to="/index/tongji" active-class="active" v-if="(isAdmin==1)">数据统计</router-link>
        </el-menu-item>
        
      </el-menu>
    </el-col>
    </el-scrollbar>
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
  height: 100%;
  flex-direction: column;
  text-align: center;
  background-color: rgb(25,26,35);
  box-shadow: 2px 0 6px rgba(0,21,41,.35);
  overflow: hidden;
}
/* left的横向滚动条 */
.left /deep/ .el-scrollbar__wrap {
   overflow-x: hidden;
}
.left h3{
  color: white;
  padding-top: 20px;
  font-size: 25px;
  padding-bottom: 20px;
}
.left /deep/ .el-menu{
  border-right: none;
}
.left a {
  color: rgb(186,187,189);
  height: 60px;
  display: block;
  line-height: 60px;
  font-size: 16px;
  text-align: left;
  padding-left: 35px;
}
.left .active {
  background-color: rgb(16,17,23);
  color: white;
}
/* .left /deep/ .el-submenu__title:hover{
  background-color: rgba(0,0,0,0.5);
} */
.left .guanli {
  padding: 0;
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
  color: white;
}
.guanli .caigouliebiao a {
  color: #989898;
  font-size: 14px;
}
</style>