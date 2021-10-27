import request from '@/utils/request'

export default {
  // 添加一条数据
  save(theme) {
    return request({
      url: '/system/theme',
      method: 'post',
      data: theme
    })
  },
  pageTheme(page, limit, name) {
    return request({
      url: `/system/theme/${page}/${limit}`,
      method: 'get',
      param: name
    })
  }
}
