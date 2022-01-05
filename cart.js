// document.getElementById("page").addEventListener("click",myfnc)

var cartitem = JSON.parse(localStorage.getItem("localcart")) || [] ;
console.log('cartitem:', cartitem)
display(cartitem)



function display(arr){
    arr.map(function(ele,index){
        var maindiv = document.createElement("div")

        var img = document.createElement("img")
        img.src = ele.strCategoryThumb
        var textdiv = document.createElement("div")
        textdiv.setAttribute("class","text")

        var price = document.createElement("h3")
       // var a = Math.floor(Math.random()*400)+100
        price.textContent = ele.price

        var btn = document.createElement("button")
        btn.textContent = "Remove"

        btn.addEventListener("click",function(){
            removecart(index)
        })

        

        textdiv.append(price,btn)
        maindiv.append(img,textdiv)
        document.getElementById("cart").append(maindiv)
    })
    tottal()
}
function tottal(){
    let sum = 0;
    cartitem.forEach(element => {
        sum += element.price 
    });
    document.getElementById("am").textContent = sum
}


function removecart(index){
    document.getElementById("cart").innerHTML = ""
    cartitem.splice(index,1);
    localStorage.setItem("localcart",JSON.stringify(cartitem))
    display(cartitem);
    console.log("here")

}



