<template>
  <!-- 调拨详情组件 -->
  <div class="lookWrap">
    <el-button type="text" @click="dbcheck(look,onlyLook)">查看</el-button>
  </div>
</template>
<script>
export default {
  props: ["look", "onlyLook"],
  components: {},
  data() {
    return {};
  },
  methods: {
    //查看
    dbcheck(id, only) {
      if (only) {
        this.$router.push("/dbDetail?id=" + id);
      } else {
        this.$router.push("/rkDetail?id=" + id);
      }
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