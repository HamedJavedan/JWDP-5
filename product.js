const apiUrl = 'http://localhost:3000/api/teddies/';

window.onload = function() {
    displayProduct(getProductId());
}

function getProductId(){
    return new URLSearchParams(window.location.search).get('id');
}

function displayProduct(productId){
    fetch(apiUrl + productId)
        .then(response => response.json())
        .then(data => {
			const product = createProductElement(data)
			const container = document.getElementById('product')
			container.appendChild(product)
		});
}
 
function createProductElement(product){
    console.log(product);

    document.getElementById("product_name").innerHTML = product.name;
	let num = Number.parseInt(product.price).toFixed(2) / 100;
	num = num.toLocaleString('en', { style: 'currency', currency: 'GBP' });
    document.getElementById("product_price").innerHTML = num;
    document.getElementById("product_description").innerHTML = product.description;
    document.getElementById("product_img").setAttribute('src', product.imageUrl);

    let optionsContainer = document.getElementById('colors');
    for (let i = 0; i < product.colors.length; i++) {
  
      let option = document.createElement('option');
      option.innerText = product.colors[i];
      optionsContainer.appendChild(option);
    }

    let addButton = document.getElementById('addButton');

    addButton.addEventListener('click', () => {
        singleProduct = {
            _id: product._id,
            imageUrl: product.imageUrl,
            price: product.price,
            name: product.name,
            description: product.description,
            colors: optionsContainer.value,
            quantity: 1
        }

        let cartContents = [];
        if (localStorage.getItem('cart') === null) {
            cartContents = [];
        } else {
            cartContents = JSON.parse(localStorage.getItem('cart'));
        }

        if (cartContents.length == 0) {
            cartContents.push(singleProduct);
        } else {
            let index = cartContents.findIndex(o => o._id == singleProduct._id);

            if (index != -1) {
                cartContents[index].quantity += 1;
            } else {
                cartContents.push(singleProduct);

            }
        }

        localStorage.setItem('cart', JSON.stringify(cartContents));
        const toastAlert = document.getElementById('confirmation');
        toastAlert.classList.add('show');
        toastAlert.innerHTML = 'The Teddy ' + product.name + ' has been added to your <a href="cart.html">cart</a>' + '<button type="button" data-dismiss="alert" class="close"><span aria-hidden="true">×</span></button>';
        addNumCart();
    });
    addNumCart();
}
