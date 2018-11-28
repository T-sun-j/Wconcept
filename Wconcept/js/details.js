

var urlId = location.href.split("?")[1].split("=")[1];
var content = document.getElementById("content");
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
    var str,str1="",str2;
    
    for(var i=0;i<data.length;i++){
        if(data[i].id == urlId){
            str=`<div id="box">
                <div id="filter"></div>
                <img src="${data[i].img}" class="middle" width="400" height="600">
            </div>`
            
            for(var j=0;j<data[i].minImg.length;j++){
                var min_img = data[i].minImg[j];
                str1+=`<img src=${data[i].minImg[j]} data-url=${min_img} class = "min">`
            }
            str2 = `${str}<div class="minImg">${str1}</div>
                        <div class="max">
                        <img src="${data[i].img}" class="bigImg" width="800" height="1200">
                    </div>`;
            break;
        }
    }
  
    content.innerHTML = str2;
    var ProductPrice = document.getElementById("ProductPrice");
    var str3 = "";
    for(var k=0;k<data.length;k++){
        if(data[k].id == urlId){
            str3=` <p class="storePrice clearfloat">
                        <em class="left mt12">价格：</em>
                        <span class="salePrice left">¥&nbsp;${data[k].price.slice(2)*0.91}</span>
                        <i class="discountNum left">91折</i>
                        <span class="originPrice left" style="display: inline;">${data[k].price}</span>
                    </p>
                    <p class="storePrice">
                        <em>含税价：</em>
                        <span class="taxPrice">￥${data[k].price.slice(2)*0.91+10}</span>
                    </p>`
        }
    }
    ProductPrice.innerHTML = str3;
    var addtocart = document.getElementById("addtocart");
    addtocart.onclick = function(e){   
        window.location.href='../html/shoppingcar.html';     
        // var e = e||event;
        // var target = e.target || e.srcElement;
        
        // if(target.tagName =="IMG"){
        //     var id = target.parentNode.getAttribute("data-id");
        //     //url？后面的东西是不会被解析的
        //     location.href="details.html?id="+id;
        //     }
        // }
        // if(target.tagName == 'BUTTON' && target.className == "addtocart"){
            var goodsId = urlId;
            var goods = {};
            if(getCookie("info")){
                arr = JSON.parse(getCookie("info"));
                
            }
            else{
                var arr = [];
                
                }
    
                if(arr.length>0){
                    
                    for(var i = 0;i < arr.length; i++){
                                
                            var bStop = false;
                            if(arr[i].id == goodsId){
                                arr[i].num++;
                                bStop = true;
                                break;
                            }		                 		
                        }
                    if(!bStop){
                        goods.id = goodsId;
                        goods.num = 1;
                        arr.push(goods);  
                    }
                }else{
                        goods.id = goodsId;
                        goods.num = 1;
                        arr.push(goods);
                    } 
                    setCookie("info",JSON.stringify(arr),7);
        }


    function Magnifier(container,options){
        this.content = document.querySelector(container);
        this.minImg = this.content.querySelector(options.minImg);
        this.middle = this.content.querySelector(options.middle);
        this.bigImg = this.content.querySelector(options.bigImg);
        this.filter = this.content.querySelector(options.filter);
        this.box = this.content.querySelector(options.box);
        this.max = this.content.querySelector(options.max);
    
    }
    
    
    Magnifier.prototype={
        init : function(){
            // var str = "";
            // for(var i=0;i<5;i++){
            //     str+="<img src=imgs/"+(i+1)+"-small.jpg class='small'  data-url=imgs/"+(i+1)+"-large.jpg>";
            // }
            // this.minImg.innerHTML = str;
    
            this.over();
            this.boxOver();
            this.filterMove();
            this.boxOut();
        },
        over : function(){
            var _this = this;
            // var aminImg = document.getElementById("");
            this.minImgs = this.minImg.querySelectorAll("img");
           
            for(var i=0;i<this.minImgs.length;i++){
                
                this.minImgs[i].onmouseover = function(){
                     
                    _this.src = this.getAttribute("data-url");
                    _this.middle.src = _this.src;
                    _this.bigImg.src = _this.src
    
                }
            }
        },
        boxOver : function(){
            var _this = this;
            this.box.onmouseover = function(){
                _this.filter.style.display = "block";
                _this.max.style.display = "block";
            }
        },
        filterMove : function(){
            var _this = this;
            this.filter.onmousemove = function(e){
                var e = e||event;
                var l = e.pageX - _this.content.offsetLeft - this.offsetWidth/2;
                var t = e.pageY - _this.content.offsetTop - this.offsetHeight/2;
    
                l =  l>_this.box.offsetWidth - this.offsetWidth?_this.box.offsetWidth - this.offsetWidth:(l<0?0:l);
    
                t =  t>_this.box.offsetHeight - this.offsetHeight?_this.box.offsetHeight - this.offsetHeight:(t<0?0:t);
    
    
                this.style.left = l+"px";
                this.style.top = t +"px";
                _this.bigImg.style.left = -2*l+"px";
                _this.bigImg.style.top = -2*t+"px";
    
            }
        },
        boxOut : function(){
            var _this = this;
            this.box.onmouseout = function(){
                _this.filter.style.display = "none";
                _this.max.style.display = "none";
            }
        }
    }
    
    new Magnifier("#content",{
        minImg:".minImg",
        middle:".middle",
        bigImg:".bigImg",
        filter:"#filter",
        box:"#box",
        max:".max"
    }).init()
    

    
    
 })

