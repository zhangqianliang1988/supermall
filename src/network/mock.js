import Mock from 'mockjs'

export function mockHomeGoods(type, page) {
  return new Promise(resolve => {
    setTimeout(() => {
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
      resolve({data: mockData})
    }, 300)
  })
}

export function mockGoodDetail(goodId) {
  return new Promise(resolve => {
    setTimeout(() => {
      let mockData = Mock.mock({
        'goodId': goodId,
        'topImages|2-4': ['@dataImage("750x400", "商品介绍图片")']
      })
      resolve(mockData)
    }, 200)
  })
}
