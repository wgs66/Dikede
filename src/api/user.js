import request from "@/utils/request";

/**
 * 获取验证码
 * @param {Number | String} clientToken
 * @returns Promise
 */
export function imageCode(clientToken) {
  return request({
    url: `/api/user-service/user/imageCode/${clientToken}`,
    responseType: "blob",
  });
}

/**
 *  登录
 * @param {String} data
 * @returns Promise
 */

export function login(data) {
  return request({
    url: "/api/user-service/user/login",
    method: "POST",
    data,
  });
}

/**
 * 获取用户信息
 * @param {String} id
 * @returns Promise
 */

export function getUserInfoApi(id) {
  return request({
    url: "/api/user-service/user/" + id,
    method: "GET",
  });
}
