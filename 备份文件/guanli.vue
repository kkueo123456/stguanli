<template>
  <div>
    管理
    <el-input
      placeholder="请输入价格"
      v-model="dialogPri"
      clearable
      class="dialog-input"
      ref="input"
      @keydown.enter.native="submit"
    ></el-input>
    <!-- <div v-for="item in dialogxs" :key="item">{{item}}</div> -->
    <div v-for="(item,index) in dialogxs" :key="index">{{item}}
    </div>
  </div>
</template>
<script>
export default {
  props: [],
  components: {},
  data() {
    return {
      dialogPri: "",
      dialogxs: []
    };
  },
  methods: {
    submit() {
      this.dialogxs.push(this.dialogPri);
      this.dialogPri = "";
  
     
    }
  },
  mounted() {
    this.$refs.input.focus();
  },
  watch: {
    // dialogPri: function() {
    //   if (this.dialogPri.length == 13) {
    //     console.log("输入");
    //   }
    // }
    dialogxs: function() {

    }
  },
  computed: {}
};
</script>
<style  scoped>
</style>