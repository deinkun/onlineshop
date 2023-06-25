let checkPreview = document.getElementById("checkoutPreview");

function checkoutPreview(){
    checkPreview.style.visibility = "visible";

    let orderName = document.getElementById("orderName");
    let order_Name = document.getElementById("order_Name");

    order_Name.value = orderName.innerHTML;



}