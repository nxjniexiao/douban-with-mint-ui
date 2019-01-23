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
  fetchData({state, commit}) {
    const currMenuKeyName = state.menuData.currMenuKeyName;
    const currSubmenuKeyName = state.menuData.currSubmenuObj[currMenuKeyName];
    // const baseUrl = '/api/'; // 'https://api.douban.com/v2/'  proxy
    // let url = baseUrl + currMenuKeyName + '/' + currSubmenuKeyName;
    let url = getUrl(currMenuKeyName, currSubmenuKeyName);
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
};
function getUrl(currMenuKeyName, currSubmenuKeyName) {
  const specialKeyNames = ['in_theaters', 'coming_soon', 'top250'];
  const baseUrl = '/api/'; // 'https://api.douban.com/v2/'  proxy
  let url = null;
  if (specialKeyNames.indexOf(currSubmenuKeyName) === -1) {
    url = baseUrl + currMenuKeyName + '/search?tag=' + currSubmenuKeyName;
  } else {
    url = baseUrl + currMenuKeyName + '/' + currSubmenuKeyName;
  }
  return url;
}
export default actions;
