import request from '@/utils/request'

export function getMarketData(params) {
    return request({
      url: `interface/api/product/list`,
      method: 'get',
      params
    })
  }
  
// 藏品详情
  export function getMarketDetail(params) {
    return request({
      url: `/interface/api/product/detail`,
      method: 'get',
      params
    })
  }

// 立即支付
export function marketPayment (data) {
  return request({
    url: `/interface/api/order/place?pid=${data}`,
    method: 'post',
  })
}

