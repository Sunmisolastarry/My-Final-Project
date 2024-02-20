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

// ============ Form Validaion ==========
const inpTag = document.getElementById("name");
const inpTag2 = document.getElementById("phone");
const inpTag3 = document.getElementById("email");
const date = document.getElementById("date")
const time = document.getElementById("time")
const dropdown = document.getElementById("person");
const button = document.querySelector(".sub");

button.addEventListener("click", (e) => {
    e.preventDefault()
    
// VALIDATION
if (inpTag.value === "") {
    document.getElementById('nameErrorMessage').innerHTML = "Enter Your Name";
  } else if (inpTag2.value === "") {
    document.getElementById('phoneErrorMessage').innerHTML = "Enter Your Phone Number";
  } else if (inpTag3.value === "") {
    document.getElementById('emailErrorMessage').innerHTML = "Enter Your E-mail";
  } else if (date.value === "") {
    alert("Choose a date")
    // document.getElementById('dateErrorMessage').innerHTML = "choose a date" 
  }else if (time.value === "") {
    alert("pick a time")
    // document.getElementById('timeErrorMessage').innerHTML = "pick a time"
  } else {
    button.innerHTML = "Submited";
  }
});


// Get reference to input elements and error message spans
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const nameErrorMessage = document.getElementById("nameErrorMessage");
const phoneErrorMessage = document.getElementById("phoneErrorMessage");
const emailErrorMessage = document.getElementById("emailErrorMessage");

// Add event listeners to clear error messages on keyup
nameInput.addEventListener("keyup", clearNameError);
phoneInput.addEventListener("keyup", clearPhoneError);
emailInput.addEventListener("keyup", clearEmailError);

// Function to clear name error message
function clearNameError() {
  if (nameInput.value !== "") {
    nameErrorMessage.innerHTML = "";
  }
}

// Function to clear phone number error message
function clearPhoneError() {
  if (phoneInput.value !== "") {
    phoneErrorMessage.innerHTML = "";
  }
}

// Function to clear email error message
function clearEmailError() {
  if (emailInput.value !== "") {
    emailErrorMessage.innerHTML = "";
  }
}
