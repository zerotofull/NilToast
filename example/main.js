
var EVENTS = {
  showMsg: function() {
    NilToast.msg("这是一条测试消息")
  },
  showLoading: function() {
    NilToast.loading.show()
    setTimeout(function(){
      NilToast.loading.close()
    }, 2000);
  },
  showAlertDialog: function() {
    NilToast.dialog.alert({
      title: 'hello',
      msg: '提示 : 这是一条提示',
      confirmText: 'OK',
      confirmStyle: 'color: red',
      confirmClick: function (e,done){
        // return
        console.log("hello",e);
        done()
      }
    })
  },
  showConfirmDialog: function () {

    NilToast.dialog.confirm({
      title: 'hello',
      msg: '提示 : 这是一条提示',
      confirmText: 'OK',
      confirmStyle: 'color: red',
      confirmClick: function (e,done){
        // return
        console.log("hello",e);
        done()
      },
      cancelText: '不要',
      cancelStyle: 'color: blue',
      cancelClick: function (e,done){
        // return
        NilToast.msg("宁点了取消")
        done()
      }
    })
  }
}







document.querySelectorAll('.btn').forEach(function (item) {
  item.onclick = function(e) {
    var method = e.target.dataset.method
    console.log('[ method ] >', method)
    EVENTS.hasOwnProperty(method) && EVENTS[method]()
  }
})