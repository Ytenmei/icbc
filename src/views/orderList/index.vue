<template>
  <div class="orderList">
    <template>
      <van-nav-bar :border="false" fixed title="订单列表">
        <van-icon name="arrow-left" slot="left" color="red" />
      </van-nav-bar>
    </template>
    <van-sticky>
      <van-tabs @change="handleOrder" class="orderList-tabs" :border="false" v-model="active" :swipe-threshold="5">
        <van-tab name=0 title="全部"></van-tab>
        <van-tab name=1 title="待付款"></van-tab>
        <van-tab name=4 title="待发货"></van-tab>
        <van-tab name=5 title="待收货"></van-tab>
        <van-tab name=8 title="已完成"></van-tab>
      </van-tabs>
    </van-sticky>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <template>
        <div v-for="(item, index) in allOrder" :key="index" class="orderList-shop">
          <div>
            <span>福卡商城</span>
            <span>{{ item.ordersStatus.ordersStatusName}}</span>
          </div>
          <div>
            <van-card
              v-for="(pro, index) in item.orderProducts"
              :key="index"
              :price="pro.pSaleRealPrice"
              :title="pro.pProductName"
              :thumb="pro.pProductImgUrl"
            />
          </div>
          <div>
            <span
            v-if="item.ordersStatus.id === 1"
            >总金额</span>
            <span
            v-else-if="item.ordersStatus.id === 4
            ||item.ordersStatus.id === 5
            ||item.ordersStatus.id === 6
            ||item.ordersStatus.id === 8"
            >实付款</span>
            <span v-if="item.ordersStatus.id === 2">{{item.ordersStatus.ordersStatusName}}</span>
            <span v-else-if="item.ordersStatus.id !== 2
            || item.ordersStatus.id !== 10
            || item.ordersStatus.id !== 11
            || item.ordersStatus.id !== 12
            || item.ordersStatus.id !== 17">￥{{ item.realPayment }}</span>
          </div>
        </div>
      </template>
    </van-list>
  </div>
</template>

<script>
import { GetOrderByPage } from '@/api/detail.js'
export default {
  name: 'orderList',
  data () {
    return {
      active: 0,
      pageIndex: 1,
      allOrder: [],
      nameIndex: '',
      loading: false,
      finished: false
    }
  },
  created () {
    this.handleOrder()
  },
  methods: {
    async handleOrder (name) {
      this.pageIndex = 1
      const toast = this.$toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      const data = await GetOrderByPage({
        pageIndex: 1,
        pageSize: 10,
        userId: 'MEM525',
        status: this.active
      })
      toast.clear()
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      if (!data.length) {
        this.loading = false
        this.finished = true
        this.allOrder = []
        return
      }
      this.allOrder = data
      this.loading = false
      this.finished = false
    },
    async onLoad () {
      this.pageIndex += 1
      const data = await GetOrderByPage({
        pageIndex: this.pageIndex,
        pageSize: 10,
        userId: 'MEM525',
        status: this.active
      })
      if (data.length > 10 || !data.length) {
        this.loading = false
        this.finished = true
        this.allOrder.push(...data)
      }
      this.allOrder.push(...data)
      this.loading = false
    }
  }
}
</script>

<style lang="less" scoped>
.orderList {
  content:"";
  // position: absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  z-index:-100;
  background-color: #F5F5F5;
  height: 100%;
  .orderList-tabs {
    padding-top: 90px;
  }
  .van-icon-arrow-left {
    font-size: 45px;
  }
  .orderList-shop {
    width: 100%;
    height: 358px;
    margin-top: 20px;
    background-color: #fff;
    padding: 33px 39px 27px 40px;
    box-sizing: border-box;
    div:nth-child(1) {
      width: 100%;
      span:nth-child(1) {
        font-size: 30px;
        float: left;
        font-weight: 500;
      }
      span:nth-child(2) {
        font-size: 24px;
        color: #999999;
        float: right;
      }
    }
    div:nth-child(2) {
      .van-card {
        padding: 0;
        background-color: #fff;
        margin-top: 70px;
      }
      .van-card__content {
        position: relative;
        .van-card__title {
          width: 370px;
          height: 63px;
          padding-top: 50px;
        }
        .van-card__price {
          position: absolute;
          text-align: right;
          top: 40%;
          color: #222;
          font-size: 24px;
        }
      }
    }
    div:nth-child(3) {
      font-size: 28px;
      width: 100%;
      text-align: right;
      span:first-child {
        padding-right: 10px;
        box-sizing: border-box;
      }
      span:last-child {
        color: #E64558;
      }
    }
  }
}
</style>
