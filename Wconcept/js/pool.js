/*
	随机数
	参数：
		n:起始数字
		m:范围
 */
function numRandom(n,m) {
	if(n>m){
		return parseInt(m+Math.random()*(n-m+1));
	}else{
		return parseInt(n+Math.random()*(m-n+1));
	}
}
/*
冒泡排序
 */
function bubbleSort(arr){
	var temp;
	for(var i=1;i<arr.length;i++){
		for(var j=0;j<arr.length-i;j++){
			if(arr[j]>arr[j+1]){
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}

	return arr;
}

/*
选择排序

 */
function selectSort(arr){
	var temp;
	 for(var i=0;i<arr.length-1;i++){
	 	for(var j=i+1;j<arr.length;j++){
	 		if(arr[i]>arr[j]){
	 			temp = arr[i];
	 			arr[i] = arr[j];
	 			arr[j] = temp;
	 		}
	 	}		
	 	
	 }
	 return arr;
}

/*
快速排序法

 */


function quickSort(arr){
	if(arr.length<=1){
		return arr;
	}

	//获取下标
	var midIndex = arr.length%2 == 0?arr.length/2:(arr.length+1)/2;
	//取中间值
	var mid = arr[midIndex];
	//定义左边的数组
	var left = [];
	//定义右边的数组
	var right = [];

	for(var i=0;i<arr.length;i++){
		if(i !=midIndex && arr[i]<=mid){
			left.push(arr[i]);
		}

		if(i !=midIndex && arr[i]>mid){
			right.push(arr[i]);
		}
	}

	return quickSort(left).concat(mid).concat(quickSort(right))
}

/*
随机验证码

n:需要要多少位的验证码
 */
function randomCode (n) {
	var str = "";
	for(var i=0;i<n;i++){
		var num = parseInt(48+Math.random()*(122-48+1));
		while((num>=58&& num<=64) || (num>=91&&num<=96)){
			num = parseInt(48+Math.random()*(122-48+1));
		}
		str+=String.fromCharCode(num);
	}

	return str;
}

/*
随机颜色

 */

function randomToColor(){
	var R = numRandom(0,255);
	var G = numRandom(0,255); 
	var B = numRandom(0,255);

	return "rgb("+R+","+G+","+B+")"; 
}

/*
随机颜色2
 */
function randomTo2Color(){
	var R = numRandom(0,255)
	var G = numRandom(0,255)
	var B = numRandom(0,255)

	return kzero(R,G,B);
}


function kzero(r,g,b){
	r = r.toString(16).length<2?"0"+r.toString(16):r.toString(16)
	g = g.toString(16).length<2?"0"+g.toString(16):g.toString(16)
	b = b.toString(16).length<2?"0"+b.toString(16):b.toString(16)
	
	return "#"+r+g+b;
}

/*
将时间对象转换为字符串
 */
function dateToString(d,sign) {
	if(!sign){
		sign = "/";
	}

	return d.getFullYear()+sign+ dzero((d.getMonth()+1))+sign+dzero(d.getDate())+" "+dzero(d.getHours())+":"+dzero(d.getMinutes())+":"+ dzero(d.getSeconds())
}

function dzero(n){
	if(n<10){
		return "0"+n;
	}

	return n;
}

/*
倒计时
 */
 function cDown(time){
	var day = Math.floor(time/(24*60*60*1000));
	var h = Math.floor(time%(24*60*60*1000)/(60*60*1000));
	var m = Math.floor(time%(24*60*60*1000)%(60*60*1000) / (60*1000));
	var s = Math.floor((time%(24*60*60*1000)%(60*60*1000) % (60*1000) / 1000));
	return {
		day:day,
		h:h,
		m:m,
		s:s
	}
}

/*
获取非行间样式
 */

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr]
	}
}

/* 
	获取 设置自定义属性
*/
function attr(){
	if(arguments.length == 2){
		return arguments[0].getAttribute(arguments[1]);
	}

	if(arguments.length == 3){
		arguments[0].setAttribute(arguments[1],arguments[2]);
	}
}

/*
	隐藏 显示
*/

function show(options){
	var el = document.querySelector(options.el);
	el.style.display = options.state;
}

/*
  获取id
 */

 function $(id) {
 	return document.getElementById(id.slice(1));
 }

 /*
 获取当前元素距离页面的便宜量

  */
 
function offset(el){
	var obj = {};
	obj.l = el.offsetLeft;
	obj.t = el.offsetTop;

	while(el.offsetParent){
		el = el.offsetParent;
		obj.l += el.offsetLeft;
		obj.t += el.offsetTop;
	}

	return obj;
}

/*
阻止浏览器默认行为
 */

function prevent(e){
	if(e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue = false;
	}
}

/*
事件监听

options:
	el:对象
	type:事件类型
	callback:[] 回调函数
	boolean:false  冒泡  true 捕获

 */

function addEvent(options){
	var element = document.querySelector(options.el)
	//第一步做兼容：判断当前浏览器是否兼容这个方法
	if(element.addEventListener){
		
		 if(!options.boolean){
		 	options.boolean = false;
		 }

		 for(var i=0;i<options.callback.length;i++){
	 		element.addEventListener(options.type,options.callback[i],options.boolean)
	 	 }
		
	}else{
		 for(var i=0;i<options.callback.length;i++){
	 		element.attachEvent("on"+options.type,options.callback[i])
	 	 }
		
	}
}

//设置
function setCookie(key,val,expires){
	var d = new Date();
	d.setDate(d.getDate()+expires);

	document.cookie = key+"="+val+";path=/;expires="+d;
}

//删除
function removeCookie(key,val){
	setCookie(key,val,-1)
}


//获取
function getCookie(key){
	var cookie = document.cookie;
	var arr = cookie.split("; ");
	for(var i=0;i<arr.length;i++){
		var newArr = arr[i].split("=");
		if(key == newArr[0]){
			return newArr[1];
		}
	}
}

/*
	正则表达式获取cookie

 */
function getCookieTo2(key){
	var str = document.cookie;
	//var str = 'username=pine; phone=18270837879; address=henan';
	var reg = new RegExp("("+key+")=[^;]+");
	var arr = str.match(reg);
	if(arr){
		return arr[0].split("=")[1]
	}
}


/*
完美运动框架
 */
function move(obj,json,fn){
	//防止多次点击   关闭掉上一个定时器
	clearInterval(obj.timer);
	//开启定时器  obj.timer:防止多个对象抢定时器
	obj.timer = setInterval(function(){
		//开关门
		var bStop = true;
		//传入的是一个对象 需要将对象中所有的值进行遍历
		for(var attr in json){
			/*
				因为offset的局限性太大，如果想要这个方法灵活多用只能用获取非行间样式

				考虑2点
					1、透明度是小数 不能够直接取整需要先*100在取整

					2、因为getStyle()获取出来的是字符串 我们需要将它转换为数字
			 */
			var iCur = 0;
			if(attr == "opacity"){
				iCur = parseInt(getStyle(obj,attr)*100);
			}else{
				iCur = parseInt(getStyle(obj,attr));
			}

			/*
			因为要做缓存运动，因此需要计算速度 速度是一个不定值  
			公式：  (目标值 - 当前对象的位置) /系数  建议是8

			考虑的问题：
				计算机处理小数有问题因此需要将小数干掉，我们要进行向上取整和向下取整
			 */
			//算速度
			var speed = (json[attr] - iCur)/8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);

			/*判断是否都已经到达终点 只要有一个没有到达终点就将bStop为false  循环完毕以后判断bstop来决定关闭定时器*/
			if(json[attr] !=iCur){
				bStop = false;
			}

			/*
				考虑2部分
					1、透明度是不需要加px的因此需要单独判断
					2、普通的属性是需要加px的因此需要再次判断

			 */
			if(attr == "opacity"){
				//透明度的兼容性
				obj.style.opacity = (iCur+speed)/100;
				obj.style.filter = "alpha(opacity:"+(iCur+speed)+")";
			}else{
				obj.style[attr] = (iCur+speed)+"px";
			}
		}

		//当循环完毕以后 判断bStop的状态来决定是否关闭定时器
		if(bStop){
			clearInterval(obj.timer);
			//链式操作
			fn&&fn();
		}

	},30)
}



/*
轮播图

new Bnner("#banner",{
		nextEl:"nextElement",
		prevEl:"prevElement",
		circle:"#btn"
	})

 */

function Swiper(container,options){
	this.oBanner = document.querySelector(container);
	this.oUl = 	this.oBanner.getElementsByTagName("ul")[0];
	this.aLi = this.oUl.getElementsByTagName("li");
	this.prevEl = this.oBanner.querySelector(options.prevEl);
	this.nextEl = this.oBanner.querySelector(options.nextEl);
	this.aBtn = this.oBanner.querySelectorAll(options.circle+">"+"a");
	this.iNow = 0;
	this.iWidth = this.aLi[0].offsetWidth;
	this.timer = null;
}

Swiper.prototype.init = function(){
	var li = this.aLi[0].cloneNode(true);
	this.oUl.appendChild(li);
	this.oUl.style.width = this.iWidth * this.aLi.length+"px";
	this.autoPlay();
	this.over();
	this.out();
	this.prev();
	this.next();
	this.toggle();
}


Swiper.prototype.toggle = function(){
	var _this = this;
	for(var i=0;i<this.aBtn.length;i++){
		this.aBtn[i].index = i;
		this.aBtn[i].onmouseover = function(){
			for(var j=0;j<_this.aBtn.length;j++){
				_this.aBtn[j].className = ""
			}

			this.className = "active";
			_this.iNow = this.index;
			_this.toImg();
		}
	}
}




Swiper.prototype.next = function(){
	var _this = this;
	this.nextEl.onclick = function(){
		if(_this.iNow == _this.aLi.length-1){
			_this.iNow = 1;
			_this.oUl.style.left = 0;
		}else{
			_this.iNow++;
		}

		_this.toImg();
	}
}

Swiper.prototype.prev= function(){	
	var _this = this;
	this.prevEl.onclick = function(){
		if(_this.iNow == 0){
			_this.iNow = _this.aLi.length-2;
			_this.oUl.style.left = -(_this.aLi.length-1)*_this.aLi[0].offsetWidth+"px";

		}else{
			_this.iNow--;
		}

		_this.toImg();
	}
}



Swiper.prototype.out = function(){
	var _this = this
	this.oBanner.onmouseout = function(){

		_this.autoPlay()
	}
}


Swiper.prototype.over = function(){
	var _this = this
	this.oBanner.onmouseover = function(){
		
		clearInterval(_this.timer);
	}
}
Swiper.prototype.autoPlay = function(){
	var _this = this;
	clearInterval(this.timer)
	this.timer = setInterval(function(){
		if(_this.iNow == _this.aLi.length-1){
			_this.iNow = 1;
			_this.oUl.style.left = 0;
		}else{
			_this.iNow++;
		}

		_this.toImg();
	},3000)
}

Swiper.prototype.toImg = function(){
	move(this.oUl,{left:-this.iNow*this.iWidth})

	for(var i=0;i<this.aBtn.length;i++){
		this.aBtn[i].className = "";
	}

	console.log(this.iNow==this.aLi.length-1?0:this.iNow)
	this.aBtn[this.iNow==this.aLi.length-1?0:this.iNow].className = "active";
}


/*
拖拽

 */

function Drag(el){
	this.el = document.querySelector(el);
}
Drag.prototype.init = function(){
	this.down();
}

Drag.prototype.down = function(){
	var _this = this;
	this.el.onmousedown = function(e){
		var e = e||event;
		_this.disX = e.offsetX;
		_this.disY = e.offsetY;

		_this.iWidth = document.documentElement.clientWidth - this.offsetWidth;
		_this.iHeight = document.documentElement.clientHeight - this.offsetHeight;

		document.onmousemove = function(e){
			var e = e||event;
			_this.move(e);
		}
		document.onmouseup = function(){
			_this.up();
		}
	}
}


Drag.prototype.move = function(ev){
	var l = ev.clientX - this.disX;
	var t = ev.clientY - this.disY;

	l = l>this.iWidth?this.iWidth:(l<0?0:l);
	t = t>this.iHeight?this.iHeight:(t<0?0:t);


	this.el.style.left = l + "px";
	this.el.style.top = t + "px";
}


Drag.prototype.up = function(){
	document.onmousemove = null;
}


/*
	Magnifier("#content",{
		minImg:".minImg",
		middle:".middle",
		bigImg:".bigImg",
		filter:".filter",
		box:".box",
		max:".max"
	})

	放大镜

 */

function Magnifier(container,options){
	this.content = document.querySelector(container);
	this.minImg = this.content.querySelector(options.minImg);
	this.middle = this.content.querySelector(options.middle);
	this.bigImg = this.content.querySelector(options.bigImg);
	this.filter = this.content .querySelector(options.filter);
	this.box = this.content.querySelector(options.box);
	this.max = this.content.querySelector(options.max);

}

Magnifier.prototype.init = function(){
	// var str = "";
	// for(var i=0;i<5;i++){
	// 	str+="<img src=imgs/"+(i+1)+"-small.jpg class='small'  data-url=imgs/"+(i+1)+"-large.jpg>";
	// }
	// this.minImg.innerHTML = str;

	this.over();
	this.boxOver();
	this.filterMove();
	this.boxOut();

}

Magnifier.prototype.over = function(){
	var _this = this;
	this.minImgs = this.minImg.querySelectorAll("img");
	for(var i=0;i<this.minImgs.length;i++){
		this.minImgs[i].onmouseover = function(){
			_this.src = this.getAttribute("data-url");
			_this.middle.src = _this.src;
			_this.bigImg.src = _this.src

		}
	}
}

Magnifier.prototype.boxOver = function(){
	var _this = this;
	this.box.onmouseover = function(){
		_this.filter.style.display = "block";
		_this.max.style.display = "block";
	}
}

Magnifier.prototype.filterMove = function(){
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

}


Magnifier.prototype.boxOut = function(){
	var _this = this;
	this.box.onmouseout = function(){
		_this.filter.style.display = "none";
		_this.max.style.display = "none";
	}
}


function ajax(options){
	//创建一个ajax对象
	var xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft,XMLHTTP");

	//数据的处理  {a:1,b:2}  a=1&b=2;
	var str = "";
	for(var key in options.data){
		str+="&"+key+"="+options.data[key];
	}

	str = str.slice(1)
	if(options.type == "get"){
		var url = options.url+"?"+str;

		xhr.open("get",url);

		xhr.send();

	}else{
		xhr.open("post",options.url);

		xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");

		xhr.send(str)

	}

	//监听
	xhr.onreadystatechange = function(){
		//当请求成功的时候
		if(xhr.readyState == 4 && xhr.status == 200){

			var d = xhr.responseText;

			//将请求的数据传递给成功回调函数
			options.success&&options.success(d)

		}else if(xhr.status != 200){
			//当失败的时候将服务器的状态传递给失败的回调函数
			options.error&&options.error(xhr.status);
		}
	}
}