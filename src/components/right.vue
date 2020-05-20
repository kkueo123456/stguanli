<template>
<div>
    <v-head></v-head>
    <router-view></router-view>
</div>
</template>
<script>
import vHead from '../components/head'
export default {
props:[],
components:{
    vHead
},
data(){
return {
}
},
methods:{
},
mounted(){},
watch:{
},
computed:{
}
}
</script>
<style  scoped>
</style>