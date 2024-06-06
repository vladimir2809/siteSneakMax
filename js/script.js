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
var btnNextStep = null;
var divSelectionFrame = null;
var countFrame = 0;
var rangeMin = null;
var rangeMax = null;
var priceMin = null;
var priceMax = null;
var click = false;
window.addEventListener('load', function () {
    basketIcon = document.getElementById("basketIcon");
    countBasket = document.getElementById("countBasket");
    basket = document.getElementById("divBasket");
    buttonBasket=document.getElementById("buttonBasket");
    order=document.getElementById("divPlacingOrder");

    btnNextStep=document.getElementById("btnNextStep");

    divSelectionFrame=document.getElementById("divSelectionForYou");

    productArr = document.querySelectorAll('.product');
    modalProduct=document.getElementById("divModalProduct");
    rangeMin = document.getElementById("rangeMin");
    rangeMax = document.getElementById("rangeMax");
    priceMin = document.getElementById("priceMin");
    priceMax = document.getElementById("priceMax");
    for (let i = 0; i < productArr.length;i++)
    {
        productArr[i].addEventListener('click', function () {
            //console.log('click');
            
           // console.log(window.pageYOffset);
            openModalProduct();
        });
    }
    
    basketIcon.addEventListener('click', function () {
        openBasket();     
    });
    countBasket.addEventListener('click', function () {
        openBasket();     
    });
    btnNextStep.addEventListener('click', function () {
        if(click==false) openNextStepFrame();     
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
    /*rangeMin.addEventListener('change', function () {
        priceMin.innerHTML = this.value;
        console.log(this.value);
    });*/
    setInterval(function(){
        if (Number(rangeMin.value)<Number(rangeMax.value))
        {
            priceMin.innerHTML = rangeMin.value;
            priceMax.innerHTML = rangeMax.value;
        }
        else
        {
            priceMin.innerHTML = rangeMax.value;
            priceMax.innerHTML = rangeMin.value;
        }
       
        console.log(rangeMin.value);
        
    },100)
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
    modalProduct.style.top = 80+window.pageYOffset+'px';
    //modalProduct.style.left = "50%";
    console.log(window.pageYOffset);
}
function openNextStepFrame() 
{
    click = true;
    //if (countFrame==0)
    {
        divSelectionFrame.style.display = 'none';
        countFrame++;
        if (countFrame!=3)
        {

        
            divSelectionFrame = document.getElementById("divSelectionFrame"+countFrame);
            divSelectionFrame.style.display = 'block';
            btnNextStep=document.getElementById("btnNextStep"+countFrame);
            console.log(countFrame);
            
            btnNextStep.addEventListener('click', function () {
                if(click==false) openNextStepFrame();     
            });
        }
        else
        {
            divSelectionFrame = document.getElementById("divSelectionReady");
            divSelectionFrame.style.display = 'block';
        }
    }
}
function closeModalProduct()
{
    modalProduct.style.display = "none";
    modalProductDisplay = false;
}
