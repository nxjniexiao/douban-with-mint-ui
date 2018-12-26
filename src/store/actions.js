import {
  getMoviesList,
  getMusicList,
  getBooksList,
  createUrlWithOpt
} from '@/js/douban-api';

const fetchDataFunctions = {
  movie: getMoviesList,
  music: getMusicList,
  book: getBooksList
};
const actions = {
  fetchData({ state, commit }, payload) {
    /**
     *
     * @className {string} 一级分类：'movie' 'music' 'book'
     * @subClassName {String} 二级分类
     */
    const { className, subClassName } = payload;
    const baseUrl = '/api/'; // 'https://api.douban.com/v2/'  proxy
    let url = baseUrl + className + '/' + subClassName;
    url = createUrlWithOpt(url, 0, 20);
    fetchDataFunctions[className](url).then(res => {
      commit({
        type: 'fetchData',
        payload: {
          className,
          subClassName,
          res
        }
      });
    });
  }
};
export default actions;
