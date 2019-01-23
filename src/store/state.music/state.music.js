import createMutationWithMenuKeyName from '@/store/createMutationWithMenuKeyName';

const mutations = createMutationWithMenuKeyName('music');
const music = {
  state: {
    byIds: {},
    allIds: [],
    byClasses: {}
  },
  mutations
};
export default music;
