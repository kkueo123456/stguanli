<template>
  <!-- 查看单个商品详情组件 -->
  <div class="lookWrap">
    <el-button type="text" @click="check(look)" >查看</el-button>
  </div>
</template>
<script>
export default {
  props: ["look"],
  components: {},
  data() {
    return {};
  },
  methods: {
    //查看
    check(id) {
      this.$router.push("/detail?id=" + id);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>
<style lang="stylus" scoped>
.lookWrap {
  display: inline-block;
  margin-right: 10px;
}
</style>