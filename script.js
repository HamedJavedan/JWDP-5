function nav(imgSrc) {
	const nav = document.createElement('nav')
	const navContain = document.createElement('div')
	const navBrand = document.createElement('a')
	const navImg = document.createElement('img')

	nav.setAttribute('class', 'navbar navbar-light bg-light mb-4')
	navContain.setAttribute('class', 'container')
	navBrand.setAttribute('class', 'navbar-brand')
	navImg.setAttribute('src', 'imgSrc')

	nav.appendChild(navContain)
	navContain.appendChild(navBrand)

	return card
}
function card(imgSrc) {
	const card = document.createElement('div')
	const cardRow = document.createElement('div')
	const cardImgCol = document.createElement('div')
	const cardImg = document.createElement('img')
	
	card.setAttribute('class', 'card mb-3')
	cardRow.setAttribute('class', 'row g-0')
	cardImgCol.setAttribute('class', 'col-md-4')
	cardImg.setAttribute('src', imgSrc)
	
	card.appendChild(cardRow)
	cardRow.appendChild(cardImgCol)
	cardImgCol.appendChild(cardImg)
	
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
	}
]
const productList = document.getElementById('product-list')
for (let i = 0; i < listOfTeddies.length; i++) {
	const teddy = listOfTeddies[i]
	const teddyCard = card(teddy.imageUrl)
	
	productList.appendChild(teddyCard)
}



