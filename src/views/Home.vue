<template>
  <div>
    <!--header-->
    <mt-header :title="selectedTabName" fixed></mt-header>
    <mt-navbar class="nav-bar" v-model="selectedSubmenuKeyNameLocal">
      <mt-tab-item
        v-for="submenu in currSubmenus"
        :id="submenu.keyName"
        :key="submenu.keyName" @click.native="selectSubmenu(submenu)">{{submenu.title}}</mt-tab-item>
    </mt-navbar>
    <!--content-->
    <div class="content">
      <mt-loadmore :bottom-method="loadBottom" ref="loadmore" :auto-fill="false">
        <!--<router-view></router-view>-->
        <Grid></Grid>
      </mt-loadmore>
    </div>
    <!--footer-->
    <mt-tabbar v-model="selectedTabId" fixed>
      <mt-tab-item
        v-for="tab in tabs"
        :key="tab.tabId"
        :id="tab.tabId">
        <i :class="tab.iconName" class="icon"></i>
        <div>{{ tab.tabName }}</div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
import Grid from '@/components/grid/Grid';
export default {
  name: 'Home',
  components: {
    Grid
  },
  data() {
    return {
      selectedTabId: 'movie',
      selectedSubmenuKeyNameLocal: '',
      tabs: [
        {
          tabId: 'movie',
          tabName: '电影',
          iconName: 'icon-film'
        },
        {
          tabId: 'music',
          tabName: '音乐',
          iconName: 'icon-music'
        },
        {
          tabId: 'book',
          tabName: '图书',
          iconName: 'icon-book'
        }
      ]
    };
  },
  created() {
    const currUrl = this.$router.history.current.path;
    if (currUrl === '/home') {
      this.$router.push('/home/movie');
    }
    // 获取数据
    this.fetchDataIfNeeded();
    this.selectedSubmenuKeyNameLocal = this.selectedSubmenuKeyName;
  },
  methods: {
    ...mapActions({
      fetchDataIfNeeded: 'fetchDataIfNeeded'
    }),
    ...mapMutations({
      SELECT_MENU: 'SELECT_MENU',
      SELECT_SUBMENU: 'SELECT_SUBMENU'
    }),
    // 选择二级标题
    selectSubmenu(submenu) {
      this.SELECT_SUBMENU({submenu});
      this.fetchDataIfNeeded();
    },
    // 上拉加载更多
    loadBottom() {
      console.log('load bottom');
      this.$refs.loadmore.onBottomLoaded();
    }
  },
  computed: {
    ...mapGetters({
      currSubmenus: 'currSubmenus',
      selectedSubmenuKeyName: 'selectedSubmenuKeyName'
    }),
    selectedTabName() {
      const tabs = this.tabs;
      const selectedTabId = this.selectedTabId;
      for (let i = 0, len = tabs.length; i < len; i++) {
        const tab = tabs[i];
        if (tab.tabId === selectedTabId) {
          return tab.tabName;
        }
      }
    },
    tabsImgSrc() {
      const selectedTabId = this.selectedTabId;
      const tabs = this.tabs;
      return tabs.map(tab => {
        const tabId = tab.tabId;
        return selectedTabId !== tabId ? tab.imgSrc : tab.selectedImgSrc;
      });
    },
    ...mapState({
      count: 'count'
    })
  },
  // 监听
  watch: {
    selectedTabId: function(id) {
      this.$router.push(`/home/${id}`);
      this.SELECT_MENU({menuKeyName: id});
      this.fetchDataIfNeeded();
    },
    selectedSubmenuKeyName: function(keyName) {
      this.selectedSubmenuKeyNameLocal = keyName;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-bar {
    position: fixed;
    top: 40px;
    width: 100%;
  }
  .icon {
    display: block;
    font-size: 25px;
    margin-bottom: 5px;
    color: #8c8c8c;
  }
  .mint-tab-item.is-selected .icon {
    color: #26a2ff
  }
  .content {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 56px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch; /* 解决移动端滑动不流畅的问题 */
  }
</style>
