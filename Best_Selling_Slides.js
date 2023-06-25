let coffeeAr = [{
    name: "C1. Tuesday Bake Latte",
    sprice: 119,
    mprice: 139,
    lprice: 159,
    imgSource: "Resources/BEVERAGES/Tuesday Bake Latte.jpg"
},{
    name: "C2. Cafe Whitney Latte",
    sprice: 109,
    mprice: 119,
    lprice: 129,
    imgSource: "Resources/BEVERAGES/Cafe Whitney Latte.jpg"
},{
    name: "C3. ColeCo. Specialty Coffee Latte",
    sprice: 119,
    mprice: 129,
    lprice: 139,
    imgSource: "Resources/BEVERAGES/ColeCo. Specialty Coffee Latte.jpg"
},{
    name: "C4. Decouverte Latte",
    sprice: 129,
    mprice: 139,
    lprice: 149,
    imgSource: "Resources/BEVERAGES/Decouverte Latte.jpg"
},{
    name: "C5. The Curator Espresso with Milk",
    sprice: 99,
    mprice: 109,
    lprice: 119,
    imgSource: "Resources/BEVERAGES/The Curator Espresso with Milk.jpg"
},{
    name: "C6. Prominent MNL Latte",
    sprice: 119,
    mprice: 139,
    lprice: 159,
    imgSource: "Resources/BEVERAGES/Prominent MNL Latte.jpg"
},{
    name: "C7. Cafe Seventy Six Whole Milk Latte",
    sprice: 109,
    mprice: 119,
    lprice: 129,
    imgSource: "Resources/BEVERAGES/Cafe Seventy Six Whole Milk Latte.jpg"
},{
    name: "C8. Bottled Ice White",
    sprice: 139,   
    mprice: 149,
    lprice: 159,
    imgSource: "Resources/BEVERAGES/Habitual Coffee Bottled Ice White.jpg"
},{
    name: "C9. Arabica Iced Caffe Latte",
    sprice: 99,
    mprice: 109,
    lprice: 119,
    imgSource: "Resources/BEVERAGES/Arabica Iced Caffe Latte.jpg"
}];

let menuProduct_Image = document.getElementsByClassName("menu-product-image");
let bsProduct_Image = document.getElementsByClassName("bs-product-image");

let menuProduct_Text = document.getElementsByClassName("product-text");
let bsProduct_Text = document.getElementsByClassName("best-selling-text");

let menuProduct_Price = document.getElementsByClassName("product-price");
let bsProduct_Price = document.getElementsByClassName("best-selling-price");


for(let img = 0; img < menuProduct_Image.length; img++){
    menuProduct_Image[img].src = coffeeAr[img].imgSource;

    for(let prod = 0; prod < bsProduct_Image.length; prod++){
        bsProduct_Image[prod].src = menuProduct_Image[prod].src;
        bsProduct_Text[prod].innerHTML = menuProduct_Text[prod].innerHTML;
        bsProduct_Price[prod].innerHTML = menuProduct_Price[prod].innerHTML;
    }
}

