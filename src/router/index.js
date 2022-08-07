import Vue from "vue";
import Router from "vue-router";
import strategy from "./modules/strategy.js"; //策略管理
import order from "./modules/order"; //订单管理
import reconciliation from "./modules/reconciliation"; //对账管理
import workOrder from "./modules/workOrder"; //工单管理
import pointPosition from "./modules/pointPosition"; //点位管理
import equipment from "./modules/equipment"; // 设备管理
import personnel from "./modules/personnel"; //人员管理
import commodity from "./modules/commodity"; //商品管理

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
  workOrder, //工单管理
  pointPosition, //点位管理
  equipment, // 设备管理
  personnel, //人员管理
  commodity, //商品管理
  strategy, //策略管理
  order, //订单管理
  reconciliation, //对账管理
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
