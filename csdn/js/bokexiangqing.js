var boke_one= new Vue({
      el:'#boke_one',
      data :{
          blog_info:[],
      },
      mounted : function(){
          this.getData();
      },
      methods :{
      	getData :function(){
      		var that = this;
          var a = window.location.search.split("=")[1];
      		$.ajax({
      			'url' :"http://blog.com/api/blog/info?id=35",
      			'type' :"get",
      			'dataType':"json",
            'data': {
                  id: window.location.search.split("=")[1],
                  },
              
      				 'success':function(res){
	                  	 	that.blog_info= res.data.blog_info;
	                  	 },
	                  	 'error':function(res){
	                  	 	alert("111");
	                  	 }
      		})
      	},
          collect: function(){
            var that = this;
             $.ajax({
                        url: "http://blog.com/api/collect/add",
                        type: "post",
                        dataType: "json",
                        data: {
                            "user_id": localStorage.getItem("user_id"),
                            "blog_id":that.blog_info.id,
                        },
                        success:function(res){
                            if(res.error_code == 0){
                                alert("收藏成功了");
                                window.location.href="./collect.html"
                            }else {
                                alert(res.message);
                            }
                        }
                    })
          },
      }
})