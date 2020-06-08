addNavigationCategoryDetails();
fillDetails();
function selectPicture(e){
    const target = e.target;
    let box;
    if(target.className !== 'about__img-sub'){
        return;
    }
    document.querySelector('.about__img-main').src = target.src;
}
document.querySelector('.about__img').onclick = selectPicture;
function selectSize(e){
    if(!e.target.className.toString().match('size-block__btn')){
        return;
    }
    document.querySelectorAll('.size-block__btn').forEach((btn)=>{
        btn.classList.remove('size-block__btn-active');
    })
    e.target.classList.add('size-block__btn-active');
}
document.querySelector('.size-block').onclick = selectSize;
function fillDetails(){
    const cardDetails = JSON.parse(localStorage.current_card);
    document.querySelector('.about__img-main').src = cardDetails.img_src;
    document.querySelector('.details__article>span').innerHTML = [1,1,1,1,1,1].map((item)=>{
        return Math.round(Math.random()*9);
    }).join("");
    document.querySelector('.details__title').innerHTML = cardDetails.title;
    document.querySelector('.details__price').innerHTML = cardDetails.card_price;
    document.querySelectorAll('.about__img-sub').forEach((img, index)=>{
        let imgIndex = cardDetails.img_src.indexOf('_')+1;
        let src = cardDetails.img_src.split("");
        src[imgIndex] = index+1;
        img.src = src.join("");
    });
}
function addNavigationCategoryDetails(){
    const nav = document.querySelector('.current-nav');
    nav.children[2].innerHTML = localStorage.curTypeOfProduct;
    nav.children[3].innerHTML = localStorage.curTitleOfProduct;
}
function rememberProduct(){
    let size;
    if(document.querySelector('.size-block__btn-active')){
        size = document.querySelector('.size-block__btn-active').innerHTML
    }
    else {
        alert("Please, choose size!!!");
        return;
    }
    // document.querySelector('.about__button').classList.add('about__button-active');
    // document.querySelector('.about__button').disabled = "disabled";
    const prod = {
        img : document.querySelector('.about__img>img').src,
        title : document.querySelector('.details__title').innerHTML,
        article : document.querySelector('.details__article>span').innerHTML,
        color : "pink",
        size :size,
        price : "$ " + document.querySelector('.details__price').innerHTML
    };
    let arr = JSON.parse(localStorage.getItem("listOfProducts")) || [];
    arr.push(prod);
    localStorage.setItem("listOfProducts", JSON.stringify(arr));
}
document.querySelector('.about__button').addEventListener('click', rememberProduct);
document.querySelector('.about__button').addEventListener('click', countProducts);
