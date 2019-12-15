var userAccount = document.getElementById('userAccount');
var userPass = document.getElementById('userPass');
var userPass_ = document.getElementById('userPass_');
var userName = document.getElementById("userName");
var information = document.getElementById("information");
var email = document.getElementById("email");
var telephone = document.getElementById("telephone");
var handup = document.getElementById("handup");

var test1 = false;
var test2 = false;
var test3 = false;
var test4 = false;
var test5 = false;
var test6 = false;
var test7 = false;

var reg =/zhengze/;

var items = document.querySelectorAll(".item_");

userAccount.onblur = function(){
	var reg = /^\w{6,18}$/;
	if (this.value==""){
         items[0].innerHTML = "Username can not be empty";
         items[0].style.color = "red";
	}else{
		if(!reg.exec(userAccount.value)){
			items[0].innerHTML = "Please enter 6-18 digits, letters,_";
			items[0].style.color = "red";
		}else{
			items[0].innerHTML = "Correct Format";
			items[0].style.color = "green";
			test1 = true;
		}
	}

}

userPass.onfocus = function(){
	items[1].innerHTML = "Please enter 6-18 digits, letters,_";
    items[1].style.color = "green";
}
userPass.onblur = function(){
	var reg = /^\w{6,18}$/;
	if (this.value==""){
         items[1].innerHTML = "Password can not be empty";
         items[1].style.color = "red";
	}else{
		if(!reg.exec(userPass.value)){
			items[1].innerHTML = "Please enter 6-18 digits, letters, underscores,_";
			items[1].style.color = "red";
		}else{
			items[1].innerHTML = "Correct Format";
			items[1].style.color = "green";
			test2 = true;
		}
	}
}

userPass_.onfocus = function(){
	items[2].innerHTML = "Please confirm Password is same";
    items[2].style.color = "green";
}
userPass_.onblur = function(){
	if (this.value==""){
         items[2].innerHTML = "Password can not be empty";
         items[2].style.color = "red";
	}else{
		if(this.value!=userPass.value){
	      items[2].innerHTML = "Two passwords are inconsistent";
          items[2].style.color = "red";
		}else{
			items[2].innerHTML = "confirm password";
			items[2].style.color = "green";
			test3 = true;
		}
	}
}

userName.onfocus = function(){
	      items[3].innerHTML = "Please enter your name";
          items[3].style.color = "green";
}
userName.onblur = function(){
	var reg = /^[a-zA-Z]\w{2,20}$/ ;
	if(this.value==""){
		  items[3].innerHTML = "UserName cannot be empty";
          items[3].style.color = "red";
	}else{
		if(!reg.exec(userName.value)){
		  items[3].innerHTML = "Please enter correct userName";
          items[3].style.color = "red";
		}else{
			items[3].innerHTML = "Correct";
			items[3].style.color = "green";
			test4 = true;
		}
	}
}

information.onfocus = function(){
	        items[4].innerHTML = "Please enter 8 digits ID";
			items[4].style.color = "green";
}
information.onblur = function(){
	var reg = /^\d{8}[0-9x]$/;
	if(this.value==""){
		  items[4].innerHTML = "ID cannot be empty";
          items[4].style.color = "red";
	}else{
		if(!reg.exec(information.value)){
		  items[4].innerHTML = "Wrong format";
          items[4].style.color = "red";
		}else{
			items[4].innerHTML = "Correct";
			items[4].style.color = "green";
			test5 = true;
		}
	}
}

email.onfocus = function(){
	      items[5].innerHTML = "Please input your email";
          items[5].style.color = "green";
}
email.onblur = function(){
	var reg = /^\w+@\w+\.[a-zA-Z_]{2,4}$/;
	if(this.value==""){
		  items[5].innerHTML = "Email cannot be empty ";
          items[5].style.color = "red";
	}else{
		if(!reg.exec(email.value)){
		  items[5].innerHTML = "Email format is incorrect";
          items[5].style.color = "red";
		}else{
			items[5].innerHTML = "Correct";
			items[5].style.color = "green";
			test6 = true;
		}
    }
}

telephone.onfocus = function(){
	      items[6].innerHTML = "Please enter your phone number";
          items[6].style.color = "green";
}
telephone.onblur = function(){
	var reg = /^\d{11}$/;
	if(this.value==""){
		  items[6].innerHTML = "Please enter your 11 digits phone number";
          items[6].style.color = "red";
	}else{
		if(!reg.exec(telephone.value)){
		  items[6].innerHTML = "Phone number format is incorrect";
          items[6].style.color = "red";
		}else{
			items[6].innerHTML = "Correct";
			items[6].style.color = "green";
			test7 = true;
		}
    }
}
handup.onclick = function(){
	if(test1 == false ||test2 == false ||test3 == false ||test4 == false ||test5 == false ||test6 == false||test7 == false){
		alert("The information you filled in is incorrect");
	}else{
       alert("confirm submit");
}
	}
	
