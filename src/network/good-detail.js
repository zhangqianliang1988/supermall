import {request} from "@/network/request";
import {MOCK} from '@/common/const'
import * as Mock from './mock'

export function queryGoodDetail(goodId) {
  if (MOCK) {
    return Mock.mockGoodDetail(goodId)
  } else {
    return request({
      url: '/detail',
      params: {
        'iid': goodId
      }
    })
  }
}
