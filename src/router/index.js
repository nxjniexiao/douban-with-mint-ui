import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home/:type',
      name: 'Home',
      component: Home
      // children: [
      //   {
      //     path: 'movie',
      //     component: Movie
      //   },
      //   {
      //     path: 'music',
      //     component: Music
      //   },
      //   {
      //     path: 'book',
      //     component: Book
      //   }
      // ]
    }
  ]
});
