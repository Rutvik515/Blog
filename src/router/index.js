import { createWebHistory, createRouter } from "vue-router";
// import Home from "";


const routes = [
  {
    path: "/",
    name: "Login",
    component:() => import("../components/Login.vue"),
  },
  {
    path: "/layout",
    name: "layout",  
    component:() => import("../components/Layout.vue"),
    children:[
      {
        path: "/layout/home",
        name: "Home",  
        component:() => import("../components/Home.vue"),
      },
      {
        path: "/layout/about",
        name: "About",  
        component:() => import("../components/About.vue"),
      },
      {
        path: "/layout/project",
        name: "Project",   
        component:() => import("../components/Project.vue"),
      },
      {
        path: "/layout/service",
        name: "Service",   
        component:() => import("../components/Service.vue"),
      },
      {
        path: "/layout/contact",
        name: "Contact",  
        component:() => import("../components/Contact.vue"),
      },
    ]
  
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;