// Cart System

let cart = 0;


// Add To Cart Function

function addToCart(){

    cart++;

    document.getElementById("cartCount").innerHTML = cart;

    alert("Product added to cart!");

}




// Search Function

function searchProduct(){

    let input = document.getElementById("searchInput").value.toLowerCase();

    let products = document.querySelectorAll(".product-card");


    products.forEach(function(product){

        let name = product.querySelector("h3").innerText.toLowerCase();


        if(name.includes(input)){

            product.style.display="block";

        }

        else{

            product.style.display="none";

        }


    });


}



// Shop Button

document.querySelector(".hero button").onclick=function(){

    window.scrollTo({

        top:700,

        behavior:"smooth"

    });

};
let cart = 0;


// Load Products

let productContainer = document.getElementById("productList");


if(productContainer){

products.forEach(function(product){

productContainer.innerHTML += `

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<div class="rating">
${product.rating}
</div>

<p>${product.description}</p>

<p class="price">
Rs. ${product.price}
</p>

<button onclick="addToCart()">
Add To Cart
</button>

</div>

`;

});

}




// Cart

function addToCart(){

cart++;

document.getElementById("cartCount").innerHTML = cart;

alert("Product added to cart!");

}




// Search

function searchProduct(){

let input = document.getElementById("searchInput").value.toLowerCase();

let productsCards = document.querySelectorAll(".product-card");


productsCards.forEach(function(card){

let name = card.querySelector("h3").innerText.toLowerCase();


if(name.includes(input)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

}

