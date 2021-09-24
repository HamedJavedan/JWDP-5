function nav(imgSrc) {
	const nav = document.createElement('nav')
	const navContain = document.createElement('div')
	const navBrand = document.createElement('a')
	const navImg = document.createElement('img')

	nav.setAttribute('class', 'navbar navbar-light bg-light mb-4')
	navContain.setAttribute('class', 'container')
	navBrand.setAttribute('class', 'navbar-brand')
	navImg.setAttribute('src', imgSrc)

	nav.appendChild(navContain)
	navContain.appendChild(navBrand)

	return nav
}

const navPic = [
	{
		_id: 456,
		name: 'logo',
		imageUrl: 'https://user.oc-static.com/upload/2019/12/12/1576141243078_Orinoco%20logo.png'
	}
]

function card(imgSrc) {
	const card = document.createElement('div')
	const cardRow = document.createElement('div')
	const cardImgCol = document.createElement('div')
	const cardImg = document.createElement('img')

	const cardBodCol = document.createElement('div')
	const cardBody = document.createElement('div')
	const cardTitle = document.createElement('h5')
	const cardText = document.createElement('p') 
	const cardPrice = document.createElement('small')
	const cardPriceNo = document.createElement('h3')  
	const cardBtn = document.createElement('a') 

	cardBtn.innerHTML = "CLICK ME";
	cardTitle.innerHTML = "hello";

	card.setAttribute('class', 'card mb-3')
	cardRow.setAttribute('class', 'row g-0')
	cardImgCol.setAttribute('class', 'col-md-4')
	cardImg.setAttribute('src', 'http://localhost:3000' + imgSrc)

	cardBodCol.setAttribute('class', 'cal-mb-8')
	cardBody.setAttribute('class', 'card-body')
	cardTitle.setAttribute('class', 'card-title')
	cardText.setAttribute('class', 'card-text')
	cardPrice.setAttribute('class', 'text-muted')
	cardPriceNo.setAttribute('class', '')
	cardBtn.setAttribute('class', 'btn btn-primary stretched-link')

	card.appendChild(cardRow)
	cardRow.appendChild(cardImgCol , cardBodCol)
	cardImgCol.appendChild(cardImg)

	cardBodCol.appendChild(cardBody)
	cardBody.appendChild(cardTitle , cardText , cardPrice , cardBtn)

	cardPrice.appendChild(cardPriceNo)

	return card
}

const listOfTeddies = [
	{
		_id: 123,
		name: 'Big ted',
		price: 3500,
		description: 'hello',
		imageUrl: '/images/teddy_1.jpg'
	},
	{
		_id: 123,
		name: 'Big ted',
		price: 3500,
		description: 'hello',
		imageUrl: '/images/teddy_2.jpg'
	},
	{
		_id: 123,
		name: 'Big ted',
		price: 3500,
		description: 'hello',
		imageUrl: '/images/teddy_3.jpg'
	},
	{
		_id: 123,
		name: 'Big ted',
		price: 3500,
		description: 'hello',
		imageUrl: '/images/teddy_4.jpg'
	},
	{
		_id: 123,
		name: 'Big ted',
		price: 3500,
		description: 'hello',
		imageUrl: '/images/teddy_5.jpg'
	}
]

const productList = document.getElementById('product-list')
for (let i = 0; i < listOfTeddies.length; i++) {
	const teddy = listOfTeddies[i]
	const teddyCard = card(teddy.imageUrl)
	
	productList.appendChild(teddyCard)
}

const navElement = document.getElementById('nav-element')
for (let i = 0; i < navPic.length; i++) {
	const logo = navPic[i]
	const navLogo = card(logo.imageUrl)
	
	navElement.appendChild(navLogo)
}




