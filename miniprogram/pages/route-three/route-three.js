// miniprogram/pages/route-three/route-three.js
Page({
  data: {
    src: 'https://s1.ax1x.com/2020/04/01/G1cCa8.jpg'
  },
  previewImg: function (event) {
    const src = event.currentTarget.dataset.src
    wx.previewImage({
      current: this.data.src,
      urls: [this.data.src]
    })
  }
})