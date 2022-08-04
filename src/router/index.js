import Vue from "vue";
import Router from "vue-router";
import approvals from "./modules/approvals"; //工单
import departments from "./modules/departments"; //点位
import employees from "./modules/employees"; //设备
import permission from "./modules/permission"; //人员
import attendances from "./modules/attendances"; //商品
import salarys from "./modules/salarys"; //策略
import setting from "./modules/setting"; //订单
import social from "./modules/social"; //对账

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "帝可得", icon: "home" },
      },
    ],
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const asyncRoutes = [
  approvals,
  departments,
  employees,
  permission,
  attendances,
  salarys,
  setting,
  social,
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: [...constantRoutes, ...asyncRoutes],
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
