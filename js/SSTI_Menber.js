window.onload = function(){
	Fox_DelectMenber();
}
Fox_DelectMenber = function(){
	var button = $(".Project_Members_jiesan label");
	var i;
	for(i = 0; i<button.length; i++){
		(function(button,i){
			button[i].onclick = function(){
				this.style.opacity = "0"
			}
		})(button,i);
	}
}