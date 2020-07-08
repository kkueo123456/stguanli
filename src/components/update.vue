<template>
  <!-- 查看单个商品详情组件 -->

    <el-button type="text" @click="upDate(up)">编辑</el-button>

</template>
<script>
export default {
  props: ["up"],
  components: {},
  data() {
    return {};
  },
  methods: {
    //查看
    upDate(id) {
      this.$router.push("/buquan?id=" + id);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>
<style lang="stylus" scoped>

</style>