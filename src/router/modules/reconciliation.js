import Layout from "@/layout";
export default {
  path: "/reconciliation",
  component: Layout,
  children: [
    {
      path: "",
      component: () => import("@/views/reconciliation"),
      meta: { title: "对账统计", icon: "对账工单" },
    },
  ],
};
