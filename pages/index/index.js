//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage: function () {
    return {
      title: '万方医学挑战赛',
      desc: '万方医学挑战赛等你来赛!',
      // path: '/page/index/index'
    }
  },
})
//测试代码暂时保留
// const app = getApp()
// Page({
//   data: {
//     imageSrc: '../../images/background.png'
//   },
//   imageLoad: function (e) {
//     var imageSize = app.resetIamgeUtil.imageUtil(e)
//     this.setData({
//       imagewidth: imageSize.imageWidth,
//       imageheight: imageSize.imageHeight
//     })
//   }
  // data: {
  //   imgalist: ['https://www.cslpyx.com/weiH5/jrx.jpg', 'https://www.cslpyx.com/weiH5/mmd.jpg'],
  // },
  // onLoad: function (opt) {
  //   wx.showLoading({
  //     title: '测试加载',
  //   })
  //   app.rquestInterface.req('/Paper/Search?q=临床&p=1', {}, function (res) {
  //     wx.hideLoading({});
  //   })
  //   wx.getUserInfo({
  //     success: function (e) {
  //       console.log(e.userInfo)
  //     }
  // })
  // wx.requestPayment({
  //   timeStamp: '',
  //   nonceStr: '',
  //   package: '',
  //   signType: '',
  //   paySign: '',
  // })
  // wx.getLocation({
  //   success: function(res) {
  //     console.log(res.longitude);
  //     console.log(res.latitude)
  //   },
  // })
  // wx.scanCode({
  //   success: function (res) {
  //     console.log(res)
  //   }
  // })
  // wx.showLoading({
  //   title: '测试加载',
  // })
  // }
// })
