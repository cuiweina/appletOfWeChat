var app = getApp()
Page({
  data: {
    array: [{
      message: 'foo'
    }, {
      message: 'bar'
    }]
  },
  onLoad: function (opt) {
    app.rquestInterface.req('/Paper/Search?q=临床&p=1', {}, function (res) {
      console.log(res);
    });
  }
})