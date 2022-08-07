<template>
  <el-button :class="[category, btn]" :type="type" :icon="icon"
    ><slot>搜索</slot></el-button
  >
</template>

<script>
export default {
  data() {
    return {
      btn: "btn",
    };
  },
  props: {
    type: {
      type: String,
      default: "default",
    },
    icon: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
  },
  created() {},
  mounted() {},

  methods: {},
};
</script>

<style scoped lang="less">
.btn {
  // display: flex;
  // align-items: center;
  // justify-content: center;
  padding: 5px 4px;
  width: 80px;
  height: 36px;
}
// 搜索
.select {
  color: #fff;
  background: #5f84ff;
}
// 新建
.news {
  color: #fff;
  background: linear-gradient(135deg, #ff9743, #ff5e20);
}
// 工单配置
.configuration {
  background-color: #fbf4f0;
  color: #655b56;
}
</style>
