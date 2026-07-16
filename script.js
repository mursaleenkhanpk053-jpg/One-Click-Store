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
