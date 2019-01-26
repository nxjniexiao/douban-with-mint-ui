<template>
  <div class="card-container">
    <img :class="'img-'+type" :src="currDataByIds[id].image" alt="">
    <div class="title">
      {{currDataByIds[id].title}}
    </div>
    <div class="subtitle" v-if="currDataByIds[id].author">
      {{currDataByIds[id].author}}
    </div>
    <Stars class="stars" :rating="currDataByIds[id].rating"></Stars>
  </div>
</template>

<script type="text/ecmascript-6">
import Stars from '@/components/stars/Stars';
import {mapGetters} from 'vuex';

export default {
  name: 'Card',
  components: {
    Stars
  },
  props: {
    id: String,
    type: String
  },
  computed: {
    ...mapGetters({
      currDataByIds: 'currDataByIds'
    })
  }
};
</script>

<style scoped>
  .card-container {
    width: 100px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }
  .card-container img {
    width: 100%;
  }
  .card-container img.img-movie {
    height: 148px;
  }
  .card-container img.img-music {
    height: 100px;
  }
  .card-container img.img-book {
    height: 145px;
  }
  .card-container .title,
  .card-container .subtitle {
    font-size: 12px;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .card-container .subtitle {
    color: #8c8c8c;
  }
  .card-container .stars {
    margin-top: 10px;
  }
</style>
