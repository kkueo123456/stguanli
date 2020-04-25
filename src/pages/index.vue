<template>
  <div>
    <div class="index">
      <div class="header">
        <div class="logo">
          <img src="../assets/img/indexlogo.png" alt />
        </div>
        <div class="welcome">
          wellcome&nbsp;
          <span>用户名称</span>
        </div>
      </div>
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

export default {
  props: [],
  components: {
    vLeft,
    vRight
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
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  height: 120px;
  position: relative;
  padding-left: 30px;
  padding-right: 30px;
}
.main {
  flex: 1;
  display: flex;
  background-color: #f0f4f4;
}
.left {
  width: 260px;
  background-color: white;
  margin-top: 15px;
}
.right {
  flex: 1;
  margin-top: 15px;
  padding-left: 22px;
  padding-right: 30px;
}

.logo {
  width: 220px;
  height: 50px;
  position: absolute;
  bottom: 20px;
}
.logo img {
  width: 100%;
  height: 100%;
}
.welcome {
  position: absolute;
  font-size: 15px;
  right: 20px;
  bottom: 20px;
}
</style>