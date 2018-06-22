//app.js
var http = require('service/http.js');
var util = require('service/util.js');
App({
  scene:1096,
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  },
  //注册成为全局函数
  // rquestInterface: {
  //   req: http.req
  // },
  resetIamgeUtil: {
    imageUtil: util.imageUtil
  }
})