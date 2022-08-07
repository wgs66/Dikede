<template>
  <el-select
    v-model="select"
    slot="prepend"
    :placeholder="placeholder"
    class="selects"
  >
    <el-option label="餐厅名" value="1"></el-option>
    <el-option label="订单号" value="2"></el-option>
    <el-option label="用户电话" value="3"></el-option>
  </el-select>
</template>

<script>
export default {
  data() {
    return {
      select: "",
    };
  },
  props: {
    placeholder: {
      type: String,
      default: "请选择",
    },
  },
  created() {},

  methods: {},
};
</script>

<style scoped lang="less">
/deep/.el-input__inner {
  width: 206px;
  height: 36px;
  line-height: 30px;
  padding-right: 30px;
}
</style>
