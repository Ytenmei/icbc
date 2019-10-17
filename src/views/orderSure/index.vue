<template>
  <div class="order-sure">
    <!-- nar -->
    <van-nav-bar fixed title="确认订单">
      <van-icon name="arrow-left" @click="$router.back()" slot="left" color="red" />
    </van-nav-bar>
    <!-- 商品信息 -->
    <div class="card" >
      <van-card
      :num="CreateCommonOrder.selectedNum"
      :price="CreateCommonOrder.selectedSkuComb.price"
      :title="SplitOrder.nameFull"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"/>
    </div>
    <!-- 地址 -->
    <div class="addList" @click="handleAddList(address)">
      <div class="user" v-if="userAddRess.name.length && userAddRess.phone.length && userAddRess.site.length ">
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
        <!-- <van-icon class="invoice-icon" name="arrow" slot="right" color="#666666" /> -->
      </div>
      <div class="remarks-card">
        <van-cell-group>
          <van-field
          v-model="message"
          label="买家留言"
          placeholder="限200字"
          rows="1"
          maxlength="200"
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
          <span>￥{{CreateCommonOrder.selectedSkuComb.price * CreateCommonOrder.selectedNum}}元</span>
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
      :price="CreateCommonOrder.selectedSkuComb.price * 100 * CreateCommonOrder.selectedNum"
      label="实付款"
      button-text="提交订单"
      @submit="onSubmit(addressInfo)"/>
    </template>
    <!-- 地址 -->
    <van-popup
      v-model="address"
      :close-on-click-overlay="false"
      position="top"
      :style="{ height: '45%' }"
    >
      <van-cell-group>
        <van-field
          v-model="addressInfo.name"
          label="姓名"
          placeholder="请输入姓名"
          maxlength="20"
        />
        <van-field
          v-model="addressInfo.tel"
          label="手机号"
          placeholder="请输入手机号"
          type="number"
          maxlength="11"
        />
        <van-field
          v-model="addressInfo.city"
          disabled
          clearable
          label="地区"
          placeholder="选择省/市/区"
          @click="handleisShowArea"
          :value="this.userAddRess.site"
        />
        <van-field
          v-model="addressInfo.addressDetail"
          label="详细地址"
          type="textarea"
          placeholder="街道门牌，楼层房间号等信息"
          rows="1"
          autosize
          maxlength="200"
        />
      </van-cell-group>
      <van-popup
        :close-on-click-overlay="false"
        v-model="area"
        position="bottom"
        :style="{ height: '30%' }">
        <van-nav-bar
          left-text="返回"
          right-text="确认"
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />
        <picker ref="picker3" :data="list3" :columns="3" :value.sync="value3"></picker>
      </van-popup>
      <div class="buttonAttr">
        <van-button type="danger" @click="handleOnSave(addressInfo)"  size="large">保存</van-button>
      </div>
      <div class="buttonAttr">
        <van-button
        :disabled="this.addressInfo.name.length
        || this.addressInfo.tel.length
        || this.addressInfo.addressDetail.length
        || this.addressInfo.city.length ? false : true"
        type="default"
        @click="onDelete"
        size="large">删除</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { isMobileNumber } from '@/components/addRess.js'
import list3 from '@/assets/area.js'
import {
  GetAnyProfilesAddress,
  GetCreateCommonOrder,
  CreateProfilesAddress
} from '@/api/detail.js'
// import hybridApp from '@/api/hybrid_app.js'
import { Picker } from 'vux'

export default {
  name: 'orderSure',
  components: {
    Picker
  },
  data () {
    return {
      // 收货地址信息
      userAddRess: {
        name: '',
        phone: '',
        site: ''
      },
      // 填写信息
      addressInfo: {
        name: '', // 名字
        tel: '', // 手机
        city: '', // 城市
        addressDetail: '' // 详细地址
      },
      address: false,
      checked: false,
      message: '', // 买家留言
      price: 0,
      SplitOrder: this.$route.params.SplitOrder, // 跳转来的数据运费数据
      CreateCommonOrder: this.$route.params.CreateCommonOrder, // 跳转来的创建订单数据
      allCretatedOrderData: {}, // 创建订单接口数据
      allGetSplitOrderData: {}, // 调用运费接口数据
      value3: [],
      list3,
      area: false,
      areaValue: ''
    }
  },
  created () {
    // this.getUserAddRess()
    this.handleAllOrderData()
  },
  methods: {
    handleAddList (address) {
      this.address = !address
    },
    // 下单
    async onSubmit (content) {
      const name = this.userAddRess.name
      const phone = this.userAddRess.phone
      const site = this.userAddRess.site
      if (!name || !phone || !site) {
        this.$toast.fail('请填写收货地址')
        return
      }
      const allCretatedOrderData = this.allCretatedOrderData
      const data = await GetCreateCommonOrder({
        aId: allCretatedOrderData.aId,
        accountMemberId: allCretatedOrderData.accountMemberId,
        pCollection: allCretatedOrderData.pCollection,
        pCollectionId: allCretatedOrderData.pCollectionId,
        selectedNum: this.CreateCommonOrder.selectedNum,
        goodsId: allCretatedOrderData.goodsId,
        note: this.message
      })
      console.log(data)
      // this.$router.push({
      //   name: 'finishPay',
      //   query: {}
      // })
    },
    // 保存地址
    async handleOnSave (content) {
      if (!content.name.length) {
        this.$toast('请填写姓名')
        return
      } else if (!isMobileNumber(content.tel)) {
        this.$toast('请填写正确的手机号')
        return
      } else if (!content.city.length) {
        this.$toast('请选择地区')
        return
      } else if (!content.addressDetail.length) {
        this.$toast('请填写地址信息')
        return
      }
      const data = await CreateProfilesAddress({
        aAddTime: this.$dayjs(new Date()),
        aAddress: content.addressDetail,
        aCityId: this.value3[1].split('|')[0],
        aCityName: content.city.split(' ')[1],
        aCountyId: this.value3[2].split('|')[0],
        aCountyName: content.city.split(' ')[2],
        aMobilePhone: content.tel,
        // aProfileAccountId,
        aProvinceId: this.value3[0].split('|')[0],
        aProvinceName: content.city.split(' ')[0],
        aRealName: content.name,
        aUpdateTime: this.$dayjs(new Date())
      })
      window.localStorage.setItem('userArea', JSON.stringify(this.value3))
      this.allCretatedOrderData.aId = data
      this.userAddRess.name = content.name
      this.userAddRess.phone = content.tel.substr(0, 3) + '****' + content.tel.substr(7)
      this.userAddRess.site = content.city + content.addressDetail
      // window.localStorage.setItem('addressInfo', JSON.stringify(content))
      this.$toast.success('保存成功')
      this.address = false
    },
    // 删除地址信息
    onDelete () {
      this.$dialog.confirm({
        message: '确认删除吗？'
      }).then(() => {
        this.userAddRess.name = ''
        this.userAddRess.phone = ''
        this.userAddRess.site = ''
        this.addressInfo.name = ''
        this.addressInfo.tel = ''
        this.addressInfo.city = ''
        this.addressInfo.addressDetail = ''
        this.value3 = []
        this.address = !this.address
        this.$toast.fail('删除成功')
        // on confirm
      }).catch(() => {
        // on cancel
      })
    },
    handleAllOrderData () {
      // 店铺ID
      this.allCretatedOrderData.accountMemberId = this.CreateCommonOrder.accountMemberId
      // 规格名称
      this.allCretatedOrderData.pCollection = this.CreateCommonOrder.selectedSkuComb.pCollection ? this.CreateCommonOrder.selectedSkuComb.pCollection : ''
      // 规格组合ID
      this.allCretatedOrderData.pCollectionId = this.CreateCommonOrder.selectedSkuComb.pCollectionId ? this.CreateCommonOrder.selectedSkuComb.pCollectionId : ''
      // 数量
      this.allCretatedOrderData.selectedNum = this.CreateCommonOrder.selectedSkuComb
      // 商品ID
      this.allCretatedOrderData.goodsId = this.CreateCommonOrder.goodsId
      // this.allGetSplitOrderData.accountMemberId = this.SplitOrder.accountMemberId
      // this.allGetSplitOrderData.priceValName = this.CreateCommonOrder.selectedSkuComb.pCollection ? this.CreateCommonOrder.selectedSkuComb.pCollection : ''
      // this.allGetSplitOrderData.priceValId = this.CreateCommonOrder.selectedSkuComb.pCollectionId ? this.CreateCommonOrder.selectedSkuComb.pCollectionId : ''
      // this.allGetSplitOrderData.height = this.SplitOrder.height
      // this.allGetSplitOrderData.length = this.SplitOrder.length
      // this.allGetSplitOrderData.id = this.SplitOrder.id
      // this.allGetSplitOrderData.pictureDefault = this.SplitOrder.pictureDefault
      // this.allGetSplitOrderData.nameFull = this.SplitOrder.nameFull
      // this.allGetSplitOrderData.count = this.SplitOrder.nameFull
    },
    async getUserAddRess () {
      const data = await GetAnyProfilesAddress(100000050571)
      if (!data.length) {
        return
      }
      const areaData2 = data.filter(item => item.aIsDefault)
      // 有默认地址
      const areaData = areaData2[0]
      if (areaData2.length) {
        this.userAddRess.name = areaData.aRealName
        this.userAddRess.phone = areaData.aMobilePhone
        this.userAddRess.site = areaData.aProvinceName + ' ' + areaData.aCityName + ' ' + areaData.aCountyName + ' ' + areaData.aAddress
        this.addressInfo.name = areaData.aRealName
        this.addressInfo.tel = areaData.aMobilePhone
        this.addressInfo.city = areaData.aProvinceName + ' ' + areaData.aCityName + ' ' + areaData.aCountyName
        this.addressInfo.addressDetail = areaData.aAddress
        this.allCretatedOrderData.aId = areaData.aId
      } else { // 有地址，无默认地址，
        this.userAddRess.name = areaData.aRealName
        this.userAddRess.phone = areaData.aMobilePhone
        this.userAddRess.site = areaData.aProvinceName + ' ' + areaData.aCityName + ' ' + areaData.aCountyName + ' ' + areaData.aAddress
        this.addressInfo.name = areaData.aRealName
        this.addressInfo.tel = areaData.aMobilePhone
        this.addressInfo.city = areaData.aProvinceName + ' ' + areaData.aCityName + ' ' + areaData.aCountyName
        this.addressInfo.addressDetail = areaData.aAddress
        this.allCretatedOrderData.aId = areaData.aId
      }
      const userArea = JSON.parse(window.localStorage.getItem('userArea'))
      const aProvinceId = areaData.aProvinceId
      const aCityId = areaData.aCityId
      const aCountyId = areaData.aCountyId
      // 没有
      if (userArea) {
        this.value3.push(aProvinceId + '|1')
        this.value3.push(aCityId + '|2')
        this.value3.push(aCountyId + '|3')
      } else {
        this.value3 = userArea
      }
    },
    handleisShowArea () {
      this.area = true
    },
    onClickLeft () {
      const userArea = JSON.parse(window.localStorage.getItem('userArea'))
      if (!userArea) {
        this.value3 = userArea
      }
      this.area = false
    },
    onClickRight () {
      let selectedValue = this.$refs.picker3.getNameValues()
      this.userAddRess.site = selectedValue
      this.addressInfo.city = selectedValue
      this.area = false
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
  position: absolute;
  top: 26px;
  color: #E42F46;
  font-size: 30px;
}
.van-card__bottom {
  position: relative;
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
.vux-picker {
  margin: auto;
}
.buttonAttr {
  width: 95%;
  margin: auto;
  margin-top: 30px;
}
</style>
