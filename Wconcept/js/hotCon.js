
new Promise(function(resolve,reject){
	ajax({
		type:"get",
		url:"../json/hotProduct.json",
		data:{},
		success:function(data) {
			var data = JSON.parse(data);
			resolve(data);
		}
	})
}).then(function(data){
		var len = Math.ceil(data.length/20);
		var obtnList = document.querySelector(".hotConbtnList");
		var oBox = document.getElementById("hotConbox");
		var oLast = document.querySelector(".last");
		var ofirst = document.querySelector(".first");
		var iNow = 1;
		for(var i=0;i<len;i++){
			var a = document.createElement("a");
			a.className = "page";
			a.innerText = (i+1);
			obtnList.insertBefore(a,oLast);
		}
		var aA = document.querySelectorAll(".page");
		aA[0].className = "code1";

		pageNum(iNow)
		function pageNum(n){
			var str = "";
			for(var i=(n-1)*20;i<Math.min(data.length,20*n);i++){
				str+=  `<li data-id=${data[i].id}> 
                            <img src="${data[i].img}">
                            <h4>${data[i].title}</h4>
                            <p>${data[i].content}</p>
                            <span>${data[i].price}</span>
                            
                        </li>`
			}
			oBox.innerHTML = str;
		}

		

		oLast.onclick = function(){
			if(iNow == len){
				iNow = len;
			}else{
				iNow++;
			}
			pageNum(iNow)
			toggle(iNow)	
		}

		ofirst.onclick = function(){
			if(iNow == 1){
				iNow = 1;
			}else{
				iNow--;
			}
			pageNum(iNow)
			toggle(iNow)
		}


		function toggle(iNow){
			for(var j=0;j<aA.length;j++){
				aA[j].className = "";
			}
			aA[iNow-1].className = "code1"
		}
		
		for(var i=0;i<aA.length;i++){
			aA[i].index = i;
			aA[i].onclick = function(){
				for(var j=0;j<aA.length;j++){
					aA[j].className = "";
				}

				this.className = "code1";
				iNow = (this.index+1);
				pageNum(iNow)
			}
		}
		var oBox = document.getElementById("hotConbox");
		oBox.onclick = function(e){        
			var e = e||event;
			var target = e.target || e.srcElement;
			if(target.tagName =="IMG"){
				var id = target.parentNode.getAttribute("data-id");
				//url？后面的东西是不会被解析的
				location.href="details.html?id="+id;
				}
			}
		
}) 
