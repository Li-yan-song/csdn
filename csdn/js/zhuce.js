var main = new Vue({
      el:'#add',
      data :{
          phone :"",
          password :"",
          uname :"",
      },
      mounted : function(){
        
      },
      methods :{
        Reg:function(){
                if(this.phone == ""){
                        alert("用户名不能为空");
                        return false;
                      };
                      if(this.password == ""){
                        alert("密码不能为空");
                        return false;
                  };
                  if (this.password != this.uname) {
                    alert("密码不一致");
                    return false;
                  };
                  $.ajax({
                    'url' :"http://blog.com/api/user/doReg",
                    'type' :"post",
                    'dataType':"json",
                    'data':{
                            "phone":this.phone,
                            "password":this.password,
                            "uname":this.uname,
                      },
                      success:function(res){
                          if(res.error_code == 0){
                            alert("注册成功")
                          }else{
                          alert(res.message);
                          }
                       }
                  })
             }
        }
    })