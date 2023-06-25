let sideNavBar_open = document.getElementById("sideNavBar_open");
let sideNavMenu = document.getElementById("sideNavMenu");

function showNav(){
    sideNavBar_open.style.transform = "translateX(20vw)";
    sideNavMenu.style.width = "15%";
}

function hideNav(){
    sideNavBar_open.style.transform = "translateX(0px)";
    sideNavMenu.style.width = "0px";
}

/*
const C1 = {
    name: "sss",
}

function showOrderName(){
    let OrderNumber = document.getElementById("orderNumber").value;
    let OrderName = document.getElementById("orderName");

    

    switch(OrderNumber){
        case 'C1':
            OrderName.value = C1.name;
            break;

        case 'C2':
            // OrderName.value = "";
            break;

        case 'C3':
            OrderName.value = "";
            break;
    }


}

//
*/
