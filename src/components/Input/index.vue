<template>
  <el-input v-model="input" :placeholder="placeholder" class="inputs">
  </el-input>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  props: {
    placeholder: {
      type: String,
      default: "请输入",
    },
  },
  created() {},

  methods: {},
};
</script>

<style scoped lang="less">
/deep/.el-input__inner {
  height: 36px;
  line-height: 30px;
  padding-right: 30px;
}
.inputs {
  width: 206px;
}
</style>
