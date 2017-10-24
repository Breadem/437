$(document).ready(function(){
	$("#action")[0].addEventListener('click', function (){
		$("#action")[0].style.display = "none";
		$("#title")[0].style.cssText += "top:2%";
		$("#signUp")[0].style.cssText += "opacity:1;transform: scale(1);";
		var loyarList = $(".loyar");
		for(var i = 0;i < loyarList.length;i++){
			loyarList[i].style.cssText += "transform: scale(1);opacity:1";
		}
	});

	$(".Fox_LoginButton")[0].addEventListener('click', function	(){
		comm.result('../php/login.php', 'user_select', [$('.Fox_DhInput')[0].value, $('.Fox_DhInput')[1].value], function (result){
			var result = JSON.parse(result);
			result.value ? window.location.href = "../../html/SSTI_Person.html" : "";
		});
	})
	$(".Fox_LoginButton")[1].addEventListener('click', function	(){
		comm.result('../php/sq.php', 'http://10.1.65.33:81/login', [$('.Fox_DhInput')[0].value, $('.Fox_DhInput')[1].value], function (result){
			var result = JSON.parse(result);
			if(result.msg == "登录成功"){
				comm.result('../php/login.php', 'user_insert', [result.data.id, result.data.account, $('.Fox_DhInput')[1].value], function (result){
					var result = JSON.parse(result);
					result.value[0].userId ? window.location.href = "../../html/SSTI_Person.html" : "";
				});
			}
		});
	})
	$(".Fox_LoginButton")[2].addEventListener('click', function	(){
		comm.result('../php/login.php', 'user_insert', ["", $('.Fox_DhInput')[2].value, $('.Fox_DhInput')[3].value], function (result){
			var result = JSON.parse(result);
			result.value ? window.location.href = "../../html/SSTI_Person.html" : "";
		});
	})
	switchSign();
});
var switchSign = function(){
	var Btn = $(".sginBtn");
	for(var i = 0;i<Btn.length;i++){
		(function(Btn,i){
			Btn[i].onclick = function(){
				$(Btn[0]).removeClass("active");
				$(Btn[1]).removeClass("active");
				$(Btn[i]).addClass("active");
				if(i == 0){
					$(".Fox_LoginDiv")[0].style.marginLeft = "0px";
				}else{
					$(".Fox_LoginDiv")[0].style.marginLeft = "-480px";
				}
			}
		})(Btn,i);
	}
}