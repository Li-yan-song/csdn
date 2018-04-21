var boke = new Vue({
      el:'#boke',
      data :{
          banner:[],
          blog_lists:[],
          classify_lists:[],
      },
      mounted : function(){
          this.getData();
          // this.swiperBanner();
      },
      methods :{
      	getData :function(){
      		var that = this;
      		$.ajax({
      			'url' :"http://blog.com/api/index/index",
      			'type' :"get",
      			'dataType':"json",
      				 'success':function(res){
	                  	 	that.banner= res.data.banner;
	                  	 	that.blog_lists = res.data.blog_lists;
	                  	 	that.classify_lists = res.data.classify_lists;
	                  		that.swiperBanner();
	                  	},
	                  	 'error':function(res){
	                  	 	alert("111");
	                  	 }
      			})
      		            
	    	},
	    	swiperBanner:function(){
		                  	var mySwiper = new Swiper('.swiper-container',{
							loop: true,
							autoplay:{
							delay:2500,
							disableOnInteraction:false,
						},
					        observer: true,
					        observeParents:true,
					      })
	            },
	    }
})
