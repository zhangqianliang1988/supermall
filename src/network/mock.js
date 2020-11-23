import Mock from 'mockjs'

export function mockHomeGoods(type, page) {
  return new Promise(resolve => {
    setTimeout(() => {
      let mockData = Mock.mock({
        'list|10': [{
          'goodId|+1': '@id()',
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
        'topImages|2-4': ['@dataImage("750x400", "商品图片")'],
        'result': {
          'itemInfo': {
            'title': '@ctitle(25, 35)',
            'desc': '@ctitle(5, 10)',
            'price': '￥@float(80, 130, 2, 2)',
            'oldPrice': '￥@float(140, 190, 2, 2)',
            'discountDesc': '新品上市',
            'highNowPrice': '￥@float(200, 250, 2, 2)'
          },
          'itemParams': {
            'info': {
              'anchor': 'product_info',
              'key': '产品参数',
              'set|10-20': [
                {'key': '@ctitle(2)', 'value': '@ctitle(10, 30)'}
              ]
            },
            'rule': {
              'anchor': 'size_info',
              'disclaimer': '※以上尺寸为实物人工测量，因测量当时不同会有1-2cm误差，相关数据仅作参考，以收到实物为准。',
              'key': '尺码说明',
              'tables': [
                [
                  ['尺码', 'M', 'L', 'XL', 'XXL'],
                  ['衣长', '61.5', '63', '64.5', '66'],
                  ['胸围', '98', '104', '110', '116'],
                  ['袖长', '63', '66', '68.5', '70.5']
                ]
              ]
            }
          },
          'columns': ['销量 @integer(500, 2000)', '收藏 @integer(50, 200) 人', '全国包邮'],
          'shopInfo': {
            'shopLogo': '@dataImage("100x100", "商店LOGO")',
            'name': '@ctitle(10)',
            'cFans': '@integer(1000, 2000)',
            'cSells': '@integer(50000, 100000)',
            'score': [
              {
                'name': '描述相符',
                'score': '@float(2, 5, 2, 2)',
                'isBetter': '@boolean()'
              },
              {
                'name': '价格合理',
                'score': '@float(2, 5, 2, 2)',
                'isBetter': '@boolean()'
              },
              {
                'name': '质量满意',
                'score': '@float(2, 5, 2, 2)',
                'isBetter': '@boolean()'
              },
            ],
            'cGoods': '@integer(50, 100)',
            'services': [
              {
                'name': '退货补运费',
                'icon': '@dataImage("44x44", "退补")'
              }, {
                'name': '全国包邮',
                'icon': '@dataImage("44x44", "包邮")'
              }, {
                'name': '7天无理由退货',
                'icon': '@dataImage("44x44", "7天")'
              }, {
                'name': '72小时发货',
                'icon': '@dataImage("44x44", "72小时")'
              }
            ]
          },
          'detailInfo': {
            'desc': '@cparagraph(2, 4)',
            'detailImage': [
              {
                'key': '穿着效果',
                'list|4-8': ['@dataImage("750x400", "商品图片")']
              }
            ]
          },
          'rate': {
            'list|1-3': [
              {
                'user': {
                  'avatar': '@dataImage("80x80", "求真像")',
                  'uname': '@cname()',
                },
                'content': '@cparagraph(4, 8)',
                'created': '@datetime()',
                'style': '@ctitle(4)',
                'images|2-5': ['@dataImage("750x400", "用户评价图片")']
              }
            ]
          }
        }
      })
      resolve(mockData)
    }, 200)
  })
}

export function mockRecommend() {
  return mockHomeGoods('POP', 1)
}
