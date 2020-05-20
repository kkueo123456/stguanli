<template>
  <div class="body">
    <el-table :data="tabData" >
      <el-table-column fixed prop="name" label="姓名" :span="6"></el-table-column>
      <el-table-column prop="prop" label="电话" :span="6"></el-table-column>
      <el-table-column prop="address" label="地址" :span="6"></el-table-column>
      <el-table-column fixed="right" label="购买商品" :span="6">
        <template slot-scope="scope">
          <el-button type="primary" @click="look(scope.row.id)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import API from "../../util/api";
export default {
  props: [],
  components: {
  },
  data() {
    return {
      isAdd: true,
      tabData: [],
     
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
    init() {},
    look(id) {}
  },
  mounted() {
    // this.init()
  },
  watch: {},
  computed: {}
};
</script>
<style  scoped>

.body {
  background-color: white;
  height: 100%;
  padding: 20px;
}
</style>