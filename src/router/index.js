import { createWebHistory, createRouter } from "vue-router";
// import Home from "";


const routes = [
  {
    path: "/login",
    name: "Login",
    // redirect:'/login',
    component:() => import("../components/Login.vue"),
  },
  {
    path: "/",
    name: "WebShow",  
    component:() => import("../components/webPage/BlogShow.vue"),
  },
  
  {
    path: "/blogshow/:id",
    name: "blogShow",  
    component:() => import("../components/BlogWeb.vue"),
  },
  {
    path: "/admin",
    name: "admin",  
    component:() => import("../components/Admin.vue"),
    children:[
      {
        path: "/admin/dashboard",
        name: "Dashboard",  
        component:() => import("../components/Dashboard.vue"),
      },
      {
        path: "/admin/categories",
        name: "About",  
        component:() => import("../components/Categories.vue"),
      },
      {
        path: "/admin/tag",
        name: "Tag",   
        component:() => import("../components/Tag.vue"),
      },
      {
        path: "/admin/users",
        name: "Users",   
        component:() => import("../components/Users.vue"),
      },
      {
        path: "/admin/blog",
        name: "Blog",  
        component:() => import("../components/Blog.vue"),
      },
      {
        path: "/admin/blog/create",
        name: "createBlog",   
        component:() => import("../components/createBlog.vue"),
      },
      {
        path: "/admin/blog/edit/:id",
        name: "updateBlog",   
        component:() => import("../components/updateBlog.vue"),
      },
      // {
      //   path: "/admin/footer",
      //   name: "Footer",  
      //   component:() => import("../components/Footer.vue"),
      // },
    ]
  
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../components/Fallback.vue"),
  }
 

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;