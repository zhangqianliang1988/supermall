import {request} from "@/network/request";
import {MOCK} from '@/common/const'
import * as Mock from './mock'

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
  if (MOCK) {
    return Mock.mockHomeGoods(type, page)
  } else {
    return request({
      url: '/home/data',
      params: {type, page}
    })
  }
}
