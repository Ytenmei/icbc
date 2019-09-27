<template>
  <div class="finishPay">
    <van-nav-bar
      title="支付成功"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="donePay">
      <div class="showDonePay">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gou"></use>
        </svg>
        <div>您的订单已支付成功</div>
      </div>
      <div class="orderGoodData">
        <div>订单号：10937484753484758959</div>
        <div>实付金额：¥854.00</div>
        <div>支付时间：{{ nowTime | formTime }}</div>
      </div>
      <div class="buttonShop">
        <van-button @click="handleorderForm" class="orderForm " color="#E42F46" type="primary" round size="large">查看订单</van-button>
        <van-button @click="handleGoOnShop" class="handleGoOnShop" type="primary" color="#CCCCCC" round size="large">继续购物</van-button>
      </div>
    </div>
    <template>
      <div class="banner">
        <img src="//gw.alicdn.com/imgextra/i2/1337184/O1CN01khKiJm22wJteNIcZY_!!1337184-0-lubanu.jpg" alt="">
      </div>
    </template>
  </div>
</template>

<script>
import '@/assets/font/iconfont.css'
export default {
  name: 'finishPay',
  data () {
    return {
      nowTime: new Date()
    }
  },
  created () {
    this.handleddd()
  },
  methods: {
    onClickLeft () {
    },
    handleGoOnShop () {
    },
    handleorderForm () {
    },
    handleddd () {
    }
  }
}
</script>

<style lang="less" scoped>
.finishPay {
  content:" ";
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  z-index:-100;
  background-color: #F5F5F5;
}
.van-icon-arrow-left {
  color: #E42F46;
  font-size: 50px;
}
.donePay {
  width: 100%;
  height: 745px;
  background-color: #fff;
  margin-top: 21px;
  .orderGoodData {
    color: #666;
    font-size: 28px;
    text-align: center;
  }
  .orderGoodData div {
    padding-top: 32px;
  }
}
.icon {
  width: 98px;
  height: 98px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.showDonePay {
  padding-top: 42px;
  font-size: 30px;
  text-align: center;
  font-weight: 600;
}
.buttonShop {
  width: 90%;
  box-sizing: border-box;
  margin: 0 auto;
  .orderForm {
    margin-top: 70px;
  }
  .handleGoOnShop {
    margin-top: 26px;
  }
}
.banner {
  width: 90%;
  height: 193px;
  margin: 14px auto;
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
