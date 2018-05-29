var rootDocment = 'http://med.wanfangdata.com.cn';//接口域名
function req(url, data, callback) {
  wx.request({
    url: rootDocment + url,
    data: data,
    method: 'post',
    header: { 'Content-Type': 'application/json' },//若返回的不是json数据就会报500错误
    success: function (res) {
      return typeof callback == "function" && callback(res.data)
    },
    fail: function () {
      return typeof callback == "function" && callback(false)
    }
  })
}

//暴露req方法，使得其他文件可以访问
module.exports = {
  req: req
}