<template>
  <div class="sou">
    <div class="rongqi">
      <el-input placeholder="请输入货品编号" v-model="search" clearable></el-input>
    </div>
    <div class="rongqi">
      <el-button type="primary" @click="sousuo">搜索</el-button>
    </div>
  </div>
</template>
<script>
export default {
  props: [],
  components: {},
  data() {
    return {
      search: ""
    };
  },
  methods: {
    sousuo() {
        this.$emit('search',this.search)
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';

.sou {
  display: flex;
  justify-content: space-between;
}

.sou .el-input--suffix /deep/ .el-input__inner {
  width: 275px;
  border-radius: 18px;
  border: 1px solid $bg1;
}

.sou .rongqi .el-button--primary {
  background-color: $bg1;
  border-color: $bg1;
  border-radius: 12px;
  margin-left 20px
}
</style>