// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Liuxiu’s about',
  },
  copyEmail() {
    wx.setClipboardData({
      data: 'i@xiu.buzz',
    });
  },
  copyBlog() {
    wx.setClipboardData({
      data: 'https://liuxiu233.com',
    });
  },
  goLinks(){
    wx.navigateTo({
      url: 'links.wxml',
    })
  }
})
