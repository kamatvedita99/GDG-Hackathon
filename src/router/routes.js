//  { path: '/orderpage/:counter',name:'orderpage',  component: () => import('components/OrderPage.vue'),props:true },
const routes = [
  {
    path: "",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      { path: "/", component: () => import("components/Home.vue") },
      { path: "/login", component: () => import("components/Login.vue") },
      {
        path: "/orderpage/",
        component: () => import("components/OrderPage.vue")
      },
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/blog", component: () => import("pages/Blog/mainpage.vue") },
      {
        path: "/meetups",
        component: () => import("pages/meetups/meetups.vue")
      },
      { path: "/quiz", component: () => import("pages/quiz.vue") },
      { path: "/donate", component: () => import("pages/donate.vue") },
      {
        path: "/climate",
        component: () => import("components/Questions/climate.vue")
      },
      {
        path: "/water",
        component: () => import("components/Questions/water.vue")
      },
      {
        path: "/global",
        component: () => import("components/Questions/global_warming.vue")
      },
      {
        path: "/do",
        component: () => import("components/Questions/do_donts.vue")
      },

      //  { path: '/orderpage/:counter',name:'orderpage',  component: () => import('components/OrderPage.vue'),props:true },
      { path: "/starters", component: () => import("components/Starters.vue") },
      {
        path: "/maincourse",
        component: () => import("components/MainCourse.vue")
      },
      { path: "/checkout", component: () => import("components/CheckOut.vue") },
      { path: "/payment", component: () => import("components/Payment.vue") },
      { path: "/about", component: () => import("components/About.vue") }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
