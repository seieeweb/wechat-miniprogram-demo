// pages/components/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    active: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange: function(e) {
      const idx = e.detail;
      const urlList = ['../demo/demo', '../animal/animal'];
      const url = urlList[idx];
      console.log(`switch to ${url}`);
      wx.switchTab({
        url
      });
      // this.setData({
      //   active: e.detail
      // })
    }
  }
})