import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Movie from "@/components/Movie/Movie";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      name: "Home",
      component: Home,
      children: [
        {
          path: "movie",
          component: Movie
        }
      ]
    }
  ]
});
