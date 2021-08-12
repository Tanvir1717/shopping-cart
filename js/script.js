let addToCartBtn = document.getElementsByClassName('addToCartBtn');

for (var i = 0; i < addToCartBtn.length; i++) {

    addToCartBtn[i].addEventListener('click', cartContainer);
}

function cartContainer(e) {

    currentAddToCartBtn = e.target;

    let productContent = currentAddToCartBtn.parentElement;

    let productTitle = productContent.getElementsByClassName('productTitle')[0].innerText;

    let productPrice = productContent.getElementsByClassName('productPrice')[0].innerText;

    let productImg = productContent.getElementsByClassName('productImg')[0].src;

    newCartRow(productTitle, productPrice, productImg);

    let cartTitle = cartList.getElementsByClassName('cartTitle');

    for (var i = 0; i < cartTitle.length; i++) {
        if (cartTitle[i].innerText == productTitle) {
            alert("Already added to cart!");
            return;
        }
    }
}
//7--
let cartList = document.getElementsByClassName('table')[0];

function newCartRow(productTitle, productPrice, productImg) {

    let div = document.createElement('div');
    div.classList.add('row');
    insideDivContent = `<div class="col-md-3 cartImage"><img src="${productImg}"></div>
    <div class="col-md-3 cartTitle">${productTitle}</div>
    <div class="col-md-3 cartPrice">${productPrice}</div>
    <div class="col-md-3 removeBtn">Remove</div>`;

    div.innerHTML = insideDivContent;
    cartList.appendChild(div);

    let removeBtn = document.getElementsByClassName('removeBtn'); //defined

    for (var i = 0; i < removeBtn.length; i++) {
        removeBtn[i].addEventListener('click', removeFromCart);
    }

}

function removeFromCart(e) {
    e.target.parentElement.remove();
}