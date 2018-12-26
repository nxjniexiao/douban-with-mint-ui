import Vue from 'vue';
import Vuex from 'vuex';
// 引入 mutations
import mutations from './mutations';
// 引入 actions
import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    movie: {
      byIds: {},
      allIds: [],
      byClasses: {}
    },
    music: {
      byIds: {},
      allIds: [],
      byClasses: {}
    },
    book: {
      byIds: {},
      allIds: [],
      byClasses: {}
    },
    menuData: {
      currMenuKeyName: '', // 'movie'
      currSubmenuObj: '',
      menus: [
        {
          title: '电影',
          keyName: 'movie',
          submenus: [
            { title: '正在热映', keyName: 'in_theaters' },
            { title: '即将上映', keyName: 'coming_soon' },
            { title: '高分电影', keyName: 'top250' }
          ]
        },
        {
          title: '音乐',
          keyName: 'music',
          submenus: [
            { title: '华语', keyName: 'china' },
            { title: '欧美', keyName: 'europeUS' },
            { title: '粤语', keyName: 'cantonese' },
            { title: '韩语', keyName: 'korean' },
            { title: '日语', keyName: 'japan' }
          ]
        },
        {
          title: '图书',
          keyName: 'book',
          submenus: [
            { title: '小说', keyName: 'novel' },
            { title: '文学', keyName: 'literature' },
            { title: '历史', keyName: 'history' },
            { title: '随笔', keyName: 'essay' },
            { title: '漫画', keyName: 'comic' }
          ]
        }
      ]
    }
  },
  mutations,
  actions
});
export default store;
