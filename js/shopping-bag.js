function addToShoppingCart(){
  JSON.parse(localStorage.getItem("listOfProducts")).forEach((prod)=>{
      const newRow = document.querySelector('.template').cloneNode(true);
      newRow.classList.remove('template');
      newRow.querySelector('img').src = prod.img;
      newRow.querySelector('.shipment__title').innerHTML = prod.title;
      newRow.querySelector('.shipment__article').innerHTML = "ref: " + prod.article;
      newRow.querySelector('.shipment__color').innerHTML = prod.color;
      newRow.querySelector('.shipment__size').innerHTML = prod.size;
      newRow.querySelector('.shipment__price').innerHTML = prod.price;
      newRow.querySelector('.close').dataset.article = prod.article;
      document.querySelector('.total-price').before(newRow);
  });
}
addToShoppingCart();
function removeFromCart(e){
  if(e.target.className !== 'close'){
      return;
  }
  const article = e.target.dataset.article
  const items = JSON.parse(localStorage.getItem("listOfProducts"))
    .filter(el => el.article != article);
  localStorage.setItem('listOfProducts', JSON.stringify(items))
  const rowForDelete = e.target.closest('.cart-table__row');
  rowForDelete.parentNode.removeChild(rowForDelete);
}

const onRemoveButtonClick = (e) => {
  removeFromCart(e);
  countProducts(e);
  countTotalPrice();
}

document.querySelectorAll('.close').forEach(btn=>{
  btn.addEventListener('click', onRemoveButtonClick);
});

function countTotalPrice() {
  const price = Array.from(document.querySelectorAll('.shipment__price'))
    .map(el => parseInt(el.innerHTML.slice(1)))
    .reduce((sum, el)=> sum+= el, -699);

  document.querySelector('.total-price__amount').innerHTML = `${price} $`;
}

document.querySelector('.buy').onclick = ()=> location.href = "thank-you.html";
countTotalPrice();
