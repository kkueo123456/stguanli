<template>
    <el-button type="text" @click="check(look)" >查看</el-button>
</template>
<script>
export default {
  props: ['look'],
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
<style lang="stylus" scoped></style>