import createMutationWithMenuKeyName from '@/store/createMutationWithMenuKeyName';

const mutations = createMutationWithMenuKeyName('book');
export const book = {
  state: {
    byIds: {},
    allIds: [],
    byClasses: {}
  },
  mutations
};
export default book;
