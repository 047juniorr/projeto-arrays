const list = document.querySelector('ul')
const h2Msg = document.querySelector('h2')
const buttonShowAll = document.querySelector('.show-all')
const buttonDiscount = document.querySelector('.discount-price')
const buttonAllPrice =document.querySelector('.price-all')
const buttonFilter = document.querySelector('.filter-button')
let myLi = ''


function formatAllItens(value){
    const newValue = value.toLocaleString('pt-br',{
        style: 'currency', 
        currency: 'BRL'});
        return newValue
}

function showAll(productArray) {
    myLi = ''
    productArray.forEach(product => {
        myLi += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price"> ${formatAllItens(product.price)}</p>
        </li>`
    })
    list.innerHTML = myLi
}

function newValuesPrices() {
    const newValues = menuOptions.map(product => ({
        ...product,
        price: product.price * 0.9,
    }))

    showAll(newValues)
}

function totalValue() {
    const valueTotal = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    
    list.innerHTML = `
    <li>
        <p>O valor de todos os itens é ${formatAllItens(valueTotal)}</p>
    </li>`
}

function filterVegan(){
    const veganFilter = menuOptions.filter(item => item.vegan)

    showAll(veganFilter)
}




buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonDiscount.addEventListener('click', newValuesPrices)
buttonAllPrice.addEventListener('click', totalValue)
buttonFilter.addEventListener('click', filterVegan)