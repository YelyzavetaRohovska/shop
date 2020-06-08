addNavigationCategory();
const storage = window.localStorage;
function showDetails(e){
    const target = e.target;
    if(!target.className.match('card') && target.tagName !== 'IMG'){
        return;
    }
    const card_info = target.closest('.card');
    const img_src = card_info.querySelector('img').src;
    const title = card_info.querySelector('.card__title').innerHTML;
    const card_price = card_info.querySelector('.card__price');
    card = {
        img_src : card_info.querySelector('img').getAttribute('src'),
        title : card_info.querySelector('.card__title').innerHTML,
        card_price : card_info.querySelector('.card__price>span').innerHTML
    }
    storage.setItem('current_card', JSON.stringify(card));
    location.href = "product-details.html";
}
document.querySelectorAll('.card').forEach(element => {
    element.addEventListener('click',showDetails)
});
function addNavigationCategory(){
    const nav = document.querySelector('.current-nav');
    nav.children[1].innerHTML = localStorage.cur_category;
}
carousel();
