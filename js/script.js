var basketIcon = null;
var countBasket = null;
var basket = null;
var basketMouse = false;
var basketDisplay = false;
var buttonBasket = null;
var order = null;
var productArr = [];
var modalProduct = null;
var modalProductDisplay = false;
var modalProductMouse = false;
var click = false;
window.addEventListener('load', function () {
    basketIcon = document.getElementById("basketIcon");
    countBasket = document.getElementById("countBasket");
    basket = document.getElementById("divBasket");
    buttonBasket=document.getElementById("buttonBasket");
    order=document.getElementById("divPlacingOrder");

    productArr = document.querySelectorAll('.product');
    modalProduct=document.getElementById("divModalProduct");
    for (let i = 0; i < productArr.length;i++)
    {
        productArr[i].addEventListener('click', function () {
            //console.log('click');
            
            console.log(window.pageYOffset);
            openModalProduct();
        });
    }
    
    basketIcon.addEventListener('click', function () {
        openBasket();     
    });
    countBasket.addEventListener('click', function () {
        openBasket();     
    });
    window.addEventListener('click', function () {
        if (basketDisplay==true && click==false && basketMouse==false)
        {
            closeBasket();
        }
        if (modalProductDisplay==true && click==false && modalProductMouse==false)
        {
            closeModalProduct();
        }
    });    
    basket.addEventListener('mouseover', function () {
        basketMouse = true;
    });
    basket.addEventListener('mouseout', function () {
        basketMouse = false;
    });
    modalProduct.addEventListener('mouseover', function () {
       modalProductMouse = true;
    });
    modalProduct.addEventListener('mouseout', function () {
        modalProductMouse = false;
    });
    buttonBasket.addEventListener('click', function () {
        closeBasket();
        window.scrollTo(0, 0);
        openOrder();

    });
    window.addEventListener('mouseup', function () {
        click = false;

    });
});
function openBasket(){
    basketDisplay = true;
    click = true;
    basket.style.display = "block";
    basket.style.top = "72px";
    basket.style.left = "50%";
}
function closeBasket()
{
    basket.style.display = "none";
    basketDisplay = false;
}
function openOrder() 
{
    click = true;
    order.style.display = "block";
    order.style.top = "80px";
    order.style.left = "30%";
}
function openModalProduct()
{
    click = true;
    modalProductDisplay = true;
    //modalProduct.style.position = "fixed";
    modalProduct.style.display = "block";
    modalProduct.style.top = 10+window.pageYOffsetpx+'px';
    //modalProduct.style.left = "50%";
}
function closeModalProduct()
{
    modalProduct.style.display = "none";
    modalProductDisplay = false;
}
