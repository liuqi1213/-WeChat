// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    status:{
      type:Boolean
    },
    count:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

    yesimg:"img/like.png",
    noimg:"img/like@dis.png",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(event){
      let status=this.properties.status;
      let count=this.properties.count;
      count=status?count+1:count-1;
     this.setData({
				count:count,
				status:!status
		 }) 
    }
  }
})
