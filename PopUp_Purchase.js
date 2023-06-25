
let PopUp_Purchase = document.getElementById("PopUp_Purchase");
function show_Purchase(){
    PopUp_Purchase.style.marginTop = "6%";
    PopUp_Purchase.style.visibility = "visible";
    PopUp_Purchase.style.opacity = "1";
};


function hide_Purchases(){
    PopUp_Purchase.style.marginTop = "1%";
    PopUp_Purchase.style.visibility = "hidden";
    PopUp_Purchase.style.opacity = "0";
    showOrderDetails();
    reset();
 
};

function reset(){
            document.getElementById("orderCode").value = "";
            orderName.innerHTML = "";
            orderImage.src = "Resources/IMAGES/popUp-img-preview.png";
            document.getElementById("increase").disabled = true;
            document.getElementById("decrease").disabled = true;
            count = 1;
            orderQuantity.value = 1;   
            checkout_Quantity.innerHTML = "1";   
            checkout_Total.innerHTML = "0";    
}

function clear_Total(){
    checkout_Total.innerHTML = "0";  
}


let checkout_Total = document.getElementById("checkout_Total");

function showTotal() {
    let price_forTotal = document.getElementById("checkout_UnitPrice").innerHTML;
    let quantity_forTotal = document.getElementById("quantity").value;
    price_forTotal = Number(price_forTotal);
    quantity_forTotal = Number(quantity_forTotal);
    checkout_Total.innerHTML = price_forTotal * quantity_forTotal;
}

function total_Delay(){
    setTimeout(() => {
        showTotal();
        }, 700);
}

// MENU OBJECT ARRAY IS IN 'BEST SELLING JS'

// FOR ORDER NAME AND IMAGE TO REFLECT
let orderName = document.getElementById("orderName");
let orderImage = document.getElementById("orderImage");

function showOrderDetails(){

    document.getElementById("increase").disabled = false;
    document.getElementById("checkout_UnitPrice").innerHTML = "0";

    let orderSize = document.getElementsByName('orderSize');
    for (let i = 0; i < orderSize.length; i++) {
    orderSize[i].checked = false;
    }

    let orderCode = document.getElementById("orderCode").value;
    let indx;

    function orderName_Img(){
        orderName.innerHTML = coffeeAr[indx].name;
        orderName.innerHTML = orderName.innerHTML.slice(4).toUpperCase();
        orderImage.src = coffeeAr[indx].imgSource;
    }


    switch(orderCode){

        case '':
            reset();
        break;

        case 'C1':
            indx = 0;
            orderName_Img();
            clear_Total();
        break;

        case 'C2':
            indx = 1;
            orderName_Img();
            clear_Total();
        break;

        case 'C3':
            indx = 2;
            orderName_Img();
            clear_Total();
        break;

        case 'C4':
            indx = 3
            orderName_Img();
            clear_Total();
        break;

        case 'C5':
            indx = 4;
            orderName_Img();
            clear_Total();
        break;

        case 'C6':
            indx = 5;
            orderName_Img();
            clear_Total();
        break;

        case 'C7':
            indx = 6;
            orderName_Img();
            clear_Total();
        break;

        case 'C8':
            indx = 7;
            orderName_Img();
            clear_Total();
        break;

        case 'C9':
            indx = 8;
            orderName_Img();
            clear_Total();
        break;

        
    }

}

// FOR PRICE

let small = document.getElementById("small");
let medium = document.getElementById("medium");
let large = document.getElementById("large");

let checkout_UnitPrice;
let orderCode;
  
function code_UnitPrice(){
    
    checkout_UnitPrice = document.getElementById("checkout_UnitPrice");
    orderCode = document.getElementById("orderCode").value;
};


small.onclick = function(){
    code_UnitPrice();

    switch(true){
        case (orderCode === "C1" && small.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[0].sprice;
            total_Delay();
        break;

        case (orderCode === "C2" && small.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[1].sprice;
            total_Delay();
        break;

        case (orderCode === "C3" && small.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[2].sprice;
            total_Delay();
        break;

        case (orderCode === "C4" && small.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[3].sprice;
            total_Delay();
        break;

        case (orderCode === "C5" && small.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[4].sprice;
            total_Delay();
        break;

        case (orderCode === "C6" && small.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[5].sprice;
            total_Delay();
        break;
        
        case (orderCode === "C7" && small.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[6].sprice;
            total_Delay();
        break;
        
        case (orderCode === "C8" && small.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[7].sprice;
            total_Delay();
        break;

        case (orderCode === "C9" && small.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[8].sprice;
            total_Delay();
        break;
    }
};

medium.onclick = function(){
    code_UnitPrice();
    total_Delay();
    
    switch(true){
        case (orderCode === "C1" && medium.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[0].mprice;
            total_Delay();
        break;
    
        case (orderCode === "C2" && medium.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[1].mprice;
            total_Delay();
        break;
    
        case (orderCode === "C3" && medium.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[2].mprice;
            total_Delay();
        break;
    
        case (orderCode === "C4" && medium.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[3].mprice;
            total_Delay();
        break;
    
        case (orderCode === "C5" && medium.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[4].mprice;
            total_Delay();
        break;
    
        case (orderCode === "C6" && medium.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[5].mprice;
            total_Delay();
        break;
        
        case (orderCode === "C7" && medium.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[6].mprice;
            total_Delay();
        break;
        
        case (orderCode === "C8" && medium.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[7].mprice;
            total_Delay();
        break;
    
        case (orderCode === "C9" && medium.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[8].mprice;
            total_Delay();
        break;
    }
};

large.onclick = function(){
    code_UnitPrice();
    total_Delay();

    switch(true){
        case (orderCode === "C1" && large.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[0].lprice;
            total_Delay();
        break;
    
        case (orderCode === "C2" && large.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[1].lprice;
            total_Delay();
        break;
    
        case (orderCode === "C3" && large.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[2].lprice;
            total_Delay();
        break;
    
        case (orderCode === "C4" && large.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[3].lprice;
            total_Delay();
        break;
    
        case (orderCode === "C5" && large.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[4].lprice;
            total_Delay();
        break;
    
        case (orderCode === "C6" && large.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[5].lprice;
            total_Delay();
        break;
        
        case (orderCode === "C7" && large.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[6].lprice;
            total_Delay();
        break;
        
        case (orderCode === "C8" && large.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[7].lprice;
            total_Delay();
        break;
    
        case (orderCode === "C9" && large.checked):
            checkout_UnitPrice.innerHTML = coffeeAr[8].lprice;
            total_Delay();
        break;
    }
};

 
// FOR QUANTITY

let orderQuantity = document.getElementById("quantity");
let checkout_Quantity = document.getElementById("checkout_Quantity");
let count = 1;

function dec(){
    count -= 1;
    orderQuantity.value = count;
    
    if (count == 1){
        document.getElementById("decrease").disabled = true;
    }

    setTimeout(() => {
        checkout_Quantity.innerHTML = orderQuantity.value;
    }, 500);

        total_Delay();

}

function inc(){
    count += 1;
    orderQuantity.value = count;

    
    document.getElementById("decrease").disabled = false;

    setTimeout(() => {
        checkout_Quantity.innerHTML = orderQuantity.value;
    }, 500);

    total_Delay();
}