var box1 = document.getElementById("go_to_topBtn");

	window.onscroll = function(){
		var sTop = document.documentElement.scrollTop || document.body.scrollTop;

		if(sTop>400){
			box1.style.display = "block";
		}else{
			box1.style.display = "none";
		}
	}

	box1.onclick = function(){
		document.documentElement.scrollTop  =  document.body.scrollTop  = 0;
	}