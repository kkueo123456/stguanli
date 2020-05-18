<template>
  <div>
    <el-button type="primary" @click="Warehouse">+批量入库+</el-button>
    <el-dialog title="请选择仓位" :visible.sync="isShow.show" width="30%" :modal-append-to-body="false">
      <el-select v-model="AllCangvalue" placeholder="请选择">
        <el-option
          v-for="item in Cangoption"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isShow.show = false">取 消</el-button>
        <el-button type="primary" @click="dialogSure">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: [],
  components: {},
  data() {
    return {
      /*下拉选择仓位*/

      Cangoption: [
        {
          value: "0",
          label: "唐山丰润仓"
        },
        {
          value: "1",
          label: "唐山开平仓"
        },
        {
          value: "2",
          label: "唐山路北仓"
        }
      ],
      AllCangvalue: "0",
      isShow: {
        show: false
      }
    };
  },
  methods: {
    Warehouse() {
      this.isShow.show = true;
    },
    dialogSure() {
      this.isShow.show = false;
      this.$emit("xuanCang", this.AllCangvalue);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>
<style scoped>
.el-button--primary {
  background-color: #019997;
  border-color: #019997;
}
</style>