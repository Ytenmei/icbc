<template>
  <div class="goodList">
    <template>
      <van-nav-bar fixed title="福卡商城">
        <van-icon name="arrow-left" @click="handleBackICBC" slot="left" color="red" />
      </van-nav-bar>
    </template>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item  @click="handleSkip(item)" :key="index" v-for="(item, index) in swiper">
        <img class="swiper" v-lazy="item.sContent">
        </van-swipe-item>
      </van-swipe>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-card
          @click="$router.push({
            name: 'detail',
            params: {
              id: item.id
            }
            })"
          v-for="item in discount"
          :key="item.id"
          :price="item.salePrice"
          :title="item.nameFull"
          :thumb="item.pictureDefault"
        />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { GetSellerProductByPage } from '@/api/detail.js'
export default {
  name: 'goodList',
  data () {
    return {
      isLoading: false,
      loading: false,
      finished: false,
      pageIndex: 1,
      swiper: [],
      discount: []
    }
  },
  created () {
    this.handleGetDate()
  },
  methods: {
    async handleGetDate () {
      const [ { accountContent, productList } ] = await GetSellerProductByPage(this.pageIndex)
      console.log(accountContent)
      console.log(productList)
      this.swiper = accountContent
      this.discount = productList
      this.loading = false
    },
    handleBackICBC () {
    },
    handleSkip (url) {
      window.location.href = 'http://' + url.sUrl
    },
    async onLoad () {
      await this.$sleep(1000)
      this.pageIndex += 1
      const [{ productList }] = await GetSellerProductByPage(this.pageIndex)
      this.discount.push(...productList)
      this.loading = false
    },
    async onRefresh () {
      await this.$sleep(1000)
      this.pageIndex += 1
      const [{ productList }] = await GetSellerProductByPage(this.pageIndex)
      this.discount = [...productList]
      this.isLoading = false
    }
  }
}
</script>

<style lang="less" scoped>
.goodList {
  content:"";
  // position:absolute;
  // left:0;
  // right:0;
  // top:0;
  // bottom:0;
  z-index:-100;
  background-color: #F5F5F5;
  height: 100%;
  .van-icon-arrow-left {
    font-size: 50px;
  }
  .img {
    width: 100%;
    height: 100%;
  }
  .van-swipe {
    width: 100%;
    height: 244px;
    margin-top: 90px;
  }
  .van-card {
    width: 690px;
    height: 208px;
    margin: 19px auto;
    border-radius: 10px;
    padding-top: 30px;
    box-sizing: border-box;
  }
  /deep/.van-image__img {
    width: 146px;
    height: 148px;
    border-radius: 10px;
    margin-right: 25px;
  }
  .van-card__title {
    font-weight: 600;
    font-size: 30px;
  }
  .van-card__desc {
    padding-top: 35px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-size: 24px;
    color: #999;
  }
  .van-card__price {
    font-size: 30px;
    padding-top: 40px;
  }
}
</style>
