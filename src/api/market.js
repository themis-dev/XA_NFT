import request from '@/utils/request'

export function getMarketData(params) {
    return request({
      url: `interface/api/product/list`,
      method: 'get',
      params
    })
  }