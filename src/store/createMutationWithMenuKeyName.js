import {LOAD_DATA} from './mutation-types';

export default function createMutationWithMenuKeyName(menuKeyName) {
  return {
    [LOAD_DATA](state, payload) {
      const {
        currMenuKeyName,
        currSubmenuKeyName,
        res
      } = payload;
      if (menuKeyName !== currMenuKeyName) {
        return;
      }
      const resList = res.resultList;
      const total = res.total;
      let newIdsArr = [];
      let newByIds = {};
      for (let i = 0, len = resList.length; i < len; i++) {
        let item = resList[i];
        let id = item.id;
        newIdsArr.push(id);
        newByIds[id] = item;
      }
      state.byIds = {...state.byIds, ...newByIds};
      state.allIds = [...new Set(state.allIds.concat(newIdsArr))];
      state.byClasses = {...state.byClasses, [currSubmenuKeyName]: {total, currNum: 20, list: newIdsArr}};
    }
  };
}
