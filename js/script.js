//Define UI
let productCart = document.querySelector('#cart');






//Function

//Add Item to Cart
function addCart(e){
    
    let ele = e.target.parentElement;
    let product = ele.childNodes[0].nodeValue.trim();
    let c1 = document.createElement('li');
    let c2 = document.createTextNode(product + " ");
    c1.appendChild(c2);
    let link = document.createElement('button');
    link.setAttribute('type','button');
    link.innerHTML = 'Remove';
    c1.appendChild(link);
    //console.log(c1);
    productCart.appendChild(c1);
    productCart.style.border = "1px solid rgba(232, 222, 222, 0.939)";
    productCart.style.textAlign = "center";
    storeProductLocalStorage(product);
    


} 

//Store product name in LocalStorage
function storeProductLocalStorage(product){
    let products;
    if(localStorage.getItem('products') === null){
        products = [];
    }
    else{
        products = JSON.parse(localStorage.getItem('products'));
        
    }
    products.push(product);
    localStorage.setItem('products',JSON.stringify(products));
}

//loaded product from local storage
function getProduct(){
    let products;
    if(localStorage.getItem('products') === null){
        products = [];
    }
    else{
        products = JSON.parse(localStorage.getItem('products'));
        
    }
    products.forEach(function(product){
        let c1 = document.createElement('li');
        let c2 = document.createTextNode(product + " ");
        c1.appendChild(c2);
        let link = document.createElement('button');
        link.setAttribute('type','button');
        link.innerHTML = 'Remove';
        c1.appendChild(link);
        //console.log(c1);
        productCart.appendChild(c1);
        productCart.style.border = "1px solid rgba(232, 222, 222, 0.939)";
        productCart.style.textAlign = "center";
    })
}

// clear product from Cart (front-end)
function clearProduct(e){
    if (e.target.hasAttribute("type")){
        if(confirm("are you sure?")){
            let ele = e.target.parentElement;
            ele.remove();
            removeProductFromLocalStorage(ele);
            //console.log(ele);
        }

    }
}

//remove product from local storage (back-end)
function removeProductFromLocalStorage(productItem){
    let products;
    if(localStorage.getItem('products') === null){
        products = [];
    }
    else{
        products = JSON.parse(localStorage.getItem('products'));
        
    }
    let li = productItem;
    li.removeChild(li.lastChild);
    let val = 1 ;
    products.forEach(function(productName,index){
        if(li.textContent.trim() === productName && val == 1){
            val +=1 ;
            products.splice(index,1);
        }
    })
    localStorage.setItem('products',JSON.stringify(products));
}

//clear all products from cart
function allClear(){
    alert("Are you sure?")
    while(productCart.firstChild){
        productCart.removeChild(productCart.firstChild);
    }
    clearAllFromLocalStorage();
}

//clear all product from local storage
function clearAllFromLocalStorage(){
    localStorage.clear();
}




//Add EventListener
document.querySelector('#add_cart_btn1').addEventListener('click',addCart);
document.querySelector('#add_cart_btn2').addEventListener('click',addCart);
document.querySelector('#add_cart_btn3').addEventListener('click',addCart);
document.querySelector('#add_cart_btn4').addEventListener('click',addCart);
document.querySelector('#add_cart_btn5').addEventListener('click',addCart);
document.addEventListener('DOMContentLoaded',getProduct);
productCart.addEventListener('click',clearProduct);
document.querySelector('#all_clear').addEventListener('click',allClear);
