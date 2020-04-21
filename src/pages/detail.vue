<template>
<div>
    详情{{id}}
</div>
</template>
<script>
export default {
props:[],
components:{},
data(){
return {
    id:'',
}
},
methods:{
},
mounted(){
    this.id = this.$route.query.id;
},
watch:{
},
computed:{
}
}
</script>
<style  scoped>
</style>