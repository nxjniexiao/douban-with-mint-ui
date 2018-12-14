import Vue from "vue";
import Vuex from "vuex";
// 引入 mutations
import mutations from "./mutations";
// 引入 actions
import actions from "./actions";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    movie: null,
    music: null,
    book: null,
    count: 0
  },
  mutations,
  actions
});
export default store;
