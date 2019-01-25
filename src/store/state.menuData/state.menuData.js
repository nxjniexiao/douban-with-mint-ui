import {SELECT_MENU, SELECT_SUBMENU} from '@/store/mutation-types';

const mutations = {
  // 选择一级标题
  [SELECT_MENU](state, payload) {
    const {menuKeyName} = payload;
    state.currMenuKeyName = menuKeyName;
  },
  // 选择二级标题
  [SELECT_SUBMENU](state, payload) {
    const currMenuKeyName = state.currMenuKeyName;
    const {submenu} = payload;
    state.currSubmenuObj = {...state.currSubmenuObj, [currMenuKeyName]: submenu};
  }
};
export const menuData = {
  state: {
    currMenuKeyName: 'movie', // 'movie'
    currSubmenuObj: {
      movie: {title: '正在热映', keyName: 'in_theaters'},
      music: {title: '华语', keyName: 'china'},
      book: {title: '小说', keyName: 'novel'}
    },
    menus: [
      {
        title: '电影',
        keyName: 'movie',
        submenus: [
          {title: '正在热映', keyName: 'in_theaters'},
          {title: '即将上映', keyName: 'coming_soon'},
          {title: '高分电影', keyName: 'top250'}
        ]
      },
      {
        title: '音乐',
        keyName: 'music',
        submenus: [
          {title: '华语', keyName: 'china'},
          {title: '欧美', keyName: 'europeUS'},
          {title: '粤语', keyName: 'cantonese'},
          {title: '韩语', keyName: 'korean'},
          {title: '日语', keyName: 'japan'}
        ]
      },
      {
        title: '图书',
        keyName: 'book',
        submenus: [
          {title: '小说', keyName: 'novel'},
          {title: '文学', keyName: 'literature'},
          {title: '历史', keyName: 'history'},
          {title: '随笔', keyName: 'essay'},
          {title: '漫画', keyName: 'comic'}
        ]
      }
    ]
  },
  mutations
};
export default menuData;
