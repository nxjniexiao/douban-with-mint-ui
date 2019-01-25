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
      fetchDataIfNeeded: 'fetchDataIfNeeded'
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
    this.fetchDataIfNeeded();
  }
};
</script>

<style scoped></style>
