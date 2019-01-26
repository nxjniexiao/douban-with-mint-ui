import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import movie from '@/store/state.movie/state.movie';
import music from '@/store/state.music/state.music';
import book from '@/store/state.book/state.book';
import menuData from '@/store/state.menuData/state.menuData';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    movie,
    music,
    book,
    menuData
  },
  actions,
  // 从 store 中的 state 中派生出一些状态
  getters: {
    // 与当前一级标题对应的所有二级标题
    currSubmenus: state => {
      const currMenuKeyName = state.menuData.currMenuKeyName;
      const menus = state.menuData.menus;
      for (let i = 0, len = menus.length; i < len; i++) {
        const menu = menus[i];
        if (menu.keyName === currMenuKeyName) {
          return menu.submenus;
        }
      }
    },
    // 当前一级标题的当前二级标题
    selectedSubmenuKeyName: state => {
      const currMenuKeyName = state.menuData.currMenuKeyName;
      const currSubmenuObj = state.menuData.currSubmenuObj;
      return currSubmenuObj[currMenuKeyName].keyName;
    },
    // 根据当前一级、二级标题筛选出要显示的数据
    currDataByClasses: (state, getters) => {
      const currMenuKeyName = state.menuData.currMenuKeyName;
      const currSubmenuKeyName = getters.selectedSubmenuKeyName;
      return state[currMenuKeyName].byClasses[currSubmenuKeyName] || [];// 防止初始化时返回 undefined
    },
    // 根据当前一级、二级标题筛选出要显示的分类数据
    currDataByIds: state => {
      const currMenuKeyName = state.menuData.currMenuKeyName;
      return state[currMenuKeyName].byIds;
    }
  }
});

export default store;
