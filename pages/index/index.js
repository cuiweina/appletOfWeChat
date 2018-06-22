//index.js
//获取应用实例
const app = getApp()
const utils = require('../../utils/util.js')
Page({
  data: {
    list: [],
    loading:false 
  },
  //事件处理函数
  bindViewTap(e) {
    wx.navigateTo({
      url: '../detail/detail?id=' + e.target.dataset.id
    })
  },
  //加载更多
  loadMore:function(e){
    if (this.data.list.length === 0) return
    var date = this.getNextDate()
    var that = this
    that.setData({ loading: true })
    wx.request({
      url: 'http://news.at.zhihu.com/api/4/news/before/20180620',
      headers:{
        'Content-Type':'application/json'
      },
      success:function(res){
        that.setData({
            loading:false,
            list: that.data.list.concat([{ header: utils.formatDate(date) }]).concat(res.data.stories)
        })
      }
    })
  },
  getNextDate:function(){
    const now = new Date()
    now.setDate(now.getDate() - this.index++)
    return now
  },
  // 初始化加载
  onLoad: function () {
    let that = this
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/latest',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          banner: res.data.top_stories,
          list: [{ header: '今日热闻' }].concat(res.data.stories)        
        })
      }
    })
    this.index = 1
  }
})

