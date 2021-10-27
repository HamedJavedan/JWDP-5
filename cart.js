const api = 'http://localhost:3000/api/teddies/';
const productInStorage = JSON.parse(localStorage.getItem('cart'));

if (productInStorage.length > 1 || productInStorage !== null) {
    for (let i = 0; i < productInStorage.length; i++) {
        const productCart = productInStorage[i];
        const cartTable = document.getElementById('cart-items');


        const tr = document.createElement('tr');
        const name = document.createElement('td');
        const colors = document.createElement('td');
        const quantity = document.createElement('td');
        const price = document.createElement('td');
        const removeProduct = document.createElement('td');

        name.innerHTML = productCart.name;
        colors.innerHTML = productCart.colors;
        quantity.innerHTML = `<input type="number" id="quantity" name="quantity" min="1" value ="${productCart.quantity}" onclick="inputQuantity(${i}, event.target.value)">`;
        removeProduct.innerHTML = `<button class="btn-del" id='remove' onclick='removeProduct(${i})'>X</button>`;
        const priceParse = parseInt(productCart.price.toString().substring(0, 2));
        price.innerHTML = '£' + (priceParse * productCart.quantity);

        cartTable.appendChild(tr);
        tr.appendChild(name);
        tr.appendChild(colors);
        tr.appendChild(quantity);
        tr.appendChild(price);
        tr.appendChild(removeProduct);

        totalPrice();

    }
} if (productInStorage.length === 0 || productInStorage === null) {

    const productContainer = document.getElementById('cart-products');

    productContainer.innerHTML = `<div class="text-center"><i class="fas fa-shopping-basket h1"></i></div>
    <h2 class="text-center font-weight-bold my-5" >Empty Cart</h2>
    <p class="text-center lead">Please add some products to your shopping cart.</p>
    <a href="index.html#products-heading" style="text-decoration:none;"><button type="button" class="btn btn-outline-primary mx-auto d-block" style="margin-bottom: 168px;">Shop</button></a>`;

    const tableContent = document.getElementById('table-content');
    const orderForm = document.getElementById('order-form');
    const cartHeading = document.getElementById('cart-heading');

    cartHeading.remove();
    tableContent.remove();
    orderForm.remove();
}

function inputQuantity(index, value) {
    productInStorage[index].quantity = parseInt(value);
    localStorage.setItem('cart', JSON.stringify(productInStorage));

    totalPrice();
    location.reload();
}

function totalPrice() {

    const total = document.getElementById('total');
    let totalCartPrice = 0;
    if (productInStorage) {
        for (let i = 0; i < productInStorage.length; i++) {
            let price = parseInt(productInStorage[i].price.toString().substring(0, 2));
            let productPrice = price * productInStorage[i].quantity;
            totalCartPrice += productPrice;
        }
    }
    if (total) {
        total.innerHTML = "Total: £" + totalCartPrice;
    }
}

function removeProduct(index) {
    productInStorage.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(productInStorage));


    totalPrice();
    location.reload();
}



const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const address = document.getElementById('address');
const city = document.getElementById('city');
const email = document.getElementById('email')
const form = document.querySelector('.needs-validation')

form.addEventListener('submit', function (event) {
	event.preventDefault()

	if (!form.checkValidity()) {
		event.stopPropagation()
	} else {
		const formData = new FormData(form)
		
        let products = [];
        for (let i = 0; i < productInStorage.length; i++) {
            products.push(productInStorage[i]._id);
        }

		const data = {
			products: products,
			contact: {
                firstName: firstName.value,
                lastName: lastName.value,
                address: address.value,
                city: city.value,
                email: email.value,
			}
		}
		
        submitFormData(data);
	}

	form.classList.add('was-validated')
}, false)

function makeRequest(data) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('POST', api + '/order');
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status === 201) {
                    resolve(JSON.parse(request.response));
                } else {
                    reject(JSON.parse(request.response));
                }
            }
        };
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(data));
    });
}


async function submitFormData(data) {
    try {
        const requestPromise = makeRequest(data);
        const response = await requestPromise;
        const orderId = response.orderId;
        const firstName = response.contact.firstName;
        sessionStorage.setItem("firstName", firstName);
        sessionStorage.setItem("orderId", orderId);

        location.replace('confirmation.html');
    } catch (errorResponse) {
        console.log(errorResponse.error);
    }
}

