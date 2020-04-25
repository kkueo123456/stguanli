<template>
  <div class="fenye">
    <el-pagination
      background
      layout="prev, pager, next,jumper"
      :total="30"
      :page-size="1"
      class="pageButton"
      :current-page.sync="currentPage3"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  props: [],
  components: {},
  data() {
    return {
      currentPage3: 1
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.$emit("jumpPage", val);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>
<style scoped>
.fenye {
  text-align: center;
  margin-top: 100px;
}
</style>
