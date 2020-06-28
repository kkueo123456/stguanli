<template>
<!-- 管理员角色管理页 -->
  <div class="body">
    <el-button type="primary" @click="addguanli" class="add">添加管理员</el-button>
    <v-addguanli :isAdd="isAdd" @init="init" :transJson="transJson" ref="add"></v-addguanli>
    <el-table :data="tabData" >
      <el-table-column fixed prop="name" label="账号" :span="6"></el-table-column>
      <el-table-column prop="prop" label="密码" :span="6"></el-table-column>
      <el-table-column label="日期" :span="6">
        <template slot-scope="scope">{{scope.row.time|timeFilter}}</template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200" :span="6">
        <template slot-scope="scope">
          <!-- <el-button type="primary" @click="look(scope.row.id)">查看</el-button> -->
          <el-button type="danger" @click="willdel(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import vAddguanli from "../components/addguanli";
import API from "../util/api";
export default {
  props: [],
  components: {
    vAddguanli
  },
  data() {
    return {
      isAdd: true,
      tabData: [],
      transJson: {
        isShow: false
      }
    };
  },
  methods: {
    // init() {
    //   this.$axios({
    //     url: API.AddUser,
    //     method: "post"
    //   }).then(res => {
    //     console.log(res);
    //   });
    // },
    init(){},
    addguanli() {
      this.transJson.isShow = true;
      this.isAdd = true;
      this.$refs.add.tianjia();
    },
    willdel(id) {
      this.$confirm("你确定要删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.del(id);
      });
    },
    del(id) {
      this.$axios({
        url: API.del,
        params: {
          id
        }
      }).then(res => {
        if (res.isok) {
          this.init();
          delete this.form._id;
        }
      });
    }
  },
  mounted() {
    // this.init()
  },
  watch: {},
  computed: {}
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';
.add {
  margin-bottom: 30px;
  background-color: $bg1;
  border-color: $bg1;

}
.body {
  background-color: white;
  height: 100%;
  padding: 20px;

}
</style>