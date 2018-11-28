//导航
// header
var oLeftArea = document.getElementById("leftArea");
var aA = oLeftArea.querySelectorAll("#leftArea>a");
for(var i=0;i<aA.length;i++){   
    aA[i].onclick= function(e){
        var e = e||event; 
        for (var j=0;j<aA.length;j++){
                aA[j].children[0].style.display = "none";            
            }
        this.children[0].style.display = "block";       
        }  
    }

//nav
 
    var onavCon1 = document.getElementById("navCon1");
        var str = "";
        for(var i=0;i<4;i++){
                str += `<li>
                            <img src="../img/Simg_${i+1}.jpg">
                            <h5>TARGETTO</h5>
                            <P>宽松落肩不对称条纹男女同款长袖衬衫_灰色</P>
                            <a>￥ 407</a>
                    </li>`
                    
        }
        onavCon1.innerHTML=str;
    var onavCon2 = document.getElementById("navCon2");
        var str = "";
        for(var i=4;i<8;i++){
                str += `<li>
                            <img src="../img/Simg_${i+1}.jpg">
                            <h5>FEO</h5>
                            <P>宽松落肩不对称荷叶边优雅长半裙_黑色</P>
                            <a>￥ 407</a>
                    </li>`
                    
        }
        onavCon2.innerHTML=str;
    var navConRight = document.getElementById("navConRight");
        var str = "";
        for(var i=0;i<3;i++){
                str += `<li>
                            <img src="../img/Simg_CLOTHES_${i+1}.jpg">
                            <h5>CLTHES</h5>
                            <P>CLTHES正品新品上市</P>
                            <a>￥ 507</a>
                    </li>`
                    
        }
        navConRight.innerHTML=str;
    var navConRight1 = document.getElementById("navConRight1");
        var str = "";
        for(var i=0;i<3;i++){
                str += `<li>
                            <img src="../img/wimg_SHOES_${i+1}.jpg">
                            <h5>SHOES</h5>
                            <P>SHOES正品新品上市</P>
                            <a>￥ 807</a>
                    </li>`
                    
        }
        navConRight1.innerHTML=str;
    var navConRight2 = document.getElementById("navConRight2");
        var str = "";
        for(var i=0;i<3;i++){
                str += `<li>
                            <img src="../img/wimg_bao${i+1}.jpg">
                            <h5>ISOI</h5>
                            <P>ISOI正品新品上市</P>
                            <a>￥ 507</a>
                    </li>`
                    
        }
        navConRight2.innerHTML=str;
    var navConRight3 = document.getElementById("navConRight3");
        var str = "";
        for(var i=0;i<3;i++){
                str += `<li>
                            <img src="../img/wimg_PEISHI_${i+1}.jpg">
                            <h5>PEISHI</h5>
                            <P>PEISHI正品新品上市</P>
                            <a>￥ 507</a>
                    </li>`
                    
        }
        navConRight3.innerHTML=str;
    var navConRight4 = document.getElementById("navConRight4");
        var str = "";
        for(var i=0;i<3;i++){
                str += `<li>
                            <img src="../img/Simg_isoi${i+1}.jpg">
                            <h5>ISOI</h5>
                            <P>ISOI正品新品上市</P>
                            <a>￥ 507</a>
                    </li>`
                    
        }
        navConRight4.innerHTML=str;


//nav--->block 
    var oNav = document.getElementById("nav");
    var aLi = oNav.querySelectorAll("#nav>ul>li");
    
        for(var i=0;i<aLi.length;i++){
            // aLi[i].index = i;
            aLi[i].onmouseover = function(){                               
                    var aSpan = this.children[1];
                    aSpan.style.display = "block";
                    var ul = this.children[2];
                    if(ul){                    
                    ul.style.display = "block";
                }
            }
            aLi[i].onmouseout = function() {
                    var ul = this.children[2];
                    if(ul){
                        ul.style.display = "none";
                    }
                    var aSpan = this.children[1];
                    aSpan.style.display = "none";
                    
            }        
        }
       


























