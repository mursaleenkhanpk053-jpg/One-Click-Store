let cart = JSON.parse(localStorage.getItem("cart")) || [];


// Load Products

let productContainer = document.getElementById("productList");


if(productContainer){

products.forEach(function(product){

productContainer.innerHTML += `

<div class="product-card">

<img src="${product.image}">

<h3>${product.name}</h3>

<div class="rating">
${product.rating}
</div>

<p>${product.description}</p>

<p class="price">
Rs. ${product.price}
</p>

<button onclick="addToCart(${product.id})">
Add To Cart
</button>

</div>

`;

});

}



// Add Product To Cart

function addToCart(id){

let product = products.find(item => item.id === id);


cart.push(product);


localStorage.setItem("cart", JSON.stringify(cart));


updateCartCount();


alert("Product added to cart!");

}



// Cart Count

function updateCartCount(){

let count = document.getElementById("cartCount");

if(count){

count.innerHTML = cart.length;

}

}


updateCartCount();




// Display Cart

let cartBox = document.getElementById("cartItems");


if(cartBox){


let total = 0;


cart.forEach(function(item,index){


total += item.price;


cartBox.innerHTML += `

<div class="product-card">

<h3>${item.name}</h3>

<p>
Rs. ${item.price}
</p>


<button onclick="removeCart(${index})">
Remove
</button>


</div>


`;

});


document.getElementById("cartTotal").innerHTML =
"Total: Rs. " + total;


}




// Remove Cart Item

function removeCart(index){

cart.splice(index,1);


localStorage.setItem("cart",JSON.stringify(cart));


location.reload();

}



// Checkout

function checkout(){

alert("Checkout system coming soon!");
  function openCart(){

window.location.href = "cart.html";

}

}
