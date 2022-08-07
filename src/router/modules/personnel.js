import Layout from "@/layout";
export default {
  path: "/personnel",
  component: Layout,
  redirect: "/personnel/list",
  name: "personnel",
  meta: { title: "人员管理", icon: "人员管理 (1)" },
  children: [
    {
      path: "list",
      name: "list",
      component: () => import("@/views/personnel/list/index"),
      meta: { title: "人员列表" },
    },
    {
      path: "statistics",
      name: "statistics",
      component: () => import("@/views/personnel/statistics/index"),
      meta: { title: "人员统计" },
    },
    {
      path: "workload",
      name: "workload",
      component: () => import("@/views/personnel/workload/index"),
      meta: { title: "工作量列表" },
    },
  ],
};
