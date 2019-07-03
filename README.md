# WechatMiniApp_Animation
2019.07.03封装好的小程序运动。
## 引用：
```js
onLoad: function (options) 
{
  this.app = getApp();   
},
onShow: function () 
{
  this.app.slideupshow(this, 'slide_up_1', 200, 1);
},
onHide: function () 
{
  this.app.slideupshow(this, 'slide_up_1', 200, 0);
},
```

```html
<view class="slide_up" animation="{{slide_up_1}}"></view>
```
