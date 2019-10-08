<template>
  <div class="detail">
    <div class="narBar">
      <van-row>
        <van-col span="4">
          <van-icon color="#e43047" name="arrow-left" @click="$router.back()" />
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
        <span>￥{{MobileProductByIdOpen.salePrice}}</span>
      </div>
      <!-- 服务 -->
      <van-row class="serveData">
        <van-col span="4">服务</van-col>
        <van-col span="20">本商品由{{MobileProductByIdOpen.accountMemberName}}提供配送及服务</van-col>
      </van-row>
      <!-- 选择属性 -->
      <div class="serveData isSku">
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
          <button @click="$router.push({
            name: 'orderSure',
            query: {
            }
          })" class="buy">立即购买</button>
        </div>
      </template>
    </div>
    <!-- sku -->
    <!-- <van-popup
      v-model="show"
      round
      position="bottom"
      :style="{ height: '50%' }"
    >
      <template>
        <div>
          <van-card
            class="productCard"
            price="2.00"
            desc="已选：200,白色"
            title="剩余227件"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          />
          <van-divider class="isSkuDownDivider" />
          <div class="productConten">
            <div class="product-delcom" >
              <p>颜色</p>
              <ul class="product-footerlist">
                <li
                :key="index"
                @click="handleSeleted(index)"
                v-for="(color, index) in color"
                class="productActive">{{color}}</li>
              </ul>
              <van-divider />
            </div>
            <div class="product-delcom" >
              <p>尺寸</p>
              <ul class="product-footerlist">
                <li
                :key="index"
                v-for="(size, index) in size"
                class="productActive">{{size}}</li>
              </ul>
              <van-divider />
            </div>
          </div>
        </div>
      </template>
    </van-popup> -->
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :hide-stock="sku.hide_stock"
      @buy-clicked="onBuyClicked"
      :show-add-cart-btn=false
      close-on-click-overlay
    />
  </div>
</template>

<script>
import {
  MobileProductByIdOpen,
  ProductDescProductId,
  GetMoblieProductAttrs
} from '@/api/detail.js'
export default {
  name: 'detail',
  data () {
    return {
      GetAttrs: {
        '颜色': {
          '酒红色': '614',
          '蓝色': '618',
          '白色': '600',
          '军绿色': '616',
          '褐色': '607',
          '紫色': '635',
          '银色': '633',
          '巧克力色': '625'
        },
        '尺码': {
          '36': '3181',
          '37': '3183',
          '38': '3185',
          '39': '3187',
          '40': '3190',
          '41': '3192',
          '42': '3194',
          '43': '3196',
          '44': '3198'
        }
      },
      id: this.$route.params.id,
      phone: 15901508754,
      MobileProductByIdOpen: '',
      active: 0, // tabs
      show: true // isSku
    }
  },
  computed: {
    sku () {
      return {
        tree: [
          Object.keys(this.GetAttrs).forEach(attrs => {
            return {
              k: attrs, // skuKeyName：规格类目名称
              v: Object.keys(this.GetAttrs[attrs]).forEach(key => {
                return {
                  name: key,
                  id: this.GetAttrs[attrs][key],
                  previewImgUrl: 'https://img.yzcdn.cn/1p.jpg'
                }
              }),
              k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            }
          })
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '0', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: '1.00', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        // collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        // none_sku: false, // 是否无规格商品
        hide_stock: false // 是否隐藏剩余库存
      }
    },
    goods () {
      return {
        // 商品标题
        title: '测试商品',
        // 默认商品 sku 缩略图
        picture: 'https://img.yzcdn.cn/1.jpg'
      }
    }
  },
  created () {
    this.handleShowProduct()
    this.handleShowProductDesc()
    this.handleShowProductAttrs()
  },
  methods: {
    // 购买
    onBuyClicked (skuData) {

    },
    handleShowSku (show) {
      this.show = !show
    },
    handleShowPhone () {
      window.location.href = 'tel://' + this.phone
    },
    async handleShowProduct () {
      const data = await MobileProductByIdOpen(this.id)
      this.MobileProductByIdOpen = data
    },
    async handleShowProductDesc () {
      const data = await ProductDescProductId(this.id)
      console.log(data)
    },
    async handleShowProductAttrs () {
      const data = await GetMoblieProductAttrs(this.id)
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
.isSku {
  margin-bottom: 200px;
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
.van-popup {
  padding: 15px 30px;
  box-sizing: border-box;
}
.productCard {
  background-color: #fff;
  /deep/.van-card__title {
    color: #ccc;
    position: absolute;
    top: 70px;
    width: 100%;
  }
  /deep/img {
    background: #000;
    border-radius: 10px;
  }
  /deep/.van-card__price {
    font-size: 40px;
  }
  /deep/.van-card__desc {
    color: #ccc;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}
.isSkuDownDivider {
  margin: 0;
}
.isSKutitle {
  font-size: 28px;
}
.productConten {
  .product-delcom p {
    font-size: 24px;
  }
  .product-footerlist {
    display: flex;
    flex-wrap: wrap;
    li {
      padding: 20px;
      background-color: #f0f2f5;
      margin: 10px;
      color:#101010 ;
      font-size: 26px;
      border-radius: 8px;
      .productActive {
        background-color: #FDE7EA;
        color: red;
        border: 1px solid #FDE7EA;
      }
    }
  }
}
</style>
