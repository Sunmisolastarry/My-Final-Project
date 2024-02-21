// ========= 1. ClearCart =========
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the cart items from localStorage
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    var cartElement = document.getElementById("cart");

    // Display the content in the cart area
    if (cartItems.length > 0) {
        cartItems.forEach(function(item) {
            var div = document.createElement('div');
            div.classList.add('cart-item');
            div.innerHTML = item;
            //div.appendChild('<input />');
            cartElement.appendChild(div);
        });
    }
// =============== CLEAR CART ==================
    // Handle click event of "Clear Cart" button
    var clearCartButton = document.getElementById("clear-cart-btn");
    clearCartButton.addEventListener("click", function() {
        // Clear the cart items from localStorage
        localStorage.removeItem("cartItems");

        // Clear the content in the cart area
        cartElement.innerHTML = "Cart is empty.";
        const totalPriceSpan = document.querySelector('.totalprice');
        totalPriceSpan.textContent = "$0.00";
    });
});


document.addEventListener("DOMContentLoaded", function() {
  const addToCartButtons = document.querySelectorAll('.addToCartBtn');
  const deleteButtons = document.querySelectorAll('.del');
  const cartCounterSpan = document.getElementById('cart-counter');
  const clearCartButton = document.getElementById('clear-cart-btn');

  let cartCounter = parseInt(localStorage.getItem('cartCounter')) || 0;
  updateCartCounter();

  // Add event listener to each Add to Cart button
  addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          cartCounter++;
          updateCartCounter();
      });
  });

  function removeFromLocalStorage(index) {
    let cartItemsArray = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItemsArray.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItemsArray));
}

  // Function to update total price after deletion
    function updateTotalPriceAfterDeletion(price) {
        const totalPriceSpan = document.querySelector('.totalprice');
        let totalPrice = parseFloat(totalPriceSpan.textContent.replace('#', ''));
        totalPrice -= price;
        if (totalPrice < 0) {
            totalPrice = 0;
        }
        console.log(totalPrice);
        totalPriceSpan.textContent = '#' + totalPrice.toFixed(2);
    }

  // Add event listener to each Delete button
  deleteButtons.forEach(function(button, index) {
      button.addEventListener('click', function() {
        const cartItem = document.querySelectorAll('.cart-item b')[index];
        const priceText = cartItem.textContent;
        const price = parseFloat(priceText.replace('#', ''));
        console.log(price);
        if (!isNaN(price)) {
        //     // Remove the item from the cart display
        updateTotalPriceAfterDeletion(price);
        //     // Remove the item from local storage
        removeFromLocalStorage(index);
        }

          const productDiv = button.parentNode;
          productDiv.parentNode.removeChild(productDiv); // Remove the product div
          cartCounter--; // Decrease the cart counter
          updateCartCounter(); // Update the cart counter display
          
      });
  });

  // Add event listener to Clear Cart button
  clearCartButton.addEventListener('click', function() {
      cartCounter = 0;
      updateCartCounter();
  });

  // Function to update cart counter
  function updateCartCounter() {
      cartCounterSpan.textContent = cartCounter;
      localStorage.setItem('cartCounter', cartCounter);
  }
});


document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.querySelectorAll('.cart-item');
    const deleteButtons = document.querySelectorAll('.delete-button');
    const totalPriceSpan = document.querySelector('.totalprice');

   
    // Function to update total price
    function updateTotalPrice() {
        let totalPrice = 0;
        cartItems.forEach(function(item) {
            const priceText = item.querySelector('b').textContent;
            const price = parseFloat(priceText.replace('#', ''));
            if (!isNaN(price)) {
                totalPrice += price;
            }
        });
        totalPriceSpan.textContent = '#' + totalPrice.toFixed(2);
    }

    // Function to update total price after deletion
    function updateTotalPriceAfterDeletion(price) {
        let totalPrice = parseFloat(totalPriceSpan.textContent.replace('#', ''));
        totalPrice -= price;
        if (totalPrice < 0) {
            totalPrice = 0;
        }
        console.log(totalPrice);
        totalPriceSpan.textContent = '#' + totalPrice.toFixed(2);
    }

    // Function to remove item from local storage
    function removeFromLocalStorage(index) {
        let cartItemsArray = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItemsArray.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItemsArray));
    }

    // Initial update of total price
    updateTotalPrice();
});



document.addEventListener("DOMContentLoaded", function() {
    // Function to calculate total price
    function calculateTotalPrice() {
        // Retrieve all the b tags containing prices
        var priceTags = document.querySelectorAll('.cart-item b');
        var totalPrice = 0;

        // Iterate through each price tag and sum up the prices
        priceTags.forEach(function(tag) {
            // Extract price value from the inner text of the b tag
            var priceText = tag.textContent.trim();
            
            // Remove '$' sign and convert to float
            var priceValue = parseFloat(priceText.replace('#', ''));
            console.log(priceText);
            
            // Log the extracted price value for debugging
            console.log('Price Value:', priceValue);

            // Add the price to the total price
            if (!isNaN(priceValue)) {
                totalPrice += priceValue;
            }
        });

        // Display the total price in the total-price span
        var totalPriceSpan = document.querySelector('.totalprice');
        if (totalPriceSpan) {
            totalPriceSpan.textContent = '#' + totalPrice.toFixed(2);
        }
    }

    // Call calculateTotalPrice when the page loads
    calculateTotalPrice();
});


// JavaScript code
document.addEventListener("DOMContentLoaded", function() {
    const checkoutButton = document.getElementById('checkout-btn');

    checkoutButton.addEventListener('click', function() {
        // Retrieve all selected products
        const products = document.querySelectorAll('.cart-item .common');
        let message = "Selected Products:\n";

        // Iterate over each product and retrieve details
        products.forEach(function(product, index) {
            const productName = product.querySelector('.productname').textContent;
            const productPrice = product.querySelector('.productprice').textContent;

            // Append product details to the message
            message += `${index + 1}. ${productName}: ${productPrice}\n`;
        });

        // Retrieve total price
        const totalPrice = document.querySelector('.totalprice').textContent;

        // Append total price to the message
        message += `\nTotal Price: ${totalPrice}`;

        // Encode message for WhatsApp URL
        const encodedMessage = encodeURIComponent(message);

        // Create the WhatsApp share URL
        const whatsappURL = `https://wa.me/+2348105571552?text=${encodedMessage}`;

        // Open WhatsApp with the message content
        window.open(whatsappURL, '_blank');
    });
});

