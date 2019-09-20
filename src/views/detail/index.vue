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
    <template>
      <van-swipe :autoplay="3000" indicator-color="#e43047">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </template>
    <!-- 商品信息 -->
    <div class="goodDetail">
      <div>【12期免息/送无线蓝牙二】华为Mate20全网通版双4G手机</div>
      <span>￥899.00</span>
    </div>
    <!-- 服务 -->
    <van-row class="serveData">
      <van-col span="4">服务</van-col>
      <van-col span="16">本商品由云饰图腾提供配送及服务</van-col>
    </van-row>
    <!-- 选择属性 -->
    <div class="serveData">
      <van-cell @click="handleShowSku(show)" title="选择属性" is-link />
    </div>
    <template>
      <div class="photoDetail">
        <img class="iconImg" src="@/assets/huojian.png" alt="">
      </div>
    </template>
    <!-- <template>
      <div class="buyMock">
        <div class="customHead list">
          <van-icon class="chat" name="chat" />
          <div class="custom" @click="handleShowPhone">客服</div>
        </div>
        <div class="shopHead list">
          <van-icon class="shop-o" name="shop-o" />
          <div class="shop" @click="$router.back()">店铺</div>
        </div>
        <button class="buy">立即购买</button>
      </div>
    </template> -->
    <!-- sku -->
    <template>
      <!--
        show：显示与否
        sku:商品数据
        goods：商品信息
        goodsId：商品ID
        hide-stock：库存
        buy-clicked：购买回调
       -->
      <!-- <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      @buy-clicked="onBuyClicked"> -->
    </template>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      active: 0,
      images: [
        '//img.alicdn.com/imgextra/i4/2838892713/O1CN01w7qMgj1Vub5MDv5kx_!!0-item_pic.jpg_2200x2200Q50s50.jpg_.webp',
        '//img.alicdn.com/imgextra/i3/2838892713/O1CN01N6h81B1Vub58pYZ16_!!0-item_pic.jpg_1152x1920Q50s50.jpg_.webp'
      ],
      show: false,
      price: '1.00', // 默认价格（单位元）
      stock_num: 227, // 总库存
      none_sku: false, // 是否无规格商品
      sku: {
        tree: [
          {
            k: '颜色', // skuKeyName：规格类目名称
            v: [
              {
                id: '30349', // skuValueId：规格值 id
                name: '红色', // skuValueName：规格值名称
                imgUrl: 'https://img.yzcdn.cn/1.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
              },
              {
                id: '1215',
                name: '蓝色',
                imgUrl: 'https://img.yzcdn.cn/2.jpg'
              }
            ],
            k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // sku 的组合列表
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ]
      },
      goods: {
        // 商品标题
        title: '测试商品',
        // 默认商品 sku 缩略图
        picture: 'https://img.yzcdn.cn/1.jpg'
      }
    }
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
      window.location.href = 'tel://15901508754'
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
.van-col--4,.van-col--16 {
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
}
.photoDetail {
  width: 100%;
  height: 64px;
  // margin-top: 200px;
}
</style>
