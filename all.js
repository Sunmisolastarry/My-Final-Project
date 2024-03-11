// JavaScript to add products to the cart

document.addEventListener("DOMContentLoaded", function() {
    
    // Handle click event of "Add to Cart" buttons
    var addToCartButtons = document.querySelectorAll(".addToCartBtn");
    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Get the content of the parent product div
            var productContent = this.parentNode.innerHTML;
            
            // Retrieve the cart items from localStorage or initialize an empty array
            var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            
            // Add the product content to the cart items array
            cartItems.push(productContent);
            
            // Store the updated cart items array in localStorage
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.addToCartBtn');
    const cartCounterSpan = document.getElementById('cart-counter');
    //const clearCartButton = document.getElementById('clear-cart-btn');

    let cartCounter = parseInt(localStorage.getItem('cartCounter')) || 0;
    updateCartCounter();

    // Add event listener to each Add to Cart button
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            cartCounter++;
            updateCartCounter();
        });
    });

    // Add event listener to Clear Cart button
    // clearCartButton.addEventListener('click', function() {
    //     cartCounter = 0;
    //     updateCartCounter();
    // });

    // Function to update cart counter
    function updateCartCounter() {
        cartCounterSpan.textContent = cartCounter;
        localStorage.setItem('cartCounter', cartCounter);
    }
});

var first = document.querySelector('.menuic')
const second = document.querySelector('.left__listing')

// first.onclick=function(){
//     second.style.left = 780
// }

first.addEventListener("click", function() {
    // console.log("I have been clicked")
    second.classList.toggle("list-toggle")
})