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
    'list|10': [{
      'goodId|+1': page * 1000,
      'img': '@dataImage("250x250", "求真像")',
      'price': '@float(100, 500, 2, 2)',
      'cfav|0-300': 10,
      'title': '@ctitle(10, 20)'
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
