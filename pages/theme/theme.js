Page({
  data: {
    theme: []
  },
  onLoad: function(options) {
    var that = this;
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/themes',
      headers: {
        'Content-Type': 'application/json'
      },
      success(res) {
        that.setData({
          theme: res.data.others
        })
      }
    })
  },

})