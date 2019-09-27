<template>
  <div class="order-sure">
    <!-- nar -->
    <van-nav-bar fixed title="确认订单">
      <van-icon name="arrow-left" @click="$router.back()" slot="left" color="red" />
    </van-nav-bar>
    <!-- 商品信息 -->
    <div class="card" >
      <van-card
      num="2"
      price="899.00"
      title="【12期免息/送无线蓝牙耳机】华为 Mate20全网通版双4g手机"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"/>
    </div>
    <!-- 地址 -->
    <div class="addList" @click="handleAddList(address)">
      <div class="user" v-if="userAddRess.name.length">
        <span>{{userAddRess.name}}</span>
        <span>{{userAddRess.phone}}</span>
        <span class="homeList">{{userAddRess.site}}</span>
      </div>
      <div v-else class="addressList">点击添加收货地址</div>
      <van-icon name="arrow" slot="right" color="#666666" />
    </div>
    <!--  -->
    <div class="invoice">
      <div class="invoice-card">
        <span>发票信息</span>
        <span>如需买发票，请与商户沟通</span>
        <van-icon class="invoice-icon" name="arrow" slot="right" color="#666666" />
      </div>
      <div class="remarks-card">
        <van-cell-group>
          <van-field
            v-model="message"
            label="买家留言"
            type="textarea"
            placeholder="限200字"
            rows="1"
            autosize
          />
        </van-cell-group>
      </div>
      <!-- <div class="Yufu-integral">
        <span class="dataIntegral">裕福积分</span>
        <span >共500积分，可抵扣</span>
        <span >500.00元</span>
        <van-switch
        v-model="checked"
        active-color="#ee0a24"
        />
      </div> -->
    </div>
    <!--  -->
    <template>
      <div class="sumOfManey">
        <div class="price">
          <span class="dataIntegral">商品金额</span>
          <span>￥854元</span>
        </div>
        <div class="tip">
          <span class="dataIntegral">运费</span>
          <span>+￥0.00元</span>
        </div>
      </div>
    </template>
    <!--  -->
    <template>
      <van-submit-bar
      :price="3050"
      label="实付款"
      button-text="提交订单"
      @submit="onSubmit"/>
    </template>
    <!-- 地址 -->
    <van-popup
    v-model="address"
    position="top"
    :style="{ height: '50%' }"
    >
      <van-address-edit
      :detail-maxlength=200
      :area-list="areaList"
      @save="onSave"
      @delete="onDelete"
      show-delete
      show-postal
      />
    </van-popup>
  </div>
</template>

<script>
import areaList from '@/components/area.js'
// import hybridApp from '@/api/hybrid_app.js'
export default {
  name: 'orderSure',
  data () {
    return {
      userAddRess: {
        name: '',
        phone: '',
        site: ''
      },
      addressInfo: {
        name: '', // 名字
        tel: '', // 手机
        province: '', // 城市
        city: '', // 城市
        county: '', // 城市
        addressDetail: '', // 详细地址
        areaCode: '' // 邮政
      },
      address: false,
      checked: false,
      message: '',
      price: 0,
      areaList
    }
  },
  methods: {
    handleAddList (address) {
      this.address = !address
    },
    onSubmit () {
      this.$router.push({
        name: 'finishPay',
        query: {}
      })
    },
    onSave (content) {
      this.userAddRess.name = content.name
      this.userAddRess.phone = content.tel.substr(0, 3) + '****' + content.tel.substr(7)
      this.userAddRess.site = content.addressDetail
      this.addressInfo.name = content.name
      this.addressInfo.province = content.province
      this.addressInfo.city = content.city
      this.addressInfo.county = content.county
      this.addressInfo.addressDetail = content.addressDetail
      this.addressInfo.areaCode = content.areaCode
      this.address = !this.address
      this.$toast.success('保存成功')
    },
    onDelete () {
      this.userAddRess.name = ''
      this.userAddRess.phone = ''
      this.userAddRess.site = ''
      this.address = !this.address
      this.$toast.fail('删除成功')
    }
  }
}
</script>

<style lang="less" scoped>
.van-icon-arrow-left {
  font-size: 60px;
}
.van-icon-arrow {
  font-size: 40px;
  height: 79px;
  line-height: 79px;
  position: absolute;
  right: 40px;
}
.order-sure::before {
  content:" ";
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  z-index:-100;
  background-color: #F5F5F5;
}
.card {
  margin-top: 110px;
  margin-bottom: 20px;
}
.van-card__title {
  width: 460px;
  height: 79px;
  font-size: 30px;
}
.van-card__price {
  padding-top: 26px;
  color: #E42F46;
  font-size: 30px;
}
.addList {
  width: 100%;
  height: 146px;
  background-color: #fff;
  display: flex;
  padding: 30px;
  position: relative;
  box-sizing: border-box;
  .user {
    width: 278px;
    height: 29px;
    font-size: 30px;
    color: #000;
  }
  .user span:nth-child(1) {
    font-weight: 700;
  }
  .user span:nth-child(2) {
    font-weight: 700;
    padding-left: 30px;
    position: absolute;
  }
  .homeList {
    position: absolute;
    font-size: 28px;
    color: #666666;
    top: 80px;
    width: 80%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
}
.invoice {
  width: 100%;
  height: 171px;
  background-color: #fff;
  margin-top: 20px;
  font-size: 28px;
  padding: 0 30px;
  box-sizing: border-box;
  .invoice-card,.remarks-card,.van-cell-group,.van-cell {
    height: 85px;
    line-height: 85px;
  }
  .invoice-card span:nth-child(1) {
    color: #666666;
  }
  .invoice-card span:nth-child(2) {
    padding-left: 188px;
    font-weight: 600;
  }
  .invoice-icon {
    height: 85px;
    line-height: 85px;
  }
  .van-field {
    padding: 0;
  }
  /deep/.van-cell__title span{
    color: #666666;
    font-size: 28px;
  }
}
/deep/.van-cell__title {
  width: 2.24rem;
}
.dataIntegral {

  color: #666
}
.Yufu-integral {
  position: relative;
}
.Yufu-integral span:nth-child(2) {
  padding-left: 100px;
  height: 85px;
  line-height: 85px;
}
.van-switch {
  font-size: 32px!important;
  position: absolute;
  top: 25px;
  right: 0;
}
.sumOfManey {
  width: 100%;
  height: 170px;
  background-color: #fff;
  font-size: 28px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  padding: 0 29px;
  box-sizing: border-box;
  .price,.tip {
    height: 85px;
    line-height: 85px;
  }
  .price span:nth-child(2),.tip span:nth-child(2) {
    float: right;
  }
  .price span:nth-child(2) {
    font-weight: 600;
  }
  .tip span:nth-child(2) {
    color: #E42F46;
  }
}
.van-submit-bar__text {
  text-align: left;
  padding-left: 30px;
  span:nth-child(1) {
    font-size: 30px!important;
    font-weight: 600;
  }
}
.van-submit-bar__price {
  padding-left: 20px;
}
.addressList {
  text-align: center;
  position: absolute;
  top: 50px;
  left: 250px;
  color: #666;
  font-size: 28px;
}
</style>
