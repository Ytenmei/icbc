import request from '@/utils/request'

// 商品信息
export const MobileProductByIdOpen = id => {
  return request({
    method: 'POST',
    url: '/api/Mall/MobileProductByIdOpen',
    data: {
      id: 1078796
    }
  })
}

// 商品描述
export const ProductDescProductId = () => {
  return request({
    method: 'POST',
    url: '/GetMobileAdsIndex',
    data: {
      id: 1078796
    }
  })
}

// 获取评论
export const SelectProductCommentsByPage = () => {
  return request({
    method: 'POST',
    url: '/GetMobileAdsIndex',
    data: {
      id: 1078796
    }
  })
}

// 获取属性
export const GetMoblieProductAttrs = () => {
  return request({
    method: 'POST',
    url: '/api/Mall/GetMoblieProductAttrs',
    data: {
      pId: 2085361
    }
  })
}
