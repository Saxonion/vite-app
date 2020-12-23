import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    meta: {
      icon: 'UserOutlined',
    },
    component: import("/@views/home.vue"),
  },
  {
    path: "/template",
    name: "Template",
    meta: {
      icon: 'MailOutlined',
    },
    component: import("/@views/template.vue"),
    children: [
      {
        path: "list",
        name: "list",
        component: import("/@views/template.vue"),
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
