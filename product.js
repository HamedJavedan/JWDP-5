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
        .then(data => showProduct(data));
}

function showProduct(product) {
	const body = document.createElement('div')
	const row = document.createElement('div')
	const colF = document.createElement('div')
	const colImg = document.createElement('img')

	const colS = document.createElement('div')
	const head = document.createElement('h3')
	const header = document.createElement('span')
	const headS = document.createElement('h4')
	const icon = document.createElement('i') 
	const price = document.createElement('span')
	const details = document.createElement('p')  
	const br = document.createElement('br')
	const color = document.createElement('h5')
	const colorIcon = document.createElement('i') 
	const PrColor = document.createElement('h6')
	const cart = document.createElement('a')
	const cartIcon = document.createElement('i')

	header.innerHTML = product.name;
	price.innerHTML = product.price;
	details.innerHTML = product.description;
	color.innerHTML = product.colors;

	body.setAttribute('class', 'container mt-5')
	row.setAttribute('class', 'row pt-5')
	colF.setAttribute('class', 'col-lg-6')
	colImg.setAttribute('src', product.imageUrl)
	colImg.setAttribute('class', 'img-fluid shadow rounded')
	colImg.setAttribute('alt', product.name + " image")
	colImg.setAttribute('id', 'product_img')

	colS.setAttribute('class', 'col-lg-4 px-5')
	head.setAttribute('class', 'mb-5')
	header.setAttribute('id', 'product_name')
	headS.setAttribute('class', 'text-primary')
	icon.setAttribute('class', 'fas fa-tags')	
	price.setAttribute('id', 'product_price')
	details.setAttribute('class', 'text-align fw-light')
	details.setAttribute('id', 'product_description')
	br.setAttribute('class', '')
	color.setAttribute('class', 'text-primary')
	colorIcon.setAttribute('class', 'fas fa-tint')
	PrColor.setAttribute('id', 'product_colors')
	PrColor.setAttribute('class', 'fw-light mb-5')
	cart.setAttribute('href', '')
	cart.setAttribute('class', 'btn btn-primary rounded-0')
	cartIcon.setAttribute('class', 'fa fa-shopping-cart fa-lg')

	body.appendChild(row)
	row.appendChild(colF)
	row.appendChild(colS)
	colF.appendChild(colImg)

	colS.appendChild(head)
	colS.appendChild(headS)
	colS.appendChild(details)
	colS.appendChild(br)
	colS.appendChild(color)
	colS.appendChild(PrColor)
	colS.appendChild(cart)
	head.appendChild(header)
	headS.appendChild(icon)
	headS.appendChild(price)
	color.appendChild(colorIcon)
	cart.appendChild(cartIcon)

	return showProduct
}