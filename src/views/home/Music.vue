<template>
  <div>
    <mt-navbar v-model="selectedKeyName">
      <mt-tab-item
        v-for="submenu in currSubmenus"
        :id="submenu.keyName"
        :key="submenu.keyName" @click.native="selectSubmenu(submenu.keyName)">{{submenu.title}}</mt-tab-item>
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
      fetchData: 'fetchData'
    }),
    ...mapMutations({
      SELECT_SUBMENU: 'SELECT_SUBMENU'
    }),
    selectSubmenu(submenuKeyName) {
      this.SELECT_SUBMENU({submenuKeyName: submenuKeyName});
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
    this.fetchData();
    this.selectedKeyName = this.selectedSubmenuKeyName;
  }
};
</script>

<style scoped></style>
