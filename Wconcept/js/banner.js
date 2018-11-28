// 轮播图
function Banner(){
    this.oBanner = document.getElementById("banner");
    this.oUl = document.querySelector("#banner>ul");
    this.aDir = document.querySelectorAll("#banner>#dir>a");
    this.aBtn = document.querySelectorAll("#banner>#btn>a");
    this.aLi = document.querySelectorAll("#banner>ul>li");
    this.iNow = 0;
    this.next = 0;
    this.timer = null;
}

Banner.prototype.init = function(){
    this.autoPlay();
	this.over();
	this.out();
	this.prev();
	this.next1();
	this.toggle();
}
Banner.prototype.toggle = function(){
    var _this = this;
    for(var i=0;i<this.aBtn.length;i++){
        this.aBtn[i].index = i;
        this.aBtn[i].onmouseover = function(){
            for(var j=0;j<_this.aBtn.length;j++){
                _this.aBtn[j].className = "";
            }

            this.className = "active";
            _this.next = this.index;
            _this.toImg();
        }
    }
}

Banner.prototype.next1 = function(){
    var _this = this;
    this.aDir[0].onclick = function(){
        if(_this.next==0){
            _this.next = _this.aLi.length-1;
        }else{
            _this.next--;
        }
        _this.toImg();
       
    }
}

Banner.prototype.prev = function(){
    var _this = this;
    this.aDir[1].onclick = function(){
        if(_this.next==_this.aLi.length-1){
            _this.next = 0;
        }else{
            _this.next++;
        }
        _this.toImg();
    }
}

Banner.prototype.over = function(){
    var _this = this;
    this.oBanner.onmouseover = function(){
        clearInterval(_this.timer);
        _this.aDir[0].style.display = "block";
        _this.aDir[1].style.display = "block";
    }
    
}

Banner.prototype.out = function(){
	var _this = this;
	this.oBanner.onmouseout = function(){
        _this.autoPlay();
        _this.aDir[0].style.display = "none";
        _this.aDir[1].style.display = "none";
    }
    
}


Banner.prototype.autoPlay = function(){
    var _this = this;
    this.timer = setInterval(function(){
        if(_this.next==_this.aLi.length-1){
            _this.next = 0;
        }else{
            _this.next++;
        }
        _this.aBtn[_this.iNow].className = "";
        _this.toImg();
    },2000)
}

Banner.prototype.toImg = function(){
    move(this.aLi[this.iNow],{opacity:0,});
    move(this.aLi[this.next],{opacity:100,});
    this.iNow = this.next;
    for(var i=0;i<this.aBtn.length;i++){
        this.aBtn[i].className ="";
    }
    this.aBtn[this.next].className = "active";
    
}

var banner = new Banner();
banner.init();