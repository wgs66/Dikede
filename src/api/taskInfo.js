import request from "@/utils/request";

/**
 * 获取工单信息
 * @returns Promise
 */
export function taskInfo(data) {
  return request({
    url: "/api/task-service/task/search",
    params: data,
  });
}
