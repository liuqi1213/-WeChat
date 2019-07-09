// components/like/index.js
Component({
  /**
<<<<<<< HEAD

=======
   * 组件的属性列表
   */
  properties: {
    status:{
      type:Boolean
    },
    count:{
      type:Number
>>>>>>> 7fc184d8188584dccd3cdf35842df416284e6ff0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
<<<<<<< HEAD
    yesimg: "img/like.png",
    noimg: "img/like@dis.png",
  },

  /**
   * 组件的属性列表
   */
  properties: {
    status: {
      type: Boolean,
      value: false
    },
    count: {
      type: Number,
      value: 0
			}
    },

    methods: {
      onLike: function (event) {
        let status = this.properties.status;
        let count = this.properties.count;

        count = status ? count - 1 : count + 1;
        this.setData({
          status: !status,
          count: count
        })
        let behavior = this.properties.status ? "like" : "cancel";
        this.triggerEvent("like", {
          behavior: behavior
        }, {})

        count = status ? count + 1 : count - 1;
        this.setData({
          count: count,
          status: !status
        })

      }
    }
  })
=======

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
>>>>>>> 7fc184d8188584dccd3cdf35842df416284e6ff0
