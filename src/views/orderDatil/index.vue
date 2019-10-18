<template>
  <div class="order-datail" v-show="orderProducts.length">
    <!-- narBar -->
    <van-nav-bar fixed title="订单详情">
      <van-icon name="arrow-left" slot="left" color="red" @click="$router.go(-1)" />
    </van-nav-bar>
    <div class="isPayImg">
      <img v-if="orderStatus.id === 1" :src="waitPay">
      <img v-else-if="orderStatus.id === 4 || orderStatus.id === 5 || orderStatus.id === 6 || orderStatus.id === 8" :src="overPay">
      <img v-else :src="fail">
      <span>{{orderStatus.ordersStatusName}}</span>
    </div>
    <van-button
      v-if="orderStatus.id===1"
      round
      @click="handleIcbcPay"
    >待支付</van-button>
    <!-- ress -->
    <div class="orderDatil-ress"
    v-for="item in orderRess"
    :key="item.aOrdersId">
      <div>
        <span>{{ item.aRealName }}</span>
        <span>{{ item.aMobilePhone.substring(3,0)}}****{{ item.aMobilePhone.substring(7)}} </span>
      </div>
      <div>{{ item.aAddress }}</div>
    </div>
    <!-- 商品 -->
    <div class="shop">福卡商城</div>
    <div class="orderDatil-goods" v-for="item in orderProducts" :key="item.pProductId">
      <van-card
        :num="item.pQuantity"
        :price="item.pSaleRealPrice"
        :desc="item.pCollection"
        :title="item.pProductName"
        :thumb="item.pProductImgUrl"
      />
    </div>
    <div class="orderDatil-data">
      <van-cell title="商品金额" :value="orderProducts.pSaleRealPrice" :border="false" />
      <van-cell title="运费" :value="postFreePrice" :border="false" />
      <van-cell title="订单总价" :value="totalPrice" />
      <van-cell title="实付款" :value="realPayment" size="large" />
    </div>
  </div>
</template>

<script>
import { GetOrderById } from '@/api/detail.js'
import waitPay from '@/assets/order/waitPay.png'
import overPay from '@/assets/order/overPay.png'
import fail from '@/assets/order/fail.png'
export default {
  name: 'orderDatil',
  data () {
    return {
      orderRess: '',
      orderProducts: '',
      postFreePrice: '',
      totalPrice: '',
      realPayment: '',
      orderStatus: '',
      waitPay,
      overPay,
      fail
    }
  },
  created () {
    this.GetOrderDatil()
  },
  methods: {
    async GetOrderDatil () {
      const orderId = this.$route.query.oId
      const {
        ordersAddresses,
        orderProducts,
        oPostFreePrice,
        oTotalAmount,
        realPayment,
        ordersStatus
      } = await GetOrderById(orderId)
      this.orderRess = ordersAddresses // 地址
      this.orderProducts = orderProducts // 商品
      this.postFreePrice = oPostFreePrice // 运费
      this.totalPrice = oTotalAmount // 总价
      this.realPayment = realPayment // 总金额
      this.orderStatus = ordersStatus // 订单状态
    },
    handleIcbcPay () {
    }
  }
}
</script>

<style lang="less" scoped>
.order-datail {
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
  font-size: 50px;
}
.isPayImg {
  margin-top: 92px;
  height: 300px;
  background-color: #E42F46;
  padding-left: 80px;
  padding-top: 80px;
  position: relative;
  box-sizing: border-box;
  img {
    width: 150px;
    height: 132px;
  }
  span {
    position: absolute;
    top: 45%;
    left: 33%;
    color: #fff;
    font-size: 36px;
  }
}
.orderDatil-ress {
  height: 148px;
  padding-left: 30px;
  padding-right: 30px;
  box-sizing: border-box;
  background-color: #fff;
  div:nth-child(1) {
    width: 100%;
    span {
      font-size: 30px;
      color: #000;
      font-weight: 800;
      overflow: hidden;
    }
    span:nth-child(2) {
      padding-left: 35px;
      box-sizing: border-box;
    }
  }
  div:nth-child(2) {
    width: 100%;
    font-size: 30px;
    box-sizing: border-box;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
}
.shop {
  width: 100%;
  height: 70px;
  background-color: #fff;
  padding-left: 30px;
  box-sizing: border-box;
  margin-top: 13px;
  font-size: 30px;
  font-weight: 600;
  border: 1px solid #f5f5f5;
  line-height: 70px;
}
/deep/.van-card {
  position: relative;
  padding: 35px;
  background-color: #fff;
}
/deep/ .van-card__desc {
  margin-top: 10px;
}
/deep/ .van-card__bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  .van-card__price {
    font-size: 24px;
  }
}
.orderDatil-data {
  margin-top: 25px;
  /deep/.van-cell__title {
    color: #969799;
  }
  /deep/.van-cell__value {
    color: #000;
  }
  /deep/.van-cell--large {
    .van-cell__title {
      color: #000;
    }
    .van-cell__value {
      color: red;
      font-size: 28px;
    }
  }
}
.van-button {
  position: absolute;
  right: 30px;
  height: 90px;
  width: 150px;
  top: 210px;
  background:#E42F46;
  color: #fff;
}
</style>
