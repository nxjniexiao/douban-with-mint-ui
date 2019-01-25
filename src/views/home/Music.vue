<template>
  <div>
    <mt-navbar v-model="selectedKeyName">
      <mt-tab-item
        v-for="submenu in currSubmenus"
        :id="submenu.keyName"
        :key="submenu.keyName" @click.native="selectSubmenu(submenu)">{{submenu.title}}</mt-tab-item>
    </mt-navbar>
    Music
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex';
export default {
  name: 'Music',
  data() {
    return {
      selectedKeyName: ''
    };
  },
  methods: {
    ...mapActions({
      fetchDataIfNeeded: 'fetchDataIfNeeded'
    }),
    ...mapMutations({
      SELECT_SUBMENU: 'SELECT_SUBMENU'
    }),
    selectSubmenu(submenu) {
      this.SELECT_SUBMENU({submenu});
      this.fetchDataIfNeeded();
    }
  },
  computed: {
    ...mapState({
      currSubmenuObj: state => state.menuData.currSubmenuObj
    }),
    ...mapGetters({
      currSubmenus: 'currSubmenus',
      selectedSubmenuKeyName: 'selectedSubmenuKeyName'
    })
  },
  created() {
    this.fetchDataIfNeeded();
    this.selectedKeyName = this.selectedSubmenuKeyName;
  }
};
</script>

<style scoped></style>
