# NilToast

`NilToast` 没有`AMD`,`CMD`等规范，同时也没有使用`ESLint`代码检查的工具。

## 下载

```cmd
git clone https://github.com/zerotofull/NilToast.git
```

## 使用

1. 标签引入

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/zerotofull/NilToast/dist/toast.min.css"> </link>
<script src="https://cdn.jsdelivr.net/gh/zerotofull/NilToast/dist/toast.min.js"> </script>
```

2. 下载后使用

## 食用指北

如需修改样式,请先`clone`。
如果只需要部分代码，那么`star`后，自取。

- 显示一个最基础的 Toast 弹窗

```js
NilToast.msg('这是一条测试消息')
```

- 显示加载中

```js
// 显示加载中
NilToast.loading.show()
setTimeout(function () {
  // 关闭加载中
  NilToast.loading.close()
}, 2000)
```

- 显示 Alert 对话框

```js
NilToast.dialog.alert({
  // 标题
  title: 'hello',
  // 弹窗消息
  msg: '提示 : 这是一条提示',
  // 确认按钮文字
  confirmText: 'OK',
  // 确认按钮文字样式
  confirmStyle: 'color: red',
  // 确认按钮
  confirmClick: function (e, done) {
    console.log('hello', e)
    // 关闭
    done()
  },
})
```

- 显示 Confirm 对话框

```js
NilToast.dialog.confirm({
  title: 'hello',
  msg: '提示 : 这是一条提示',
  confirmText: 'OK',
  confirmStyle: 'color: red',
  confirmClick: function (e, done) {
    console.log('hello', e)
    done()
  },
  cancelText: '不要',
  cancelStyle: 'color: blue',
  cancelClick: function (e, done) {
    NilToast.msg('宁点了取消')
    done()
  },
})
```
