import createMutationWithMenuKeyName from '@/store/createMutationWithMenuKeyName';

const mutations = createMutationWithMenuKeyName('movie');
const movie = {
  state: {
    byIds: {},
    allIds: [],
    byClasses: {}
  },
  mutations
};
export default movie;
