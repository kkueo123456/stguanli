<template>
<div class="dingdan">
    <el-button type="primary" @click="dingdan">+填写采购订单+</el-button>
</div>
</template>
<script>
export default {
props:[],
components:{},
data(){
return {
}
},
methods:{
    dingdan(){
         this.$router.push("/dingdan");
    }
},
mounted(){},
watch:{
},
computed:{
}
}
</script>
<style scoped>
.dingdan /deep/ .el-button--primary {
  background-color: #019997;
  border-color: #019997;
}
</style>