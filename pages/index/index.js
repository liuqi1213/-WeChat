<<<<<<< HEAD
import {ClassicModel} from "../../models/classic.js"
import {LikeModel} from "../../models/like.js"
let calssicmodel=new ClassicModel()
let likemodel=new LikeModel()
=======
>>>>>>> 7fc184d8188584dccd3cdf35842df416284e6ff0
import {HTTP} from "../../utils/http.js"
let http=new HTTP()
//index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
   resData:null,
   first:false,
   latest:true
=======
>>>>>>> 7fc184d8188584dccd3cdf35842df416284e6ff0
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< HEAD
	 calssicmodel.getLatest((res)=>{
		this.setData({
			resData:res
		})
			console.log(res);
	 })
  
  
  
  //   http.request({
  //   	url:"classic/latest",
		// success:(res)=>{
		// 	console.log(res)
		// }
  //   })
 //  
 //  wx.request({
 //  	url:"http://bl.7yue.pro/v1/like/cancel",
	// method:"POST",
	// 
	// data:{
	// 	art_id:1,
	// 	type:100
	// },
	// header:{
	// 	 "content-type":"application/x-www-form-urlencoded",
	// 	 // "content-type":"json",
	// 	'appkey':"RdshydjBvcYZhMZC",
	// },
	// success: (res) => {
	// 	console.log(111);
	// 	console.log(res);
	// }
 //  })
  },



onlike:function(event){
	let behavior=event.detail.behavior;		
	likemodel.like(behavior,this.data.resData.id,this.data.resData.type);
},
onNext:function(event){
	console.log(event);
},
onPrevious:function(event){
	let index=this.data.resData.index
	calssicmodel.onPrevious(index,(res)=>{
		// console.log(res);
		this.setData({
			resData:res,
			first:calssicmodel.isFirst(res.index),
			latest:calssicmodel.isLatest(res.index)
		})
	})
},
  //   http.request({
  //   	url:"classic/latest",
		// success:(res)=>{
		// 	console.log(res)
		// }
  //   })
  // },

=======
    http.request({
    	url:"classic/latest",
		success:(res)=>{
			console.log(res)
		}
    })
  },

>>>>>>> 7fc184d8188584dccd3cdf35842df416284e6ff0
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
<<<<<<< HEAD
    console.log(calssicmodel.isFirst());
=======
>>>>>>> 7fc184d8188584dccd3cdf35842df416284e6ff0
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})