// JavaScript code
document.addEventListener("DOMContentLoaded", function() {
    const checkoutButton = document.getElementById('checkout-btn');

    checkoutButton.addEventListener('click', function() {
        // Retrieve all selected products
        const products = document.querySelectorAll('.product');
        let message = "Selected Products:\n";

        // Iterate over each product and retrieve details
        products.forEach(function(product, index) {
            const productName = product.querySelector('.selected-product').textContent;
            const productPrice = product.querySelector('.product-price').textContent;

            // Append product details to the message
            message += `${index + 1}. ${productName}: ${productPrice}\n`;
        });

        // Retrieve total price
        const totalPrice = document.querySelector('.total-price').textContent;

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
