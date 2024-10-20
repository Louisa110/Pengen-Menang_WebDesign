document.addEventListener('DOMContentLoaded', function() {
    const applyButton = document.getElementById('applyButton');
    const inputText = document.getElementById('inputText');

    applyButton.addEventListener('click', function() {
        // Clear the input field when the button is clicked
        inputText.value = '';
        alert('Coupon submitted successfully!');
    });
});