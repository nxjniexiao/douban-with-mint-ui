<template>
  <div class="stars-container">
    <div class="stars">
      <i v-for="(star, index) in starsArray" :key="index" :class="'icon-star-'+star"></i>
    </div>
    <span v-if="rating" class="score">{{rating | oneDecimal}}</span>
    <span v-else class="tips">暂无评分</span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'stars',
  props: {
    rating: Number
  },
  data() {
    return {
      //
    };
  },
  computed: {
    starsArray() {
      let rating = this.rating;
      const res = ['empty', 'empty', 'empty', 'empty', 'empty'];
      if (rating) {
        rating = rating / 2;
        let fullStars = Math.floor(rating);// 满星
        let hasHalfStar = false;// 半星
        // 0.5 就近原则
        if ((rating - fullStars) >= 0.75) {
          fullStars++;
        } else if ((rating - fullStars) >= 0.25) {
          hasHalfStar = true;
        }
        for (let i = 0; i < 5; i++) {
          if (i < fullStars) {
            res[i] = 'full';
          } else {
            res[i] = 'empty';
          }
        }
        if (hasHalfStar) {
          res[fullStars] = 'half';
        }
      }
      return res;
    }
  },
  filters: {
    oneDecimal(value) {
      if (!value) {
        return '';
      }
      return Number(value).toFixed(1);
    }
  }
};
</script>

<style scoped>
  .stars-container {
    display: flex;
    flex-direction: row;
  }
  .stars-container .stars {
    display: flex;/* 控制 .stars 的高度，或者 font-size: 0; */
    flex-direction: row;
  }
  .stars-container .stars i {
    font-size: 10px;
    color: #feab2d
  }
  .stars-container .score,
  .stars-container .tips {
    font-size: 10px;
    line-height: 10px;
    margin-left: 5px;
  }
</style>
