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

export function getRecommend() {
  if (MOCK) {
    return Mock.mockRecommend()
  } else {
    return request({
      url: '/recommend'
    })
  }
}

export class Good {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.highNowPrice;
  }
}

export class GoodParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}
