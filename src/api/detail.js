import request from '@/utils/request'

// 列表页面
export const GetSellerProductByPage = pageIndex => {
  return request({
    method: 'POST',
    url: '/api/Icbc/GetSellerProductByPage',
    data: {
      orderType: 1,
      pageIndex,
      pageSize: 10
    }
  })
}
// 通过id获取商品信息
export const MobileProductByIdOpen = id => {
  return request({
    method: 'POST',
    url: '/api/Icbc/MobileProductByIdOpen',
    data: {
      id
    }
  })
}

// 获取商品描述信息
export const ProductDescProductId = id => {
  return request({
    method: 'POST',
    url: '/api/Icbc/ProductDescProductId',
    data: {
      id
    }
  })
}

// 获取商品详细属性信息
export const GetMoblieProductAttrs = id => {
  return request({
    method: 'POST',
    url: '/api/Icbc/GetMoblieProductAttrs',
    data: {
      id
    }
  })
}

// 创建订单
export const GetCreateCommonOrder = ({
  aId, // 地址ID
  accountMemberId, // 店铺ID
  pCollection, // 规格名称
  pCollectionId, // 规格ID
  selectedNum, // 选择数量
  goodsId, // 商品ID
  note = '' // 备注
}) => {
  return request({
    method: 'POST',
    url: '/api/Icbc/CreateCommonOrder',
    data: {
      addId: aId, // 地址ID
      cosList: [{
        accountId: accountMemberId, // 店铺ID
        copmList: [{
          pCollection, // 商品
          pCollectionId, // 商品属性ID
          pCount: selectedNum, // 个数
          pId: goodsId // 商品ID
        }],
        invTitle: '', // 发票
        note, // 下单备注
        orderType: 1 // 订单类型
      }],
      couponId: '', // 优惠券ID
      sourceId: 3, // 来源
      userId: 100000050571 // 用户ID
    }
  })
}

// 运费
export const GetSplitOrder = ({
  areaId = 0, // addressId
  accountMemberId, // shopId
  sAddTime, // now time
  priceValName, // goodsAttribute
  priceValId, // goodsID
  height,
  length,
  id, // productId
  pictureDefault,
  nameFull,
  count,
  salePrice, // 价格
  postState,
  userId,
  width
}) => {
  return request({
    method: 'POST',
    url: '/api/Icbc/SplitOrder',
    data: {
      areaId, // 地址ID
      shoppingCartsJson: [{
        sAccountId: accountMemberId, // shopID
        sAddTime, // 当前时间
        sCollection: priceValName,
        sCollectionId: priceValId,
        sHigh: height, // height
        sLong: length, // length
        sPicturePath: 'http://mall.yufu.cn/Product- ' + id + '-0-0.0.0.html',
        sProductId: id, // id
        sProductImgUrl: pictureDefault, // pictureDefault
        sProductName: nameFull,
        sQuantity: count,
        sSaleRealPrice: salePrice,
        sShippingTemplateId: postState,
        sUpdateTime: sAddTime,
        sUserId: userId,
        sWidth: width,
        sAreaId: '0',
        sId: '0',
        sIsDelete: false,
        sIsUsed: true,
        sPickageId: '0',
        sPrice: '0',
        sShippingPrice: '0',
        sSku: '0'
      }]
    }
  })
}

// 地址列表
export const GetAnyProfilesAddress = aProfileAccountId => {
  return request({
    method: 'POST',
    url: '/api/Icbc/GetAnyProfilesAddress',
    data: {
      aProfileAccountId
    }
  })
}
// export const GetSubOrdersShippingAreas = ({
//   subLenvel,
//   areaLevel,
//   parentId
// }) => {
//   return request({
//     method: 'POST',
//     url: '/api/Icbc/GetSubOrdersShippingAreas',
//     data: {
//       subLenvel,
//       areaLevel,
//       parentId
//     }
//   })
// }
