<template>
  <div class="zhuti">
    <!-- <el-button type="primary" @click="addguanli" class="add">添加管理员</el-button> -->

    <el-dialog title="添加管理员" :visible.sync="transJson.isShow">
      <el-form :model="form">
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="form.name" :disabled="!isAdd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input
            v-model="form.pass"
            :disabled="!isAdd"
            autocomplete="off"
            show-password
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" v-if="isAdd" :label-width="formLabelWidth">
          <el-input v-model="form.pass2" autocomplete="off" show-password clearable></el-input>
        </el-form-item>
        <el-form-item label="选择职位" v-if="isAdd" :label-width="formLabelWidth">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.Id"
              :label="item.RoleName"
              :value="item.Id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-date-picker v-model="form.time" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="transJson.isShow = false">取 消</el-button>
        <el-button type="primary" @click="sure" v-if="isAdd">确 定</el-button>
        <el-button type="primary" @click="gai" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import API from "../util/api";
export default {
  props: ["isAdd", "transJson"],
  components: {},
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        pass: "",
        pass2: "",
        prop: "",
        time: ""
      },
      formLabelWidth: "120px",
      isBdd: false,
      //下拉列表
      value: "",
      options: []
    };
  },
  methods: {
    //将数据清空
    empty() {
      this.form = {
        name: "",
        pass: "",
        tel: "",
        email: "",
        idx: "",
        dex: "",
        time: "",
        sex: ""
      };
      this.confirm = "";
    },
    sure() {
      if (this.form.pass != this.form.pass2) {
        this.$message({
          message: "两次密码不一致",
          type: "error"
        });
      }
      //在提交之前将时间对象转成时间戳
      // var params = this.form;
      // params.time = new Date(params.time).getTime();
      // this.$axios({
      //   url: API.addguanli,
      //   method: "get",
      //   params: params
      // }).then(res => {
      //   console.log(res);
      //   if (res.isok) {
      //     this.transJson.isShow = false;
      //     this.$message({
      //       message: "添加成功",
      //       type: "success"
      //     });
      //     this.$emit("init");
      //   } else {
      //     this.$message({
      //       message: res.info,
      //       type: "error"
      //     });
      //   }
      // });
      console.log(this.value)
    },
    //根据id查询用户
    findUser(id) {
      this.$axios({
        url: API.findguanli,
        params: {
          id: id
        }
      }).then(res => {
        if (res.isok) {
          this.form = res.data[0];
          this.form.time = new Date(parseInt(this.form.time));
          delete this.form._id;
          console.log(res);
        } else {
          alert("111");
        }
      });
    },
    tianjia() {
      this.empty();
    },
    gai(id) {
      var params = this.form;

      params.time = new Date(params.time).getTime();
      this.$axios({
        url: API.updateManage,
        params: this.form
      })
        .then(res => {
          if (res.isok) {
            this.transJson.isShow = false;
            this.$message({
              message: "更新成功",
              type: "success"
            });
            this.$emit("init");
          }
        })
        .catch(err => {
          alert("111");
        });
    },
    //请求职位列表
    Addinit() {
      this.$axios({
        url: API.AddUser,
        method: "post",
      }).then(res=>{
        this.options=res.Data
        console.log(this.options)

      });
    }
  },
  mounted() {
    this.Addinit()
  },
  watch: {},
  computed: {}
};
</script>
<style  scoped>
.zhuti h3 {
  font-size: 16px;
  font-weight: normal;
}
.el-input {
  width: 80%;
}
.el-dialog__wrapper /deep/ .el-dialog {
  width: 30%;
}
</style>