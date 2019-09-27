import request from '@/utils/request'

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

export const MobileProductByIdOpen = id => {
  return request({
    method: 'POST',
    url: '/api/Icbc/MobileProductByIdOpen',
    data: {
      id
    }
  })
}

export const ProductDescProductId = id => {
  return request({
    method: 'POST',
    url: '/api/Icbc/ProductDescProductId',
    data: {
      id
    }
  })
}

export const GetMoblieProductAttrs = id => {
  return request({
    method: 'POST',
    url: '/api/Icbc/GetMoblieProductAttrs',
    data: {
      id
    }
  })
}
