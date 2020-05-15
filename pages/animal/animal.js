// pages/animal/animal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '1'
  },

  onInputChange: function(event) {
    this.setData({
      inputValue: event.detail,
    });
  },

  fetchInfo: function(event) {
    var page = this;
    const id = this.data.inputValue;
    wx.request({
      url: `http://acnhapi.com/fish/${id}`,
      success: function(res) {
        console.log(res);
        page.setData({
          name: res.data.name['name-cn']
        });
      }
    });
    this.setData({ image: `http://acnhapi.com/images/fish/${id}` });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})