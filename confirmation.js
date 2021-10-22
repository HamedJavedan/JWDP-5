localStorage.removeItem("cart");
let cartContents = [];
if (localStorage.getItem('cart') === null) {
    cartContents = [];
} else {
    cartContents = JSON.parse(localStorage.getItem('cart'));
}
localStorage.setItem('cart', JSON.stringify(cartContents));

const orderId = document.getElementById('order-id');
const firstName = document.getElementById('customer-name');
const backButton = document.getElementById('back-button');

orderId.innerHTML = sessionStorage.getItem('orderId');
firstName.innerHTML = sessionStorage.getItem('firstName');

backButton.addEventListener('click', () => {
    sessionStorage.removeItem("orderId");
    sessionStorage.removeItem('firstName');

    location.replace('index.html');
})