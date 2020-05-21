<template>
  <div class="dingdan">
    <el-button type="primary" @click="dingdan">+填写采购订单+</el-button>
  </div>
</template>
<script>
export default {
  props: [],
  components: {},
  data() {
    return {};
  },
  methods: {
    dingdan() {
      this.$router.push("/dingdan");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';

.dingdan /deep/ .el-button--primary {
  background-color: $bg1;
  border-color: $bg1;
}
</style>