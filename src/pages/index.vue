<template>
  <div>
    <div class="index">
      <!-- <v-head></v-head> -->
      <div class="main">
        <v-left class="left"></v-left>
        <v-right class="right"></v-right>
      </div>
    </div>
  </div>
</template>
<script>
import vLeft from "../components/left";
import vRight from "../components/right";
import vHead from "../components/head";

export default {
  props: [],
  components: {
    vLeft,
    vRight,
    vHead
  },
  data() {
    return {};
  },
  methods: {
    
  },
  mounted() {
  },
  watch: {},
  computed: {}
};
</script>
<style  scoped>
.index {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  display: flex;
  background-color: #f0f4f4;
  
}
.left {
  width: 256px;
  background-color: white;
  position: fixed;
  min-height: 100vh;

}
.right {
  flex: 1;
  padding-left: 260px;

}


</style>