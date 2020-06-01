import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/articles",
    name: "Articles",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "articles" */ "../views/articles.vue")
  },
  {
    path: "/archive",
    name: "Archive",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "archive" */ "../views/archive.vue")
  },
  {
    path: "/articleDetail",
    name: "ArticleDetail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "articleDetail" */ "../views/articleDetail.vue")
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: () =>
      import(/* webpackChunkName: "timeline" */ "../views/timeline.vue")
  },
  {
    path: "/project",
    name: "Project",
    component: () =>
      import(/* webpackChunkName: "project" */ "../views/project.vue")
  },
  {
    path: "/message",
    name: "Message",
    component: () =>
      import(/* webpackChunkName: "message" */ "../views/message.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
