import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/AppHome.vue"
import About from "./views/AppAbout.vue"
import VueHome from "./views/AppVueHome.vue"

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {path:"/", component: Home},
        {path:"/about", component: About},
        {path:"/vue/home", component: VueHome},
    ]
});

export default router;