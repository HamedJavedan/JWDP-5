function nav(imgSrc) {
	const nav = document.createElement('nav')
	const navContain = document.createElement('div')
	const navBrand = document.createElement('a')
	const navImg = document.createElement('img')

	nav.setAttribute('class', 'navbar navbar-light bg-secondary mb-4')
	navContain.setAttribute('class', 'container')
	navBrand.setAttribute('class', 'navbar-brand')
	navBrand.setAttribute('href', '#')
	navImg.setAttribute('src', imgSrc)
	navImg.setAttribute('height', '30')
	navImg.setAttribute('alt', 'Orinoco')

	nav.appendChild(navContain)
	navContain.appendChild(navBrand)
	navBrand.appendChild(navImg)

	return nav
}

const navPic = [
	{
		_id: 456,
		name: 'logo',
		imageUrl: 'https://user.oc-static.com/upload/2019/12/12/1576141243078_Orinoco%20logo.png'
	}
]

function card(imgSrc, name, description, price,) {
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

	cardBtn.innerHTML = 'view Product';
	cardTitle.innerHTML = name;
	cardText.innerHTML = description;
	cardPriceNo.innerHTML = price;


	card.setAttribute('class', 'card mb-3')
	cardRow.setAttribute('class', 'row g-0')
	cardImgCol.setAttribute('class', 'col-md-4')
	cardImg.setAttribute('src', 'http://localhost:3000' + imgSrc)
	cardImg.setAttribute('class', 'img-fluid rounded-start')
	cardImg.setAttribute('alt', "")

	cardBodCol.setAttribute('class', 'cal-mb-8')
	cardBody.setAttribute('class', 'card-body')
	cardTitle.setAttribute('class', 'card-title')
	cardText.setAttribute('class', 'card-text')
	cardPrice.setAttribute('class', 'text-muted')
	cardPriceNo.setAttribute('class', '')
	cardBtn.setAttribute('href', '#')
	cardBtn.setAttribute('class', 'btn btn-primary stretched-link')

	card.appendChild(cardRow)
	cardRow.appendChild(cardImgCol)
	cardRow.appendChild(cardBodCol)
	cardImgCol.appendChild(cardImg)

	cardBodCol.appendChild(cardBody)
	cardBody.appendChild(cardTitle)
	cardBody.appendChild(cardText)
	cardBody.appendChild(cardPrice)
	cardBody.appendChild(cardBtn)

	cardPrice.appendChild(cardPriceNo)

	return card
}

const listOfTeddies = [
	{
		name: 'Small Teddy Bear',
		price: '$10',
		description: '【High Quality】This classic stuffed bear toy is made of high quality plush, which is really soft. And the inside filling is cotton, which is plump but not too tough. It is so good to be your kids or pets partner.',
		imageUrl: '/images/teddy_1.jpg'
	},
	{
		name: 'Cute Teddy Bear',
		price: '$5',
		description: '【Cute Plush Toys】With this plush toy has a cuddly appearance and 45*32 centimeters dimension',
		imageUrl: '/images/teddy_2.jpg'
	},
	{
		name: 'Twin Teddy Bear',
		price: '$15',
		description: 'Beautiful new design made from quality super soft cream plush material this really cute teddy bear has a big brown soft nose and cute red heart.',
		imageUrl: '/images/teddy_3.jpg'
	},
	{
		name: 'The T-shirt Teddy Bear',
		price: '$20',
		description: 'Lovely big Brown teddy bear with blue T-shirt.',
		imageUrl: '/images/teddy_4.jpg'
	},
	{
		name: 'Aurora Bonnie Teddy Bear',
		price: '$3',
		description: 'Soft and Cuddly, Great gift and Cute Smiley face with great price',
		imageUrl: '/images/teddy_5.jpg'
	}
]

function footer(imgSrc) {
	const footer = document.createElement('footer')
	const footerOrg = document.createElement('div')
	const footerOrgLogo = document.createElement('a')
	const footerOrgLogoImg = document.createElement('img')
	const footerOrgLogoName = document.createElement('span')

	footer.setAttribute('class', 'd-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top')
	footerOrg.setAttribute('class', 'col-md-4 d-flex align-items-center')
	footerOrgLogo.setAttribute('class', 'navbar-brand')
	footerOrgLogo.setAttribute('href', '#')
	footerOrgLogoImg.setAttribute('src', imgSrc)
	footerOrgLogoImg.setAttribute('height', '25')
	footerOrgLogoImg.setAttribute('alt', 'Orinoco')
	footerOrgLogoName.setAttribute('class', 'text-muted')

	footerOrgLogoName.innerHTML = '© 2021 Company, Inc';

	footer.appendChild(footerOrg)
	footerOrg.appendChild(footerOrgLogo)
	footerOrg.appendChild(footerOrgLogoName)
	footerOrgLogo.appendChild(footerOrgLogoImg)

	return footer
}

const footerP = [
	{
		name: 'logoImg',
		imageUrl: 'https://user.oc-static.com/upload/2019/12/12/1576141243078_Orinoco%20logo.png'
	}
]

const productList = document.getElementById('product-list')
for (let i = 0; i < listOfTeddies.length; i++) {
	const teddy = listOfTeddies[i]
	const teddyCard = card(teddy.imageUrl,teddy.name,teddy.description,teddy.price)
	
	productList.appendChild(teddyCard)
}

const navElement = document.getElementById('nav-element')
for (let i = 0; i < navPic.length; i++) {
	const logo = navPic[i]
	const navLogo = nav(logo.imageUrl)
	
	navElement.appendChild(navLogo)
}

const footerElement = document.getElementById('footer-element')
for (let i = 0; i < footerP.length; i++) {
	const logoImg = footerP[i]
	const footerLogoImg = footer(logoImg.imageUrl)
	
	footerElement.appendChild(footerLogoImg)
}






