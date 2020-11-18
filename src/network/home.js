import {request} from "@/network/request";
import Mock from 'mockjs'

/**
 * 查询首页多种数据
 *
 * @returns Promise
 */
export function queryHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}

export function queryGoods(type, page) {
  let mockData = Mock.mock({
    'list|1-10': [{
      'goodId|+1': 1,
      'img': Mock.Random.image('200x300', '#FF5777', '#FFF', type),
      'price': Mock.Random.float(10, 1000, 2, 2),
      'cfav': Mock.Random.natural(10, 300),
      'title': 'Mock.js'
    }],
    'page': page + 1
  })
  return new Promise(resolve => resolve({data: mockData}))
  /*
  return request({
    url: '/home/data',
    params: {type, page}
  })
   */
}
