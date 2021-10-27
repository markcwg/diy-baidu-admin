import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/system/user/login/test',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/system/user/info/test',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/system/user/logout',
    method: 'post'
  })
}
