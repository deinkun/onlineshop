let MenuBuyNow = document.getElementsByClassName("menu-BuyNow");

for(let x = 0; x < MenuBuyNow.length; x++){
    MenuBuyNow[x].onclick = function(){
        show_Purchase();
        let orderCode = document.getElementById("orderCode");

        switch(x){
            case 0:
                orderCode.value = "C1";
                showOrderDetails();
            break;

            case 1:
                orderCode.value = "C2";
                showOrderDetails();
            break;

            case 2:
                orderCode.value = "C3";
                showOrderDetails();
            break;

            case 3:
                orderCode.value = "C4";
                showOrderDetails();
            break;

            case 4:
                orderCode.value = "C5";
                showOrderDetails();
            break;

            case 5:
                orderCode.value = "C6";
                showOrderDetails();
            break;

            case 6:
                orderCode.value = "C7";
                showOrderDetails();
            break;

            case 7:
                orderCode.value = "C8";
                showOrderDetails();
            break;

            case 8:
                orderCode.value = "C9";
                showOrderDetails();
            break;
        }
    }
    }
