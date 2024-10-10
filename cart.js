window.onload = function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const bookingSubtotal = document.getElementById('booking-subtotal');
    const total = document.getElementById('total');
    let cartHtml = '';

    let subtotal = 0;

    // Loop through the cart items and generate HTML
    cart.forEach(item => {
        subtotal += item.totalCost;

        cartHtml += `
            <tr>
                <td>${item.musicianName} (x${item.quantity} for ${item.timeOption} hours)</td>
                <td>Rp. ${item.totalCost.toLocaleString()}</td>
            </tr>
        `;
    });

    // Update cart table
    bookingSubtotal.innerHTML = `Rp. ${subtotal.toLocaleString()}`;
    total.innerHTML = `Rp. ${subtotal.toLocaleString()}`;
    
    // If needed, append cartHtml to a specific table body in your cart
};