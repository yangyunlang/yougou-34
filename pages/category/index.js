import request from "../../utils/request.js"

// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //总的数据
    navs:[],
    //索引
    current:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求菜单栏数据
    request({
      url:"/categories"
    }).then(res=>{
      //返回的数组
      const {message}=res.data;
      //修改数据
      this.setData({
        navs:message
      })
    })
  },

  //菜单栏点击时触发
  handleChange(event){
    const{index}=event.currentTarget.dataset;

    this.setData({
      current:index
    })
  }
})