import {
  getMoviesList,
  getMusicList,
  getBooksList,
  createUrlWithOpt
} from '@/common/js/douban-api';
import {LOAD_DATA} from '@/store/mutation-types';

const fetchDataFunctions = {
  movie: getMoviesList,
  music: getMusicList,
  book: getBooksList
};
const actions = {
  fetchDataIfNeeded({state, commit}) {
    if (shouldFetchData(state)) {
      const currMenuKeyName = state.menuData.currMenuKeyName;
      const currSubmenu = state.menuData.currSubmenuObj[currMenuKeyName];
      const currSubmenuKeyName = currSubmenu.keyName;
      // const baseUrl = '/api/'; // 'https://api.douban.com/v2/'  proxy
      // let url = baseUrl + currMenuKeyName + '/' + currSubmenuKeyName;
      let url = getUrl(currMenuKeyName, currSubmenu);
      url = createUrlWithOpt(url, 0, 20);
      return fetchDataFunctions[currMenuKeyName](url).then(res => {
        commit({
          type: LOAD_DATA,
          currMenuKeyName,
          currSubmenuKeyName,
          res
        });
      });
    }
  }
};

function getUrl(currMenuKeyName, currSubmenu) {
  const currSubmenuKeyName = currSubmenu.keyName;
  const currSubmenuTitle = currSubmenu.title;
  const specialKeyNames = ['in_theaters', 'coming_soon', 'top250'];
  const baseUrl = '/api/'; // 'https://api.douban.com/v2/'  proxy
  let url = null;
  if (specialKeyNames.indexOf(currSubmenuKeyName) === -1) {
    url = baseUrl + currMenuKeyName + '/search?tag=' + currSubmenuTitle;
  } else {
    url = baseUrl + currMenuKeyName + '/' + currSubmenuKeyName;
  }
  return url;
}

// 根据当前一级、二级标题找到对应存储数据的对象
function getClassResult(state) {
  const currMenuKeyName = state.menuData.currMenuKeyName;
  const currSubmenuKeyName = state.menuData.currSubmenuObj[currMenuKeyName].keyName;
  return state[currMenuKeyName].byClasses[currSubmenuKeyName];
}

// 判断是否需要加载数据
function shouldFetchData(state) {
  const classResult = getClassResult(state);
  if (!classResult || !classResult.list) {
    return true;
  }
  return !classResult.list.length;
}

export default actions;
