let url = ("https://www.themealdb.com/api/json/v1/1/categories.php")
async function meal(){
try{
    let res = await fetch(url)
    var response = await res.json()
    var cat = response.categories
    //console.log('cat:', cat)
   display(cat);
    //console.log(response)
}
catch(er){
console.log('er:', er)

}
}
meal()

var tottalcart = JSON.parse(localStorage.getItem("localcart")) || [];
//console.log(tottalcart)

document.getElementById("tottalcount").textContent = tottalcart.length

function display(arr){

    arr.map(function(ele){
        var maindiv = document.createElement("div")

        var img = document.createElement("img")
        img.src = ele.strCategoryThumb

        var des = document.createElement("h2")
        des.textContent = ele.strCategory
       // des.textContent = ele.strCategoryDescription
       //des.textContent = ele.strCategoryDescription

       var textdiv = document.createElement("div")
       textdiv.setAttribute("class","text")

       var desc = document.createElement("p")
       desc.textContent = ele.strCategoryDescription

       
       //var price = ele.(Math.random)
       var price = document.createElement("h3")
       var a = Math.floor(Math.random()*400)+100
       price.textContent = `${a}/-`
       ele.price = a

       

       var btn = document.createElement("button")
       btn.textContent = "Add to Cart"
       
       btn.addEventListener("click",function(){
           cartitem(ele)
           console.log('ele:', ele)

       })
       
       textdiv.append(des,price,btn)

        maindiv.append(img,textdiv)
        document.getElementById("menu").append(maindiv)
    })
}

function cartitem(ele){
    console.log('ele:', ele)
    tottalcart.push(ele)
    localStorage.setItem("localcart",JSON.stringify(tottalcart))
   // window.location.href = "index.html"
   document.getElementById("tottalcount").textContent = tottalcart.length

}