<template>
  <div class="detail">
    <div class="narBar">
      <van-row>
        <van-col span="4">
          <van-icon color="#e43047" name="arrow-left" />
        </van-col>
        <van-col span="14" offset="1">
          <van-tabs tpe="card" v-model="active">
            <van-tab title="商品"></van-tab>
            <van-tab title="详情"></van-tab>
            <van-tab title="评价"></van-tab>
          </van-tabs>
        </van-col>
      </van-row>
    </div>
    <!-- 轮播图 -->
    <div v-show="!active">
      <template>
        <van-swipe :autoplay="3000" indicator-color="#e43047">
          <van-swipe-item v-for="(listPictures, index) in MobileProductByIdOpen.listPictures" :key="index">
            <img v-lazy="listPictures.picture" />
          </van-swipe-item>
        </van-swipe>
      </template>
      <!-- 商品信息 -->
      <div class="goodDetail">
        <div>{{MobileProductByIdOpen.nameFull}}</div>
        <span>￥899.00</span>
      </div>
      <!-- 服务 -->
      <van-row class="serveData">
        <van-col span="4">服务</van-col>
        <van-col span="20">本商品由{{MobileProductByIdOpen.accountMemberName}}提供配送及服务</van-col>
      </van-row>
      <!-- 选择属性 -->
      <div class="serveData">
        <van-cell @click="handleShowSku(show)" title="选择属性" is-link />
      </div>
      <template>
        <div class="buyMock">
          <div class="customHead list">
            <van-icon class="chat" name="chat" />
            <div class="custom" @click="handleShowPhone">客服</div>
          </div>
          <div class="shopHead list">
            <van-icon class="shop-o" name="shop-o" />
            <div class="shop" @click="$router.push({ name: 'goodList'})">店铺</div>
          </div>
          <button class="buy">立即购买</button>
        </div>
      </template>
    </div>
    <!-- sku -->
    <!-- 图文详情 -->
    <!-- <template>
      <div class="photoDetail">
        <img class="iconImg" src="@/assets/huojian.png" alt="">
        <span class="detailText">上拉查看商品详情</span>
      </div>
    </template> -->
  </div>
</template>

<script>
import {
  MobileProductByIdOpen,
  GetMoblieProductAttrs
} from '@/api/detail.js'
export default {
  name: 'detail',
  data () {
    return {
      phone: 15901508754,
      MobileProductByIdOpen: '',
      active: 0, // tabs
      show: false // isSku
    }
  },
  created () {
    this.handleMobileProductByIdOpen()
    this.handleGetMoblieProductAttrs()
  },
  methods: {
    // 购买
    onBuyClicked () {
    },
    handleShowSku (show) {
      this.show = !show
    },
    // 购买
    onSubmit () {},
    handleShowPhone () {
      window.location.href = 'tel://' + this.phone
    },
    async handleMobileProductByIdOpen () {
      const data = await MobileProductByIdOpen()
      this.MobileProductByIdOpen = data
      console.log(data)
    },
    async handleGetMoblieProductAttrs () {
      const data = await GetMoblieProductAttrs()
      console.log(data)
    }
  }
}
</script>

<style lang="less" scoped>
.detail {
  content:" ";
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  z-index:-100;
  background-color: #f0f0f2;
}
.narBar {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 88px;
  border-bottom: 2px solid #eee;
  background-color: #fff;
}
/deep/.van-icon-arrow-left {
  font-size: 50px;
  position: absolute;
  left: 25px;
  padding-top: 25px;
}
/deep/.van-swipe {
  width: 750px;
  height: 754px;
}
img {
  width: 100%;
  height: 100%;
}
.goodDetail {
  width: 100%;
  height: 220px;
  border-top: 1px solid #eee;
  background-color: #fff;
}
.goodDetail div:nth-child(1) {
  width: 662px;
  height: 81px;
  font-size: 30px;
  padding: 33px 50px 29px 38px;
  color: #000;
  font-family:PingFang SC;
  font-weight: 700;
}
.goodDetail span {
  position: absolute;
  display: inline-block;
  color: #E42F46;
  font-size: 40px;
  padding-left: 33px;
}
.van-col--4,.van-col--20 {
  font-size: 28px;
  color: #333;
}
.van-col--4 {
  color: #666;
  padding-left: 32px;
}
.van-row {
  height: 90px;
  line-height: 90px;
  background-color: #fff;
}
.serveData {
  margin-top: 19px;
}
.buyMock {
  width: 100%;
  height: 110px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  font-size: 22px;
  display: flex;
  text-align: center;
  border-top: 1px solid #eee;
}
.custom {
  flex: 1;
  padding-top: 70px;
  color: #979797;
}
.buy {
  width: 310px;
  height: 112px;
  font-size: 40px;
  background-color: #E42F46;
  text-align: center;
  line-height: 110px;
  color: #fff;
  border: none;
}
.chat {
  position: absolute;
  top: 23px;
  left: 92px;
  font-size: 44px;
  color: #979797;
}
.list {
  flex: 1;
}
.shop-o {
  top: 23px;
  font-size: 44px;
  color: #979797;
}
.shop {
  color: #979797;
  padding-top: 20px;
}
.iconImg {
  width: 32px;
  height: 32px;
  position: absolute;
  top: 23px;
  left: 240px;
}
.photoDetail {
  width: 100%;
  height: 64px;
  margin-bottom: 200px;
  text-align: center;
  position: relative;
}
.detailText {
  position: absolute;
  font-size: 22px;
  color: #999999;
  left: 275px;
  top: 23px;
}
</style>
