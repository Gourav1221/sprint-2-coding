

document.getElementById("fom").addEventListener("submit",myfnc)

function myfnc(e){
    e.preventDefault()
    
    setTimeout(function(){
        alert("Thanks for Placing Order")
    },2000)

    setTimeout(function(){
        alert("Your order is accepted")
    },9000)

    setTimeout(function(){
        alert("Your order is being cooked")
    },19000)
    setTimeout(function(){
        alert("Your order is ready")
    },29000)

    setTimeout(function(){
        alert("Order out for delivery")
    },41000)

    setTimeout(function(){
     
        alert("order deliveried")
    },51000)

}