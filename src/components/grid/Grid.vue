<template>
  <div class="grid-container">
    <Card v-for="id in currDataByClasses.list" :key="id" :id="id" :type="$route.params.type"></Card>
  </div>
</template>

<script type="text/ecmascript-6">
import Card from '@/components/card/Card';
import {mapGetters} from 'vuex';

export default {
  name: 'Grid',
  components: {
    Card
  },
  computed: {
    ...mapGetters({
      currDataByClasses: 'currDataByClasses'
    })
  }
};
</script>

<style scoped>
  .grid-container {
    width: 100%;
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #f5f5f5;
  }
</style>
