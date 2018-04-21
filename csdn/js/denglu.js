var main = new Vue({
      el:'#add',
      data :{
          phone :"",
          password :"",
      },
      mounted : function(){
          
      },
      methods :{
        login:function(){
                if(this.phone == ""){
                        alert("用户名不能为空");
                        return false;
                      };
                      if(this.password == ""){
                        alert("密码不能为空");
                        return false;
                  };
              		$.ajax({
              			'url' :"http://blog.com/api/user/doLogin",
              			'type' :"post",
              			'dataType':"json",
                    'data':{
                            "phone":this.phone,
                            "password":this.password,
                      },
                      success:function(res){
                          if(res.error_code == 0){
                            alert("登陆成功")
                          }else{
                          alert(res.message);
                          }
                       }
                  })
      	     }
        }
    })