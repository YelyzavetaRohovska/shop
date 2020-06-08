function fillNavigation(e){
    if(e.target.tagName !== 'A' && !e.target.closest('.card')){
        return;
    }
    if(e.target.className.match('categories__link') || e.target.className.match('info__link')){
        localStorage.setItem("cur_category", e.target.innerHTML);
    }
    if(e.target.closest('.product')){
        localStorage.setItem("curTitleOfProduct", e.target.closest('.card').children[1].innerHTML)
        localStorage.setItem("curTypeOfProduct", e.target.closest('.product').children[0].innerHTML);
    }
}
document.onclick = fillNavigation;

function showSearch(e) {
    if(e.code != "Enter" && e.type == "keydown"){
        return;
    }
    const btn = document.querySelector('.search__button');
    const input = document.querySelector('.search__field');
    console.log('code', e.code)
    if (!input.value) {
        input.classList.toggle('search__field_hidden');
    } else {
        location.href = "category-all.html";
    }
}
document.querySelector('.search__button').onclick = showSearch;

function carousel(){
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const slider = document.querySelector('.carousel__item');
    const img = document.querySelectorAll('.carousel__item img');
    let counter = 0;
    let length = img.length - 4;
    const stepSize = img[0].clientWidth;
    next.addEventListener('click', ()=>{
        counter >= length ? counter = -1 : null;
        slider.classList.add('.carousel__item-animation')
        counter++;
        slider.style.transform = `translateX(${-stepSize*counter}px)`;
    });
    prev.addEventListener('click', ()=>{
        counter <= 0 ? counter =length+1 : null;
        slider.classList.add('.carousel__item-animation')
        counter--;
        slider.style.transform = `translateX(${-stepSize*counter}px)`;
    });
}
function countProducts(){
    document.querySelector('.navbar__product-bag>a>span').innerHTML = `(${JSON.parse(localStorage.listOfProducts).length})`;
}
window.onload = countProducts;

const seedLocalStorage = () => {
    const currentProducts = localStorage.getItem('listOfProducts')

    if (currentProducts) return

    const defaultCartItems = JSON.stringify([
        {
            img: 'img/product-desc/dresses/dress1_1.webp',
            title: 'Product Title',
            article: '567646886',
            color: "pink",
            size: 6,
            price: '$270'
        },
        {
            img: 'img/product-desc/dresses/dress4_1.webp',
            title: 'Product Title',
            article: '567646233',
            color: "pink",
            size: 8,
            price: '$200'
        },
        {
            img: 'img/product-desc/t-shirts/t-shirt2_1.webp',
            title: 'Product Title',
            article: '567646886',
            color: "pink",
            size: 15,
            price: '$20'
        }
    ])

    localStorage.setItem('listOfProducts', defaultCartItems)
}
seedLocalStorage();


