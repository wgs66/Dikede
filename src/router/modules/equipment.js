import Layout from "@/layout";
export default {
  path: "/equipment",
  component: Layout,
  redirect: "/equipment/equipment",
  name: "equipment",
  meta: { title: "设备管理", icon: "充电桩" },
  children: [
    {
      path: "equipment",
      name: "equipment",
      component: () => import("@/views/equipment/equipment/index"),
      meta: { title: "设备管理" },
    },
    {
      path: "state",
      name: "state",
      component: () => import("@/views/equipment/state/index"),
      meta: { title: "设备状态" },
    },
    {
      path: "type",
      name: "type",
      component: () => import("@/views/equipment/type/index"),
      meta: { title: "设备类型管理" },
    },
  ],
};
