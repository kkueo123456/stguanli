<template>
  <!-- 取消组件 -->
  <!-- <div class="wrap"> -->
  <button class="tuihui" @click="back">取消退回</button>
  <!-- </div> -->
</template>
<script>
export default {
  props: [],
  components: {},
  data() {
    return {};
  },
  methods: {
    back() {
      this.$confirm("此操作将不会保存填写的信息, 是否继续?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "error"
      })
        .then(() => {
          this.$router.go(-1);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>
<style lang="stylus" scoped>
.tuihui {
  background-color: #4b4b4b;
}
</style>