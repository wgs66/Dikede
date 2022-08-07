<template>
  <div>
    <el-table :data="taskInfoList" style="width: 100%" :border="false">
      <el-table-column
        type="index"
        :index="indexChange"
        label="序号"
        width="80"
      >
      </el-table-column>
      <el-table-column prop="taskCode" label="工单编号" width="200">
      </el-table-column>
      <el-table-column prop="innerCode" label="设备编号" width="200">
      </el-table-column>
      <el-table-column prop="taskType.typeName" label="工单类型" width="210">
      </el-table-column>
      <el-table-column
        prop="createType"
        label="工单方式"
        width="210"
        :formatter="repairDrder"
      >
      </el-table-column>
      <el-table-column
        prop="taskStatusTypeEntity.statusName"
        label="工单状态"
        width="210"
      >
      </el-table-column>
      <el-table-column prop="userName" label="运营人员" width="210">
      </el-table-column>
      <el-table-column
        :formatter="times"
        prop="updateTime"
        label="创建日期"
        width="210"
      >
      </el-table-column>
      <el-table-column label="操作" width="120">
        <template>
          <el-button type="text" size="small">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import * as moment from "moment";
export default {
  data() {
    return {};
  },
  created() {
    // console.log(this.totalCount);
  },
  props: {
    taskInfoList: {
      type: Array,
      required: true,
    },
    pageIndex: {
      type: Number,
      default: 1,
    },
  },
  created() {},

  methods: {
    repairDrder(row) {
      return row.createType === "1" ? "自动" : "手动";
    },
    times(row) {
      return moment(row.updateTime).format("YYYY.MM.DD hh:mm:ss");
    },
    indexChange(index) {
      // console.log(index, "index");
      return (this.pageIndex - 1) * 10 + index + 1;
    },
  },
};
</script>

<style scoped lang="less"></style>
