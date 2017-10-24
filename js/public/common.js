var comm = {
	addEventListener: function (dom, type, callback){
		dom.addEventListener(type, callback);
	},
	result: function (url, address, arg, callback){
		$.post(url,{
			address: address,
			arg: arg
		},
		function (result){
			callback ? callback(result) : "";
		})
	}
}