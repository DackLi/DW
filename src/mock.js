const Mock = require('mockjs')

var Random = Mock.Random

Mock.mock('/api/slide', (req, res) => {
  return {
    data: {
      'slide': {
        login: {
          isLogin: true,
          userEmai: '2449988907@qq.com',
          userMenu: [
            {
              title: 'My Orders',
              url: '/order'
            },
            {
              title: 'My Wishlist',
              url: '/wishlist'
            },
            {
              title: 'My Coupon',
              url: '/coupon'
            },
            {
              title: 'Shipping Address',
              url: '/address'
            },
            {
              title: 'Change Password',
              url: '/changePassword'
            },
            {
              title: 'Log Out',
              url: '/logOut'
            }
          ]
        },
        menu: [
          {
            title: 'Home',
            url: '/index'
          },
          {
            title: 'Top',
            url: '/top',
            children: [
              {
                title: 'Viw All',
                url: '/dress'
              },
              {
                title: 'Top',
                url: '/top'
              }
            ]
          },
          {
            title: 'Dress',
            url: '/dress',
            children: [
              {
                title: 'Viw All',
                url: '/dress'
              },
              {
                title: 'Maxi Dresses',
                url: '/top'
              },
              {
                title: 'Plaid Dresses',
                url: '/top'
              }
            ]
          },
          {
            title: 'Bottoms',
            url: '/bottoms',
            children: [
              {
                title: 'Viw All',
                url: '/dress'
              },
              {
                title: 'Skirt',
                url: '/top'
              },
              {
                title: 'Pants',
                url: '/top'
              },
              {
                title: 'Jumpsuits',
                url: '/top'
              },
              {
                title: 'Suits & Co-ords',
                url: '/top'
              }
            ]
          }
        ]
      }
    }
  }
})

Mock.mock('/api/index', (req, res) => {
  return {
    data: {
      'index': {
        banner: [
          {
            url: '/index',
            imgUrl: '//sp.aopcdn.com//banner/1514965115740.jpg?ver=15149651'
          },
          {
            url: '/index',
            imgUrl: '//sp.aopcdn.com//banner/1514965115740.jpg?ver=15149651'
          },
          {
            url: '/top',
            imgUrl: '//sp.aopcdn.com//banner/1514965115740.jpg?ver=15149651'
          }
        ],
        nav: [
          {
            text: 'top selling',
            type: 'top selling',
            active: 'true'
          },
          {
            text: 'dress',
            type: 'dress',
            active: 'false'
          },
          {
            text: 'new in',
            type: 'new in',
            active: 'false'
          },
          {
            text: 'bottom',
            type: 'bottom',
            active: 'false'
          },
          {
            text: 'bodycon',
            type: 'bodycon',
            active: 'false'
          }
        ]
      }
    }
  }
})

Mock.mock('/api/index/nav', (req, res) => {
  return {
    data: {
      productList: [
        {
          imgUrl: '//mia.aopcdn.com/goods/634680F55697/3086179_4.jpg@!g-h1200-w900',
          title: 'Floral Printed See-Through Midi Skater Dress',
          price: '29.95',
          isLike: true,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/61763DBF5838/3112287_3.jpg@!g-h1200-w900',
          title: 'Sexy Deep V-Neck Solid Midi Skater Dress No Pockets',
          price: '29.95',
          isLike: false,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/96EFDCD1AE70/3164705_ba9ca0d572.jpg@!g-h1200-w900',
          title: 'Round Neck  Abstract Print Bodycon Dress',
          price: '19.95',
          isLike: false,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/719952E8F985/3159121_d6c504cf62.jpg@!g-h1200-w900',
          title: 'Round Neck  Ruffled Hem  Printed Maxi Dress',
          price: '27.95',
          isLike: true,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/EAC6CBAA41EB/3172542_7d110f708f.jpg@!g-h1200-w900',
          title: 'Round Neck  Plain Maxi Dress',
          price: '25.46',
          isLike: true,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/DC7E60260F06/14762_Ldpc1kVs.jpg@!g-h1200-w900',
          title: 'Women Office Printed Fake Two-Piece Bodycon Dress',
          price: '13.95',
          isLike: true,
          url: '/index'
        }
      ]
    }
  }
})

Mock.mock('/api/index/nav/top', (req, res) => {
  return {
    data: {
      productList: [
        {
          imgUrl: '//mia.aopcdn.com/goods/634680F55697/3086179_4.jpg@!g-h1200-w900',
          title: 'Floral Printed See-Through Midi Skater Dress',
          price: '29.95',
          isLike: true,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/61763DBF5838/3112287_3.jpg@!g-h1200-w900',
          title: 'Sexy Deep V-Neck Solid Midi Skater Dress No Pockets',
          price: '29.95',
          isLike: false,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/96EFDCD1AE70/3164705_ba9ca0d572.jpg@!g-h1200-w900',
          title: 'Round Neck  Abstract Print Bodycon Dress',
          price: '19.95',
          isLike: false,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/719952E8F985/3159121_d6c504cf62.jpg@!g-h1200-w900',
          title: 'Round Neck  Ruffled Hem  Printed Maxi Dress',
          price: '27.95',
          isLike: true,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/EAC6CBAA41EB/3172542_7d110f708f.jpg@!g-h1200-w900',
          title: 'Round Neck  Plain Maxi Dress',
          price: '25.46',
          isLike: true,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/DC7E60260F06/14762_Ldpc1kVs.jpg@!g-h1200-w900',
          title: 'Women Office Printed Fake Two-Piece Bodycon Dress',
          price: '13.95',
          isLike: true,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/634680F55697/3086179_4.jpg@!g-h1200-w900',
          title: 'Floral Printed See-Through Midi Skater Dress',
          price: '29.95',
          isLike: true,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/61763DBF5838/3112287_3.jpg@!g-h1200-w900',
          title: 'Sexy Deep V-Neck Solid Midi Skater Dress No Pockets',
          price: '29.95',
          isLike: false,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/96EFDCD1AE70/3164705_ba9ca0d572.jpg@!g-h1200-w900',
          title: 'Round Neck  Abstract Print Bodycon Dress',
          price: '19.95',
          isLike: false,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/719952E8F985/3159121_d6c504cf62.jpg@!g-h1200-w900',
          title: 'Round Neck  Ruffled Hem  Printed Maxi Dress',
          price: '27.95',
          isLike: true,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/EAC6CBAA41EB/3172542_7d110f708f.jpg@!g-h1200-w900',
          title: 'Round Neck  Plain Maxi Dress',
          price: '25.46',
          isLike: true,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/DC7E60260F06/14762_Ldpc1kVs.jpg@!g-h1200-w900',
          title: 'Women Office Printed Fake Two-Piece Bodycon Dress',
          price: '13.95',
          isLike: true,
          url: '/index'
        }
      ]
    }
  }
})

Mock.mock('/api/list/top', (req, res) => {
  return {
    data: {
      sort: [
        {
          value: 'best selling',
          text: 'best selling'
        },
        {
          value: 'most viewed',
          text: 'Most Viewed'
        },
        {
          value: 'new arrival',
          text: 'New Arrival'
        },
        {
          value: 'low price',
          text: 'Low Price'
        },
        {
          value: 'high price',
          text: 'High Price'
        }
      ],
      filter: [
        {
          type: 'color',
          isShow: false,
          child: [
            {
              value: 'red'
            },
            {
              value: 'black'
            },
            {
              value: 'red'
            }
          ]
        },
        {
          type: 'size',
          isShow: false,
          child: [
            {
              value: 's'
            },
            {
              value: 'm'
            },
            {
              value: 'x'
            }
          ]
        },
        {
          type: 'price',
          isShow: false,
          child: [
            {
              value: '0-10'
            },
            {
              value: '10-20'
            },
            {
              value: '20+'
            }
          ]
        }
      ],
      breadcrumb: [
        {
          text: 'home',
          url: '#/'
        },
        {
          text: 'tome',
          url: '#/top'
        },
        {
          text: 'Floral Printed See-Through Midi Skater Dress',
          url: '#/'
        }
      ],
      productList: [
        {
          imgUrl: '//mia.aopcdn.com/goods/634680F55697/3086179_4.jpg@!g-h1200-w900',
          title: 'Floral Printed See-Through Midi Skater Dress',
          price: '29.95',
          isLike: true,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/61763DBF5838/3112287_3.jpg@!g-h1200-w900',
          title: 'Sexy Deep V-Neck Solid Midi Skater Dress No Pockets',
          price: '29.95',
          isLike: false,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/96EFDCD1AE70/3164705_ba9ca0d572.jpg@!g-h1200-w900',
          title: 'Round Neck  Abstract Print Bodycon Dress',
          price: '19.95',
          isLike: false,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/719952E8F985/3159121_d6c504cf62.jpg@!g-h1200-w900',
          title: 'Round Neck  Ruffled Hem  Printed Maxi Dress',
          price: '27.95',
          isLike: true,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/EAC6CBAA41EB/3172542_7d110f708f.jpg@!g-h1200-w900',
          title: 'Round Neck  Plain Maxi Dress',
          price: '25.46',
          isLike: true,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/DC7E60260F06/14762_Ldpc1kVs.jpg@!g-h1200-w900',
          title: 'Women Office Printed Fake Two-Piece Bodycon Dress',
          price: '13.95',
          isLike: true,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/634680F55697/3086179_4.jpg@!g-h1200-w900',
          title: 'Floral Printed See-Through Midi Skater Dress',
          price: '29.95',
          isLike: true,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/61763DBF5838/3112287_3.jpg@!g-h1200-w900',
          title: 'Sexy Deep V-Neck Solid Midi Skater Dress No Pockets',
          price: '29.95',
          isLike: false,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/96EFDCD1AE70/3164705_ba9ca0d572.jpg@!g-h1200-w900',
          title: 'Round Neck  Abstract Print Bodycon Dress',
          price: '19.95',
          isLike: false,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/719952E8F985/3159121_d6c504cf62.jpg@!g-h1200-w900',
          title: 'Round Neck  Ruffled Hem  Printed Maxi Dress',
          price: '27.95',
          isLike: true,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/EAC6CBAA41EB/3172542_7d110f708f.jpg@!g-h1200-w900',
          title: 'Round Neck  Plain Maxi Dress',
          price: '25.46',
          isLike: true,
          url: '/index'
        },
        {
          imgUrl: '//mia.aopcdn.com/goods/DC7E60260F06/14762_Ldpc1kVs.jpg@!g-h1200-w900',
          title: 'Women Office Printed Fake Two-Piece Bodycon Dress',
          price: '13.95',
          isLike: true,
          url: '/index'
        }
      ]
    }
  }
})

Mock.mock('/api/cart', (req, res) => {
  return {
    isLogin: false,
    cartList: [
      {
        title: 'Lapel Plain Pocket Woolen Long Coat',
        price: '33.55',
        color: 'red',
        size: 'S',
        qty: 1,
        sku: '789',
        imgUrl: '//mia.aopcdn.com/goods/1639FD2EDEC7/3154002_1a385134f9.jpg@!g-h240-w179',
        url: '#/product/sprt'
      },
      {
        title: 'Spring Summer Chiffon Cotton Women Round Neck Asymmetric Hem Patchwork Plain Short Sleeve Blouses',
        price: '23.99',
        color: 'white',
        size: 'm',
        qty: 1,
        sku: '789',
        imgUrl: '//mia.aopcdn.com/goods/E6650B19E372/3095032_4ffa09e7a3.jpg@!g-h240-w179',
        url: '#/product/sprt'
      },
      {
        title: 'Spring Summer Lace Women Round Neck Decorative Lace Lace Short Sleeve Blouses',
        price: '18.95',
        color: 'white',
        size: 'm',
        qty: 3,
        sku: '789',
        imgUrl: '//mia.aopcdn.com/goods/04A4374DE9F9/3145984_c6e2c87cce.jpg@!g-h240-w179',
        url: '#/product/sprt'
      }
    ]
  }
})

Mock.mock('/api/product', (req, res) => {
  return {
    breadcrumb: [
      {
        text: 'home',
        url: '#/'
      },
      {
        text: 'tome',
        url: '#/top'
      },
      {
        text: 'Floral Printed See-Through Midi Skater Dress',
        url: '#/'
      }
    ],
    banner: [
      {
        url: '/index',
        imgUrl: '//mia.aopcdn.com/goods/B4370225D2FE/3175966_30f30aa3a8.jpg@!g-h1200-w900'
      },
      {
        url: '/index',
        imgUrl: '//mia.aopcdn.com/goods/B4370225D2FE/3175966_31896ea7ab.jpg@!g-h1200-w900'
      },
      {
        url: '/top',
        imgUrl: '//mia.aopcdn.com/goods/B4370225D2FE/3175966_e491e119a0.jpg@!g-h1200-w900'
      }
    ],
    likeList: [
      {
        url: '/index',
        imgUrl: '//mia.aopcdn.com/goods/B4370225D2FE/3175966_30f30aa3a8.jpg@!g-h1200-w900'
      },
      {
        url: '/index',
        imgUrl: '//mia.aopcdn.com/goods/B4370225D2FE/3175966_31896ea7ab.jpg@!g-h1200-w900'
      },
      {
        url: '/top',
        imgUrl: '//mia.aopcdn.com/goods/B4370225D2FE/3175966_e491e119a0.jpg@!g-h1200-w900'
      }
    ],
    info: {
      title: 'Luxurious Hooded  Faux Fur Color Block Coats',
      price: '50.68',
      oldPrice: '150.68',
      size: [
        'ss', 'xx', 'm'
      ],
      color: [
        'black', 'wihite', 'green'
      ],
      qty: 1,
      sku: 'pk123',
      description: {
        sku: '121578',
        Gender: 'women',
        Material: 'Polyester'
      },
      szieChart: []
    }
  }
})
