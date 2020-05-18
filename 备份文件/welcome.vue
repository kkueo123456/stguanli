<template>
  <div class="main">
    <div class="welcome">
      <span>欢迎来到后台管理系统</span>
    </div>
  </div>
</template>
<script>
export default {
  props: [],
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>
<style scoped>
.main {
  width: 100%;
  height: 100vh;
  background-color: white;
  position: relative;
}
.main h2 {
  font-size: 28px;
}
.welcome {
  width: 550px;
  height: 200px;
  letter-spacing : 15px;
  position: absolute;
  top: -200px;
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
  margin: auto;
  line-height: 200px;
  z-index: 2;
  background: linear-gradient(90deg, #019997, #f441a5, #ffeb3b, #019997);
  border-radius: 50%;
  background-size: 400%;
  text-align: center;
  animation: dong 8s linear infinite;

}
.welcome::after {
  content: "";
  position: absolute;
  top: -5px;
  bottom: -5px;
  left: -5px;
  right: -5px;
  z-index: -1;
  border-radius: 50%;
  background: linear-gradient(90deg, #019997, #f441a5, #ffeb3b, #019997);
  background-size: 400%;
  filter: blur(40px);
  animation: dong 8s linear infinite;

}
.welcome span {
  font-size: 30px;
}

@keyframes dong {
  100% {
    background-position: -400% 0;
  }
}
</style>