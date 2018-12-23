<template>
  <div>
    <mt-header :title="selectedTabName"></mt-header>
    <router-view></router-view>
    <mt-tabbar v-model="selectedTabId">
      <mt-tab-item v-for="(tab, index) in tabs" :key="tab.tabId" :id="tab.tabId">
        <img slot="icon" :src="tabsImgSrc[index]">
        {{tab.tabName}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      selectedTabId: "movie",
      tabs: [
        {
          tabId: "movie",
          tabName: "电影",
          imgSrc: require("../assets/movies.png"),
          selectedImgSrc: require("../assets/movies-active.png")
        },
        {
          tabId: "music",
          tabName: "音乐",
          imgSrc: require("../assets/music.png"),
          selectedImgSrc: require("../assets/music-active.png")
        },
        {
          tabId: "book",
          tabName: "图书",
          imgSrc: require("../assets/books.png"),
          selectedImgSrc: require("../assets/books-active.png")
        }
      ]
    };
  },
  methods: {
    ...mapMutations({
      increment: "increment",
      decrement: "decrement"
    })
  },
  computed: {
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
      })
    },
    ...mapState({
      count: "count"
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
