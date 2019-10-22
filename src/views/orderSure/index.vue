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
      :thumb="SplitOrder.pictureDefault"/>
    </div>
    <!-- 地址 -->
    <div class="addList" v-if="userAddRess.name.length && userAddRess.phone.length && userAddRess.site.length ">
      <div @click="handleAddList(show)" class="user">
        <span>{{userAddRess.name}}</span>
        <span>{{userAddRess.phone}}</span>
        <span class="homeList">{{userAddRess.site}}</span>
      </div>
      <!-- <div @click="handleAddress" v-else class="addressList">点击添加收货地址</div> -->
      <van-icon name="arrow" slot="right" color="#666666" />
    </div>
    <div @click="handleAddress()" v-else class="addressList">点击添加收货地址</div>
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
      class="addRess"
      v-model="show"
      position="bottom"
      :style="{ height: '100%' }">
      <template>
        <van-nav-bar :border="false" fixed title="收货地址列表管理">
          <van-icon @click="handleAddList" name="arrow-left" slot="left" color="red" />
        </van-nav-bar>
      </template>
      <div class="address-list">
        <van-panel
          v-for="(item, index) in ressList"
          :key="index"
          class="address-card"
          :title="item.aRealName"
          :desc="item.aProvinceName + ' ' + item.aCityName + ' '+ item.aCountyName + ' ' + item.aAddress"
          :status="item.aMobilePhone"
        >
          <van-row class="address-default">
            <van-col span="8">
              <van-tag v-if="item.aIsDefault" type="warning">默认地址</van-tag>
              <van-button @click="handledefauladdress(item)" v-else type="primary" size="mini">设为默认地址</van-button>
            </van-col>
            <van-col @click="handleEditAddRess(item)" span="6"  offset="4">
              <van-icon name="delete" />
              <span>编辑</span>
            </van-col>
            <van-col @click="handleDeleteRess(item)" span="6">
              <van-icon name="records" />
              <span>删除</span>
            </van-col>
          </van-row>
        </van-panel>
      </div>
      <van-button @click="handleCreatedNewRess()" class="newAddress" type="danger" size="large">新建收货地址</van-button>
      <!-- 地址编辑 -->
        <van-popup
          v-model="address"
          :close-on-click-overlay="false"
          position="bottom"
          :style="{ height: '50%' }"
        >
          <van-cell-group>
            <van-field
              v-model="addressInfo.name"
              label="姓名"
              placeholder="请输入姓名"
              maxlength="16"
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
              right-text="确认"
              @click-right="onClickRight"
            />
            <picker ref="picker3" @on-change="handleA" :data="list3" :columns="3" :value.sync="value3"></picker>
          </van-popup>
          <div class="buttonAttr">
            <van-button type="danger" @click="handleUpdateAddress(addressInfo)"  size="large">保存</van-button>
          </div>
          <!-- <div class="buttonAttr">
            <van-button
            :disabled="this.addressInfo.name.length
            || this.addressInfo.tel.length
            || this.addressInfo.addressDetail.length
            || this.addressInfo.city.length ? false : true"
            type="default"
            @click="handleDeleteRess(this.item)"
            size="large">删除</van-button>
          </div> -->
        </van-popup>
    </van-popup>
  </div>
</template>

<script>
import { isMobileNumber } from '@/components/addRess.js'
import list3 from '@/assets/area.js'
import {
  GetAnyProfilesAddress,
  GetCreateCommonOrder,
  CreateProfilesAddress,
  DelProfilesAddress,
  UpdateProfilesAddress
} from '@/api/detail.js'
// import hybridApp from '@/api/hybrid_app.js'
// import { Picker } from 'vux'
import Picker from 'vux/src/components/picker'
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
      areaValue: '',
      show: false,
      ressList: '',
      item: '',
      newOrUpdate: false,
      IsDefault: false
    }
  },
  created () {
    this.handleAllOrderData()
    this.getUserAddRess()
  },
  // computed: {
  //   handle
  // },
  methods: {
    handleAddList (show) {
      this.getUserAddRess()
      this.show = !show
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
    // 表单是否完整
    handleisShowAddress (content) {
      if (!content.name.length) {
        this.$toast('请填写姓名')
        return false
      } else if (!isMobileNumber(content.tel)) {
        this.$toast('请填写正确的手机号')
        return false
      } else if (!content.city.length) {
        this.$toast('请选择地区')
        return false
      } else if (!content.addressDetail.length) {
        this.$toast('请填写地址信息')
        return false
      } else {
        return true
      }
    },
    // 保存地址
    async handleOnSave (content) {
      if (!this.handleisShowAddress(content)) {
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
      this.allCretatedOrderData.aId = data
      this.userAddRess.name = content.name
      this.userAddRess.phone = content.tel.substr(0, 3) + '****' + content.tel.substr(7)
      this.userAddRess.site = content.city + content.addressDetail
      // window.localStorage.setItem('addressInfo', JSON.stringify(content))
      this.$toast.success('保存成功')
      this.address = false
    },
    // 页面信息展示
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
    // 获取地址数据
    async getUserAddRess () {
      const data = await GetAnyProfilesAddress(100000050571)
      if (!data.length) {
        return
      }
      // 所有地址列表
      this.ressList = data
      // 默认地址
      const areaOwnData = data.filter(item => item.aIsDefault)
      // 有默认地址
      if (areaOwnData.length) {
        const areaData = areaOwnData[0]
        this.userAddRess.name = areaData.aRealName
        this.userAddRess.phone = areaData.aMobilePhone
        this.userAddRess.site = areaData.aProvinceName + ' ' + areaData.aCityName + ' ' + areaData.aCountyName + ' ' + areaData.aAddress
        this.addressInfo.name = areaData.aRealName
        this.addressInfo.tel = areaData.aMobilePhone
        this.addressInfo.city = areaData.aProvinceName + ' ' + areaData.aCityName + ' ' + areaData.aCountyName
        this.addressInfo.addressDetail = areaData.aAddress
        this.allCretatedOrderData.aId = areaData.aId
      } else { // 有地址，无默认地址，
        const areaData = this.ressList[0]
        this.userAddRess.name = areaData.aRealName
        this.userAddRess.phone = areaData.aMobilePhone
        this.userAddRess.site = areaData.aProvinceName + ' ' + areaData.aCityName + ' ' + areaData.aCountyName + ' ' + areaData.aAddress
        this.addressInfo.name = areaData.aRealName
        this.addressInfo.tel = areaData.aMobilePhone
        this.addressInfo.city = areaData.aProvinceName + ' ' + areaData.aCityName + ' ' + areaData.aCountyName
        this.addressInfo.addressDetail = areaData.aAddress
        this.allCretatedOrderData.aId = areaData.aId
      }
    },
    // 选择省市区
    handleisShowArea () {
      this.area = true
    },
    // 地区确认
    onClickRight () {
      let selectedValue = this.$refs.picker3.getNameValues()
      this.userAddRess.site = selectedValue
      this.addressInfo.city = selectedValue
      this.area = false
    },
    // 编辑
    async handleEditAddRess (item) {
      console.log(item)
      this.value3[0] = item.aProvinceId + '|1'
      this.value3[1] = item.aCityId + '|2'
      this.value3[2] = item.aCountyId + '|3'
      this.address = true
      this.item = item
      this.addressInfo.name = item.aRealName
      this.addressInfo.tel = item.aMobilePhone
      this.addressInfo.city = item.aProvinceName + ' ' + item.aCityName + ' ' + item.aCountyName
      this.addressInfo.addressDetail = item.aAddress
      this.newOrUpdate = false
    },
    // 保存更新数据
    async handleUpdateAddress (addressInfo) {
      if (!(this.handleisShowAddress(addressInfo))) {
        return
      }
      // false
      if (!this.newOrUpdate) {
        const item = this.item
        if (!this.value3.length) {
          this.value3 = []
          this.value3.push(item.aProvinceId + '|1')
          this.value3.push(item.aCityId + '|2')
          this.value3.push(item.aCountyId + '|3')
        }
        const upDateTime = this.$dayjs(new Date())
        const aCityId = this.value3[1].split('|')[0]
        const aCityName = addressInfo.city.split(' ')[1]
        const aCountyId = this.value3[2].split('|')[0]
        const aCountyName = addressInfo.city.split(' ')[2]
        const aProvinceId = this.value3[0].split('|')[0]
        const aProvinceName = addressInfo.city.split(' ')[0]
        await UpdateProfilesAddress({
          aProvinceId: aProvinceId,
          aCountyId: aCountyId,
          aCityId: aCityId,
          aProvinceName: aProvinceName,
          aUpdateTime: upDateTime,
          aMobilePhone: addressInfo.tel,
          aIsDefault: item.aIsDefault,
          aAddTime: item.aAddTime,
          aRealName: addressInfo.name,
          aCountyName: aCountyName,
          aAddress: addressInfo.addressDetail,
          aCityName: aCityName,
          aId: item.aId
        })
        this.getUserAddRess()
        this.$toast.success('保存成功')
        this.address = false
      } else {
        if (!this.handleisShowAddress(addressInfo)) {
          return
        }
        const data = CreateProfilesAddress({
          aAddTime: this.$dayjs(new Date()),
          aAddress: addressInfo.addressDetail,
          aCityId: this.value3[1].split('|')[0],
          aCityName: addressInfo.city.split(' ')[1],
          aCountyId: this.value3[2].split('|')[0],
          aCountyName: addressInfo.city.split(' ')[2],
          aMobilePhone: addressInfo.tel,
          aProvinceId: this.value3[0].split('|')[0],
          aProvinceName: addressInfo.city.split(' ')[0],
          aRealName: addressInfo.name,
          aUpdateTime: this.$dayjs(new Date())
        })
        this.allCretatedOrderData.aId = data
        this.userAddRess.name = addressInfo.name
        this.userAddRess.phone = addressInfo.tel.substr(0, 3) + '****' + addressInfo.tel.substr(7)
        this.userAddRess.site = addressInfo.city + ' ' + addressInfo.addressDetail
        this.getUserAddRess()
        this.$toast.success('保存成功')
        this.address = false
      }
    },
    handleA (value) {
      this.value3 = value
    },
    handleAddress () {
      this.show = !this.show
      this.getUserAddRess()
    },
    // 新建收货地址
    handleCreatedNewRess () {
      this.address = !this.address
      this.addressInfo.name = ''
      this.addressInfo.tel = ''
      this.addressInfo.city = ''
      this.addressInfo.addressDetail = ''
      this.value3 = []
      this.newOrUpdate = true
    },
    handleDeleteRess (item) {
      this.$dialog.confirm({
        message: '确认删除该地址吗？'
      }).then(async () => {
        const data = await DelProfilesAddress(item.aId)
        if (data === '删除地址成功') {
          this.ressList = this.ressList.filter(r => r.aId !== item.aId)
          for (let k in this.userAddRess) {
            this.userAddRess[k] = ''
          }
          for (let k in this.addressInfo) {
            this.addressInfo[k] = ''
          }
          this.$toast.success('删除成功')
        } else {
          this.$toast.fail('出现意外错误,请重试')
        }
      }).catch(() => {})
    },
    handledefauladdress (item) {
      this.$dialog.confirm({
        message: '是否将改地址设为默认地址'
      }).then(async () => {
        await UpdateProfilesAddress({
          aProvinceId: item.aProvinceId,
          aCountyId: item.aCountyId,
          aCityId: item.aCityId,
          aProvinceName: item.aProvinceName,
          aUpdateTime: item.aUpdateTime,
          aMobilePhone: item.aMobilePhone,
          aIsDefault: true,
          aAddTime: item.aAddTime,
          aRealName: item.aRealName,
          aCountyName: item.aCountyName,
          aAddress: item.aAddress,
          aCityName: item.aCityName,
          aId: item.aId
        })
        this.getUserAddRess()
      }).catch(() => {
        this.$toast('已取消！')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.van-icon-arrow-left {
  font-size: 45px;
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
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  .user span:nth-child(2) {
    font-weight: 700;
    padding-left: 30px;
    position: absolute;
    top: 30px;
    left: 340px;
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
  // position: absolute;
  // top: 25px;
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
  width: 100%;
  height: 147px;
  text-align: center;
  line-height: 147px;
  background-color: #fff;
  // position: absolute;
  // top: 50px;
  // left: 250px;
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
.addRess {
  width: 100%;
  height: 100%;
  content:"";
  position: absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  z-index:-100;
  background-color: #F5F5F5;
  height: 100%;
  .address-list {
    margin-top: 95px;
    .address-card {
      margin-top: 10px;
    }
  }
  /deep/.van-cell__label {
    width: 150%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  .address-default {
    width: 100%;
    height: 80px;
    font-size: 24px;
    box-sizing: border-box;
    padding: 20px 0 20px 30px;
  }
  .van-col--6 {
    text-align: center;
    position: relative;
    height: 100%;
    span {
      font-size: 28px;
      top: 0;
    }
  }
  .van-cell__value {
    text-align: left;
    span {
      color: #000;
    }
  }
  /deep/.van-checkbox__icon--round {
    font-size: 32px;
  }
  /deep/.van-icon-delete,.van-icon-records {
    font-size: 32px;
    position: absolute;
    left: 23px;
    bottom: 6px;
  }
  .newAddress {
    position: fixed;
    bottom: 0;
  }
}
</style>
