import { createWebHistory, createRouter } from "vue-router";
// import Home from "";
import Auth from "../components/Middleware/Auth";
import middlewarePipeline from "../components/Middleware/middleware-pipeline";


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
    component: () => import("../components/webPage/BlogShow.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../components/webPage/BlogsFont.vue"),
  },
  {
    path: "/category",
    name: "category",
    component: () => import("../components/webPage/CategoryFont.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../components/webPage/ContactsShow.vue"),
  },
  {
    path: "/category/:id/blog",
    name: "CategoryShow",
    component: () => import("../components/CategoryShow.vue"),
  },
  {
    path: "/blogs/:id",
    name: "blogs",  
    component:() => import("../components/BlogWeb.vue"),
  },
  {
    path: "/blogssee/:id",
    name: "blogsee",  
    component:() => import("../components/BlogSee.vue"),
  },


 
  {
    path: "/admin",
    name: "admin", 
    meta: {
      middleware: [Auth],
    }, 
    redirect : '/admin/dashboard',
    component:() => import("../components/Admin.vue"),
    children:[
      {
        path: "/admin/dashboard",
        name: "Dashboard",  
        component:() => import("../components/Dashboard.vue"),
      },
      {
        path: "/admin/categories",
        name: "Categories",  
        component:() => import("../components/Categories.vue"),
      },
      {
        path: "/admin/tags",
        name: "Tags",   
        component:() => import("../components/Tag.vue"),
      },
      {
        path: "/admin/users",
        name: "Users",   
        component:() => import("../components/Users.vue"),
      },
      {
        path: "/admin/blogs",
        name: "Blogs",  
        component:() => import("../components/Blog.vue"),
      },
      {
        path: "/admin/contacts",
        name: "Contacts",   
        component:() => import("../components/ContactUs.vue"),
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
      {
        path: "/admin/blog/blogShow/:id",
        name: "blogShow",   
        component:() => import("../components/BlogSee.vue"),
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


router.beforeEach((to, from, next) => {
  /** Navigate to next if middleware is not applied */
  if (!to.meta.middleware) {
    return next();
  }
  const middleware = to.meta.middleware;
  const context = {
    to,
    from,
    next,
    //   store  | You can also pass store as an argument
  };
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});


export default router;