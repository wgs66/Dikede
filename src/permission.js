import router from "./router";

import store from "./store";

const whiteList = ["/login", "/404"];

router.beforeEach((to, from, next) => {
  const token = store.state.user.token;
  // console.log(token);
  if (token) {
    // 1.登录
    // 是否进入登录页
    if (to.path === "/login") {
      //   1.1 是 跳转到首页
      next("/");
    } else {
      // 1.2 不是   直接方行
      next();
    }
  } else {
    const isCludes = whiteList.includes(to.path);
    //2 未登录
    //   访问的路径是否在白名单内
    if (isCludes) {
      //   2.1 在白名单 放行
      next();
    } else {
      //   2.2 不在 跳转到login
      next("/login");
    }
  }
});
