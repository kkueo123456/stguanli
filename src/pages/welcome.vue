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

.welcome {
  width: 550px;
  height: 200px;
  letter-spacing : 15px;
  position: absolute;
  top: -200px;
  left: 0;
  right: 0;
  bottom: 0;

  margin: auto;
 

}

.welcome span {
  font-size: 30px;
}

</style>