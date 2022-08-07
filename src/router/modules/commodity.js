import Layout from "@/layout";
export default {
  path: "/commodity",
  component: Layout,
  redirect: "/commodity/type",
  name: "commodity",
  meta: { title: "商品管理", icon: "拼团" },
  children: [
    {
      path: "type",
      name: "type",
      component: () => import("@/views/commodity/type/index"),
      meta: { title: "商品类型" },
    },
    {
      path: "administration",
      name: "administration",
      component: () => import("@/views/commodity/administration/index"),
      meta: { title: "商品管理" },
    },
  ],
};
