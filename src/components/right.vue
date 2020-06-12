<template>
  <div>
    <v-head></v-head>
    <transition mode="out-in" :name="transitionName" >
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import vHead from "../components/head";
export default {
  props: [],
  components: {
    vHead
  },
  data() {
    return {
      transitionName: "fade"
    };
  },
  methods: {},
  mounted() {},
  watch: {
    // $route(to, from) {
    //   const toDepth = to.meta.length;
    //   const fromDepth = from.meta.length;
    //   if (toDepth < fromDepth) {
    //     this.transitionName = "fade";
    //   } else if (toDepth == fromDepth) {
    //     this.transitionName = "fade";
    //   } else {
    //     this.transitionName = "fade";
    //   }
    //   console.log(to.meta.length,from.meta.length);
    // }
  },
  computed: {}
};
</script>
<style  scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition:opacity 0.3s linear;
}
</style>