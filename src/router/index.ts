import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: import("/@views/home.vue"),
  },
  {
    path: "/template",
    name: "Template",
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
