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
    path: "/chart",
    name: "Chart",
    meta: {
      icon: 'MailOutlined',
    },
    component: import("/@views/map.vue"),
    children: [
      {
        path: "map",
        name: "map",
        component: import("/@views/map.vue"),
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
