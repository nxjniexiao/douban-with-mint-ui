<template>
  <div>Book</div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex';
export default {
  name: 'Book',
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      fetchData: 'fetchData'
    })
  },
  computed: {
    ...mapState({
      //
    }),
    ...mapGetters({
      currSubmenus: 'currSubmenus'
    })
  },
  created() {
    this.fetchData();
  }
};
</script>

<style scoped></style>
