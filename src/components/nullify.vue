<template>
  <!-- 作废组件 -->
  <!-- <div class="wrap"> -->
  <el-button type="text" @click="del(nullId)" style="color:red" :disabled="nullzt">作废</el-button>
  <!-- </div> -->
</template>
<script>
export default {
  props: ["nullId", "nullzt"],
  components: {},
  data() {
    return {
    };
  },
  methods: {
    // 作废
    del(id) {
      this.$confirm("确定作废？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "warning",
            message: "作废成功!" + id
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消作废"
          });
        });
    }
  },
  mounted() {
  },
  watch: {},
  computed: {}
};
</script>
<style lang="stylus" scoped>
.wrap {
  display: inline-block;
}
</style>