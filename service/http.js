var rootDocment = 'http://med.wanfangdata.com.cn';//接口域名
function req(url, data, callback) {
  wx.request({
    url: rootDocment + url,
    data: data,
    method: 'post',
    header: { 'Content-Type': 'application/json' },//1.若返回的不是json数据此写法就会报500错误
    // header: { 'Content-Type':'application/x-www-form-urlencoded'},
    // dataType:'json',  //2.该写法请求参数不会自动序列化需要使用JSON.stringify（data）转化字符串才可以正常请求
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