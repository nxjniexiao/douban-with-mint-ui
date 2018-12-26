import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Movie from '@/views/home/Movie';
import Music from '@/views/home/Music';
import Book from '@/views/home/Book';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'movie',
          component: Movie
        },
        {
          path: 'music',
          component: Music
        },
        {
          path: 'book',
          component: Book
        }
      ]
    }
  ]
});
