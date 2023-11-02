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
    path: "/layout",
    name: "layout",  
    component:() => import("../components/Layout.vue"),
    children:[
      {
        path: "/layout/dashboard",
        name: "Dashboard",  
        component:() => import("../components/Dashboard.vue"),
      },
      {
        path: "/layout/categories",
        name: "About",  
        component:() => import("../components/Categories.vue"),
      },
      {
        path: "/layout/tag",
        name: "Tag",   
        component:() => import("../components/Tag.vue"),
      },
      {
        path: "/layout/users",
        name: "Users",   
        component:() => import("../components/Users.vue"),
      },
      {
        path: "/layout/blog",
        name: "Blog",  
        component:() => import("../components/Blog.vue"),
      },
      // {
      //   path: "/layout/footer",
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