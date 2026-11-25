
// Cart count initially zero hai
let cartCount = 0;

// Add to Cart function
function addToCart() {

    // Cart count increase hoga
    cartCount++;

    // HTML mein cart count update hoga
    document.getElementById("cart-count").innerText = cartCount;

    // User ko message dikhega
    alert("Product added to cart!");
}
