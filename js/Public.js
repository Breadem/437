window.onload = function(){
	fox_changecolor();
	fox_search();
}
/*创建团队时选择成员后变色*/
var fox_changecolor = function(){
	var label = $('.Project_Members label');
	var i;
	var j;
	for(i = 0; i<label.length; i++){
		(function (label, i){
			label[i].onclick = function (){
				if(this.chooise){
					this.style.cssText += "background:#FFF;color:#777";
					this.chooise = false;		
				}else{
					this.style.cssText += "background:#daded0;color:#777";
					this.chooise = true;	
				}	
			}	
		})(label, i)
	}
	$(".Choice_All").click(function(){   
	    for(j = 0;j<label.length;j++){
	    	label[j].click();
	    }
	});
}
//搜索
var fox_search = function(){
	var button = $("#Fox_SearchButton")[0];
	var input = $(".Fox_SearchInput")[0];
	button.onclick = function(){
		if(input.style.width == "0px" || input.style.width == ""){
			input.style.width="150px";
			input.focus();
		}else if(input.value != ""){
			//执行查询
			alert("搜索");
			input.value = "";
		}else{
			input.style.width="0px";
		}
	}
}