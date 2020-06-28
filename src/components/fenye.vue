<template>
<!-- 分页组件 -->
  <div class="fenye">
    <el-pagination
      background
      layout="prev, pager, next,jumper"
      :total="pageNum"
      :page-size="1"
      class="pageButton"
      :current-page.sync="currentPage3"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  props: ['pageNum'],
  components: {},
  data() {
    return {
      currentPage3: 1,
      pageNum2:'',
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.$emit("jumpPage", val);
    }
  },
  mounted() {
  },
  watch: {},
  computed: {}
};
</script>
<style scoped>
.fenye {
  text-align: center;
  padding-top: 100px;
}
</style>
