

//新品精选

    var onewCon = document.getElementById("newCon");
    
    var str = "";
    for(var i=0;i<8;i++){
            str += `<li>
                        <img src="../img/Simg_${i+1}.jpg">
                        <h5>TARGETTO</h5>
                        <P>宽松落肩不对称条纹男女同款长袖衬衫_灰色</P>
                        <a>￥ 407</a>
                </li>`
                
    }
    onewCon.innerHTML=str;
   
    
//无缝轮播

    window.onload =function  (argument) {
        var newProduct = document.getElementById("newProduct");
        var aDot = document.querySelectorAll("#dot>a");
        var iNow1 = 0;
        var aLi = onewCon.getElementsByTagName("li");
        var iWidth1 = aLi[0].offsetWidth;
        var li1 = aLi[0].cloneNode(true);
        onewCon.appendChild(li1);
        onewCon.style.width = iWidth1 * aLi.length+90+"px";
        var timer1 = null;
        
        aDot[0].onclick = function(){
            if(iNow1 == 0){
                iNow1 = aLi.length-5;
                onewCon.style.left = -(aLi.length-1)*aLi[0].offsetWidth+"px";
            }else{
                iNow1--;
            }
            toLi();
        }
            
        aDot[1].onclick = function(){
            if(iNow1 == aLi.length-4){
                iNow1 = 1;
                onewCon.style.left = 0;
            }else{
                iNow1++;
            }
            
            toLi();
        }

        newProduct.onmouseover = function(){
            clearInterval(timer1);
        }
        
        newProduct.onmouseout = function(){
            autoPlay2();
        }
            
        autoPlay2()
        function autoPlay2(){
            timer1 = setInterval(function(){
                if(iNow1 == aLi.length-4){
                    iNow1 = 1;
                    onewCon.style.left = 0;
                }else{
                    iNow1++;
                }
        
                toLi();
            },2000)
        } 
        function toLi(){
            move(onewCon,{left:-iNow1*iWidth1})
        }
    }