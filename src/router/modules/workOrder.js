import Layout from "@/layout";
export default {
  path: "/workOrder",
  component: Layout,
  redirect: "/workOrder/operate",
  name: "workOrder",
  meta: { title: "工单管理", icon: "Notepad-记事本-1" },
  children: [
    {
      path: "operate",
      name: "Operate",
      component: () => import("@/views/WORKOrder/operate/index"),
      meta: { title: "运营工单" },
    },
    {
      path: "dimension",
      name: "Dimension",
      component: () => import("@/views/WORKOrder/dimension/index"),
      meta: { title: "运维工单" },
    },
  ],
};
