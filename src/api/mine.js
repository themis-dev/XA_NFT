import request from '@/utils/request'

// 订单列表
export function getOrderList (params) {
    return request({
      url: `/interface/api/order/list`,
      method: 'get',
      params
    })
  }

// 获取订单详情
export function getOrderDetail (params) {
    return request({
        url: `/interface/api/order/detail`,
        method: 'get',
        params
      })
}

// 支付
export function goPayment (data) {
    return request({
        url: `/interface/api/order/pay`,
        method: 'post',
        data
      })
}