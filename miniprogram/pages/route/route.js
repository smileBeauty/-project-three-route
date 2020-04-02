// miniprogram/pages/route/route.js
Page({
  data: {
    routeMap: {
      'route-one': 'pages/route-one/route-one',
      'route-two': 'pages/route-two/route-two',
      'route-three': 'pages/route-three/route-three',
      'lightSimulationDescription': 'pages/light-simulation-description/light-simulation-description',
      'lightSimulationPratice': 'pages/light-simulation-pratice/light-simulation-pratice',
      'default': 'pages/route-one/route-one'
    }
  },
  clickRoute(e) {
    const url = this.data.routeMap[e.target.id]
    if (!url) {
      url = this.data.routeMap['default']
    }
    wx.navigateTo({
      url: '../../' + url
    })
  }
})