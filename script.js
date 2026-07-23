function toggleMenu(){

let menu = document.getElementById("menu");

menu.classList.toggle("show");

}
function searchFood(){

let input = document.getElementById("search").value.toLowerCase();

let cards = document.querySelectorAll(".card");


cards.forEach(function(card){

let name = card.querySelector("h3").innerText.toLowerCase();


if(name.includes(input)){
    card.style.display = "block";
}
else{
    card.style.display = "none";
}

});

}
function filterFood(category){

let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

if(category=="all"){
card.style.display="block";
}
else if(card.dataset.category==category){
card.style.display="block";
}
else{
card.style.display="none";
}

});

}


let cart = [];
let total = 0;


function addToCart(name, price){

    cart.push({
        name:name,
        price:price
    });

    updateCart();

}


function updateCart(){

    let cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    total = 0;


    cart.forEach(function(item,index){

        total += item.price;


        let li = document.createElement("li");

        li.innerHTML =
        item.name + " - $" + item.price +
        " <button onclick='removeCart(" + index + ")'>❌</button>";


        cartItems.appendChild(li);

    });


    document.getElementById("cart-count").innerHTML = cart.length;

    document.getElementById("total-price").innerHTML = total;

}



function removeCart(index){

    cart.splice(index,1);

    updateCart();

}
function toggleCart(){

    let box = document.getElementById("cart-box");

    if(box.style.display == "block"){
        box.style.display = "none";
    }
    else{
        box.style.display = "block";
    }

}
function clearCart(){

    cart = [];

    updateCart();

}
function checkout(){

    if(cart.length == 0){

        alert("Your cart is empty!");

    }

    else{

        alert("Your order has been confirmed! Thank you ❤️");

        cart = [];

        updateCart();

    }

}

function toggleMenu(){

    let menu = document.getElementById("menu");

    menu.classList.toggle("show");

}
const hiddenElements = document.querySelectorAll(".hidden");


const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});


hiddenElements.forEach((el)=>observer.observe(el));
let topButton = document.getElementById("topBtn");


window.onscroll = function(){

    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){

        topButton.style.display = "block";

    }

    else{

        topButton.style.display = "none";

    }

};



function topFunction(){

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

}
function sendMessage(){

let name = document.getElementById("name").value;

let email = document.getElementById("email").value;

let message = document.getElementById("message").value;


if(name=="" || email=="" || message==""){

alert("Please fill all fields!");

}

else{

alert("Thank you " + name + "! Your message has been sent ❤️");


document.getElementById("contact-form").reset();

}

}
