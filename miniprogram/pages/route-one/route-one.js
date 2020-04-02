// miniprogram/pages/route-one/route-one.js
Page({
  data: {
    src: 'https://s1.ax1x.com/2020/04/01/G1cFPg.jpg'
  },
  previewImg: function (event) {
    wx.previewImage({
      current: this.data.src,
      urls: [this.data.src]
    })
  }
})