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

// 更换头像
export function updateAvatar(data) {
  return request({
    url: '/interface/api/customer/avatar',
    method: 'post',
    data
  })
}

// 获取个人藏品
export function getCollection() {
  return request({
    url: '/interface/api/customer/collections',
    method: 'get'
  })
}

// 个人收藏详情
export function getCollectionDetail (params) {
  return request({
    url: '/interface/api/customer/collection',
    method: 'get',
    params
  })
}

// 转赠
export function giftPresent(data) {
  return request({
    url: '/interface/api/customer/present',
    method: 'post',
    data
  })
}

// 区块链查证信息
export function checkBlockChain (params) {
  return request({
    url: '/interface/api/customer/check',
    method: 'get',
    params
  })
}