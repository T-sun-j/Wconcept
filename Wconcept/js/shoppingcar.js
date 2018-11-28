

// var urlId = location.href.split("?")[1].split("=")[1];
// var content = document.getElementById("content");
new Promise(function (resolve, reject) {
    ajax({
        type: "get",
        url: "../json/hotProduct.json",
        data: {},
        success: function (data) {
            var data = JSON.parse(data);
            resolve(data);

        }
    })
}).then(function (data) {
    var otbody = document.getElementById("tbody");
    var sum = 0;
    var str = "";
    var n;
    if (getCookie("info")) {
        var arr = JSON.parse(getCookie("info"));
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < data.length; j++) {
                if (arr[i].id == data[j].id) {
                    console.log(data[j].img);
                    str += `<tr class="sbag-product-box" id="5207140" data-id=${data[j].id}>
                                <td class="li01 psr">
                                    <input type="checkbox" value="5207140" name="item-id[]" class="item-checkbox">
                                    
                                        <img src="${data[j].img}"/>
                                   
                                </td>
                                <td class="li02">
                                    <a href="/catalog/product/view/id/296622">${data[j].title}</a><br>
                                    <a href="/catalog/product/view/id/296622">(国内仓直发)${data[j].content}</a>
                                </td>
                                <td class="li03">
                                    <p class="list-color">颜色: 银灰色</p>
                                    <p class="list-size">尺码: 均码
    
                                    </p>
                                    <a class="modify" style="display: inline-block" href="javascript:;">修改</a>
                                    <div class="modifyBox">
                                        <div class="modifyIn">
                                            <div class="modifyColor clearfloat">
                                                <span class="left">颜色：</span>
                                                <ul class="clearfloat left" data-attribute-id="92">
                                                        <li class="left" data-click-state="0" data="849" id="5207140_849"><button onclick="return selectOptions('5207140_849');">银灰色</button></li>
                                                </ul>
                                            </div>
                                            <div class="modifyColor clearfloat">
                                                <span class="left">尺码：</span>
                                                <ul class="clearfloat left" data-attribute-id="202">
                                                     <li class="left" data-click-state="0" data="12898" id="5207140_12898"><button onclick="return selectOptions('5207140_12898');">均码</button></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="modifyBtn">
                                            <a class="modifySave" href="javascript:;">确定</a>
                                            <a class="modifyCancel" href="javascript:;">取消</a>
                                        </div>
                                    </div>
                                </td>
                                <td class="li04">
                                    <b calss="unitPrice">
                                       ${data[j].price}
                                        <br>
                                    </b>
                                    <br>
                                </td>
                                <td class="li05">
                                    <div class="shoppingNum m0a clearfloat">
                                            <button class="shoppingReduce">-</button>
                                            <input name="" type="text" class="number" value="${arr[i].num}">
                                            <button class="shoppingAdd">+</button>
                                    </div>
                                </td>
                                <td class="li06">
                                    <p class="totalPrice">
                                        <em class="product-cart-total" data-rwd-label="小计" data-only-price="${data[j].price}">¥&nbsp;${data[j].price.slice(2) * arr[i].num}</em>
                                    </p>
                                    <p></p>
                                </td>
                                <td class="li07">
                                    <a class="delete"">删除</a>
                                </td>
                            </tr>
                       `
                n = Number(data[j].price.slice(1))*arr[i].num;
               
                    }


            }
        //总价格
          sum+=n; 
          //console.log(sum);
        }

    }
    otbody.innerHTML += str;
    // var total_price = document.getElementById("total_price");
    // total_price.innerText = Number((data[j].price.slice(2) * arr[i].num) * arr.length);
    var str9 = "";
    var aggregate = document.getElementById("aggregate");
    str9 = `<a href="#"> 总计：</a><span id="total_price" class="allTotal">￥${sum}</span>`
    aggregate.innerHTML = str9;
    //删除
    var delbtn = document.querySelectorAll(".delete");
    for (var i = 0; i < delbtn.length; i++) {
        delbtn[i].onclick = function () {

            this.parentNode.parentNode.remove();
            removeCookie("info", JSON.stringify(this.parentNode.children[i]));
            //删除
            // var allprice = Number(ototal_price.innerText.slice(1));
            // var delprice = Number(this.parentNode.previousElementSibling.children[0].innerText.slice(2));
            // console.log(this.parentNode.previousElementSibling.children[0].innerText)
            // ototal_price.innerText = allprice - delprice;
           
                var del_Arr = [];
                var id = this.parentNode.getAttribute("data-id");
                var sum = this.previousElementSibling.innerText.slice(2);
                var num = this.previousElementSibling.previousElementSibling.children[1].value;
                console.log(num);
                  for(var j =0;j<arr.length;j++){
                     if(arr[j].id!=id){
                          del_Arr.push(arr[j]);	                	     	
                     }
                }
            setCookie("info",JSON.stringify(del_Arr),7);
            
            var allprice = Number(oSum_p.innerText);
               var delprice = Number(sum); 
               oSum_p.innerText = allprice - delprice;
               var allnum = Number(oNum_p.innerText);
               var delnum = Number(num);
            oNum_p.innerText= allnum - delnum;
            this.parentNode.remove();
        
        }
    }



    //加减商品

    var aAdd = document.querySelectorAll(".shoppingAdd");
    var aReduce = document.querySelectorAll(".shoppingReduce");
    var oSum_span = aggregate.querySelector("#aggregate>span")
    var ototal_price = document.getElementById("total_price");
    for (var i = 0; i < aAdd.length; i++) {
        aAdd[i].onclick = function () {
            var num = Number(this.previousElementSibling.value);
            num++;

            this.previousElementSibling.value = num;
            var tr_id = this.parentNode.parentNode.parentNode.getAttribute("data-id")

            for (var j = 0; j < arr.length; j++) {
                if (arr[j].id == tr_id) {
                    arr[j].num = this.previousElementSibling.value;
                }

            }
            //单价
            var oneprice = this.parentNode.parentNode.previousElementSibling.children[0].innerText.slice(2);
            
            var allprice = Number(ototal_price.innerText.slice(1));
            // console.log(allprice)
            var nowprice = oneprice+allprice
            ototal_price.innerText ="￥"+(Number(oneprice)+allprice);


            

            //商品变化，更新cookie值
            setCookie("info", JSON.stringify(arr), 7);

            //跳转购物车的数字
            // var str7 = "";
            // var sideNum = document.getElementById("sideNum");
            // str7 = arr[j].num
            // sideNum.innerHTML = str7;


            var price = this.parentNode.parentNode.previousElementSibling.children[0].innerText.slice(2)

            this.parentNode.parentNode.nextElementSibling.innerText = "￥" + (price * num)


        }
        aReduce[i].onclick = function () {
            var num = Number(this.nextElementSibling.value);
            
            num--;console.log(num);
            this.nextElementSibling.value = num;
            var allprice;
            var tr_id = this.parentNode.parentNode.parentNode.getAttribute("data-id")
            var price = this.parentNode.parentNode.previousElementSibling.children[0].innerText.slice(2);
            var allprice = Number(ototal_price.innerText.slice(1));
            //单价
            var oneprice = this.parentNode.parentNode.previousElementSibling.children[0].innerText.slice(2);
            if (num > 0) {

                this.nextElementSibling.value = num;
                this.parentNode.parentNode.nextElementSibling.innerText = "￥" + (price * num);
                
                ototal_price.innerText ="￥"+(allprice-Number(oneprice));
                
                 
            }
            else{
                this.nextElementSibling.value = 1;
            }


            for (var j = 0; j < arr.length; j++) {
                if (arr[j].id == tr_id) {
                    arr[j].num = this.nextElementSibling.value;
                }

            }

          
      
             //商品变化，更新cookie值
            setCookie("info", JSON.stringify(arr), 7);
        }

    }

 
       
        // 

    // var num = Number(this.nextElementSibling.value);

    // var price = Number(this.parentNode.parentNode.children[1].innerText.slice(1));
    // // 总价p的值，获取商品单价的值，总价=总价+单价；

    // var allprice;

    // if (num > 1) {

    //     this.parentNode.nextElementSibling.innerText = "￥" + (price * num - price);
    //     allprice = Number(oSum_p.innerText);

    //     oSum_p.innerText = allprice - price;
    //     num--;
    // } else {
    //     num = 1;
    // }

    // this.nextElementSibling.value = num;
    // for (var j = 0; j < arr.length; j++) {
    //     if (arr[j].id == tr_id) {
    //         arr[j].num = this.nextElementSibling.value;
    //     }

    // }


    // //总计

    // var arr = JSON.parse(getCookie("info"));
    // for (var i = 0; i < arr.length; i++) {
    //     for (var j = 0; j < data.length; j++) {
    //         var str9 = "";
    //         var aggregate = document.getElementById("aggregate");
    //         var total_price = document.getElementById("total_price");


    //         setCookie("info", JSON.stringify(arr), 7);
    //         if (arr[i].id == data[j].id) {
    //             var num = arr[i].num;
    //             var price = Number(data[j].price.slice(1));

    //             var temp = (price * num);
    //             total_price += temp;
    //             str9 = `<a href="#"> 总计：</a><span id="total_price" class="allTotal">￥&nbsp;${total_price}</span>`
    //             aggregate.innerHTML = str9;
    //             console.log(str9);

    //         }

    //     }
    // }

    //复选框
    var aAll = document.getElementById("all");
    var aInput = document.querySelectorAll("#tbody>tr>td>input");
    aAll.onclick = function () {
        if (aAll.checked) {
            for (var i = 0; i < aInput.length; i++) {
                aInput[i].checked = "checked";
            }
        } else {
            for (var i = 0; i < aInput.length; i++) {
                aInput[i].checked = "";
            }
        }
    }

    for (var i = 0; i < aInput.length; i++) {
        aInput[i].onclick = function () {
            var bstop = true;
            for (var j = 0; j < aInput.length; j++) {
                if (!aInput[j].checked) {
                    bstop = false;
                    break;
                }
            }
            if (bstop) {
                aAll.checked = "checked";
            } else {
                aAll.checked = "";
            }
        }
    }




})