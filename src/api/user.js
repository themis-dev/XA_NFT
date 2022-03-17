import request from '@/utils/request'

// 登录
export function login (data) {
    return request({
      url: '/interface/api/login',
      method: 'post',
      data
    })
}

// 获取验证码
export function getCaptcha (data) {
    return request({
        url: '/interface/api/customer/captcha',
        method: 'post',
        data
      })
}

// 注册
export function registerUser (data) {
  return request({
    url: '/interface/api/customer/register',
    method: 'post',
    data
  })
}