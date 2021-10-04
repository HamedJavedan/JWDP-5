function product(imgSrc, name, description, price,) {
	const pro = document.createElement('div')
	const proCont = document.createElement('div')
	const proContHead = document.createElement('div')
	const proContHeadTitle = document.createElement('h5')
	const proContBody = document.createElement('div')
	const proContBodyImg = document.createElement('Img')
	const proContBody1 = document.createElement('div')
	const proContBody1Text = document.createElement('P')
	const proContBody1Price = document.createElement('Small')
	const proContBody1PriceNo = document.createElement('h3')
	const proContBtn = document.createElement('div')
	const proContBtn1 = document.createElement('button')
	const proContBtn2 = document.createElement('button')

	pro.setAttribute('class', 'modal-dialog')
	pro.setAttribute('role', 'document')
	proCont.setAttribute('class', 'modal-content rounded-6 shadow')
	proContHead.setAttribute('class', 'modal-header border-bottom-0')
	proContHeadTitle.setAttribute('class', 'modal-title')
	proContBody.setAttribute('class', 'modal-header border-bottom-0')
	proContBodyImg.setAttribute('class', 'img-fluid rounded-start')
	proContBodyImg.setAttribute('src', imgSrc)
	proContBody1.setAttribute('class', 'modal-body py-0')
	proContBody1Text.setAttribute('class', '')
	proContBody1Price.setAttribute('class', 'text-muted')
	proContBody1PriceNo.setAttribute('class', '')
	proContBtn.setAttribute('class', 'modal-footer flex-column border-top-0')
	proContBtn1.setAttribute('type', 'button')
	proContBtn1.setAttribute('class', 'btn btn-lg btn-primary w-100 mx-0 mb-2')
	proContBtn2.setAttribute('type', 'button')
	proContBtn2.setAttribute('class', 'btn btn-lg btn-light w-100 mx-0')

	pro.appendChild(proCont)
	proCont.appendChild(proContHead)
	proContHead.appendChild(proContHeadTitle)
	proCont.appendChild(proContBody)
	proContBody.appendChild(proContBodyImg)
	proCont.appendChild(proContBody1)
	proContBody1.appendChild(proContBody1Text)
	proContBody1.appendChild(proContBody1Price)
	proContBody1Price.appendChild(proContBody1PriceNo)
	proCont.appendChild(proContBtn)
	proContBtn.appendChild(proContBtn1)
	proContBtn.appendChild(proContBtn2)

	proContHeadTitle.innerHTML = name;
	proContBody1PriceNo = price;
	proContBody1Text = description;
	proContBodyImg = price;
	proContBtn1 = 'Add to Cart';
	proContBtn2 = 'Buy Now';

	return product
}

const TeddyPageList = [
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

const veiwProduct = document.getElementById('veiw-product')
for (let i = 0; i < TeddyPageList.length; i++) {
	const teddyPage = TeddyPageList[i]
	const teddyPageCard = product(teddyPage.imageUrl,teddyPage.name,teddyPage.description,teddyPage.price)
	
	veiwProduct.appendChild(teddyPageCard)
}