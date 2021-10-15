const apiUrl = 'http://localhost:3000/api/teddies';
const siteUrl = window.location.hostname;
let products;

window.onload = function() {
    getProducts();
}

function getProducts(){
    return fetch(apiUrl).then(response => response.json()).then(data => showProducts(data));
}

function showProducts(products){
    console.log(products);
    products.forEach(product => {
        document.getElementById("products").appendChild(card(product));
    });
}

function card(product) {
	const card = document.createElement('div')
	const cardRow = document.createElement('div')
	const cardImgCol = document.createElement('div')
	const cardImg = document.createElement('img')

	const cardBodCol = document.createElement('div')
	const cardBody = document.createElement('div')
	const cardTitle = document.createElement('h5')
	const cardText = document.createElement('p')
	const cardP = document.createElement('p') 
	const cardPrice = document.createElement('small')
	const cardPriceNo = document.createElement('h3')  
	const cardBtn = document.createElement('a') 

	cardBtn.innerHTML = 'view Product';
	cardTitle.innerHTML = product.name;
	cardText.innerHTML = product.description;
	let num = Number.parseInt(product.price).toFixed(2) / 100;
  	num = num.toLocaleString('en', { style: 'currency', currency: 'GBP' });
	cardPriceNo.innerHTML = num;

	card.setAttribute('class', 'card mb-3')
	cardRow.setAttribute('class', 'row g-0')
	cardImgCol.setAttribute('class', 'col-md-4')
	cardImg.setAttribute('src', product.imageUrl)
	cardImg.setAttribute('class', 'img-fluid rounded-start')
	cardImg.setAttribute('alt', product.name + " image")

	cardBodCol.setAttribute('class', 'col-md-8')
	cardBody.setAttribute('class', 'card-body')
	cardTitle.setAttribute('class', 'card-title')
	cardText.setAttribute('class', 'card-text')
	cardP.setAttribute('class', 'card-text')	
	cardPrice.setAttribute('class', 'text-muted')
	cardPriceNo.setAttribute('class', '')
	cardBtn.setAttribute('href', "product.html?id=" + product._id)
	cardBtn.setAttribute('class', 'btn btn-primary stretched-link')

	card.appendChild(cardRow)
	cardRow.appendChild(cardImgCol)
	cardRow.appendChild(cardBodCol)
	cardImgCol.appendChild(cardImg)

	cardBodCol.appendChild(cardBody)
	cardBody.appendChild(cardTitle)
	cardBody.appendChild(cardText)
	cardBody.appendChild(cardP)
	cardBody.appendChild(cardBtn)

	cardP.appendChild(cardPrice)
	cardPrice.appendChild(cardPriceNo)

	return card
}




