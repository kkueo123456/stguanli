<template>
  <div>
    <div class="header">
      <div class="logo">
        <img src="../assets/img/indexlogo.png" alt />
      </div>
      <div class="welcome">
        wellcome&nbsp;
        <span>用户名称</span>
      </div>
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
.header {
  height: 120px;
  position: relative;
  padding-left: 30px;
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