<template>
  <div>
    <div class="body2">
      <div class="con">
        <h3 class="tit">
          <span>盛唐库存管理系统</span>
        </h3>
        <div class="center">
          <el-input v-model="user.loginName" placeholder="请输入用户名" clearable class="elinput"></el-input>
        </div>
        <div class="center">
          <el-input v-model="user.password" placeholder="请输入密码" show-password clearable></el-input>
        </div>
        <div class="center">
          <div class="login">
            <img src="../assets/img/login.png" alt @click="login" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import API from "../util/api";
export default {
  props: [],
  components: {},
  data() {
    return {
      user: {
        loginName: "", //账号
        password: "" //密码
      },
      isAdmin: 0
    };
  },
  methods: {
    login() {
      this.$axios({
        url: API.login,
        method: "post",
        params: this.user
      })
        .then(res => {
          if (res.Status=="y") {
            this.isAdmin = res.Data[0].RoleId;
            localStorage.setItem("isAdmin", this.isAdmin);
            this.$router.push("/index");
            this.$message({
              message: res.Msg,
              type: "success"
            });
          } else {
            this.$message({
              message: res.Msg,
              type: "error"
            });
          }
        })
        .catch(err => {
          console.log(err.Msg);
        });
      // this.$router.push('/index')
      // localStorage.setItem("isAdmin", this.isAdmin);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>
<style scoped>
.body2 {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/img/loginbanner.png");
  background-repeat: no-repeat;
  background-size: 100%;
}
.tit {
  text-align: center;
  font-weight: normal;
  margin-bottom: 20px;
  padding-top: 20px;
}
.tit span {
  font-size: 45px;
  letter-spacing: 5px;
  color: #019997;
}
.con {
  width: 500px;
  height: 300px;
  border-radius: 20px;
  position: absolute;
  right: 200px;
  top: 250px;
  margin: auto;
}
.el-select,
.el-input {
  width: 50%;
  margin: 2px auto;
}
.center {
  text-align: center;
  margin-bottom: 15px;
}

.el-input--suffix /deep/ .el-input__inner {
  background-color: #eae8e8;
  border-radius: 18px;
}
.el-input--suffix /deep/ .el-input__inner::-webkit-input-placeholder {
  color: #b3afaf;
  text-align: center;
}
.el-button--primary {
  background-color: #019997;
  border-radius: 100%;
}
.center .login {
  width: 55px;
  height: 55px;
  margin: 0px auto;
}
.center .login img {
  width: 100%;
  height: 100%;
}
</style>