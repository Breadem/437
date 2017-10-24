$(document).ready(function (){
	comm.addEventListener($("#sginUp")[0], 'click', function (){
		comm.result('../php/login.php', 'select_user', [$('#userName')[0].value, $('#passWord')[0].value], function (result){
			var result = JSON.parse(result);
			result.value ? window.location.href = "SSTI_Person.html" : "";
		});
	});

	comm.addEventListener($("#to")[0], 'click', function (){
		comm.result('../php/fw.php', 'http://10.1.65.33:81/login', [$('#userName')[0].value, $('#passWord')[0].value], function (result){
			var result = JSON.parse(result);
			if(result.msg == "登录成功"){
				comm.result('../php/login.php', 'user_insert', [result.data.id, result.data.account, $('#passWord')[0].value], function (result){
					var result = JSON.parse(result);
					result.value[0].userId ? window.location.href = "SSTI_Person.html" : "";
				});
			}
		});
	})
});