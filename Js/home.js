console.log("Running home.js");


//click on carousel-item categary
let carousel_item = document.getElementsByClassName("carousel-item");
Array.from(carousel_item).forEach(element => {
    
    element.addEventListener('click',function(){
        window.open(`itemDetails.php?product_id=${element.id}`,"_blank");
})
});


// click on laptop section
let homeLaptop = document.getElementById("homeLaptop");
homeLaptop.addEventListener('click',function(){
    window.open('laptop.php', '_blank');
});


//click on laptop sub categary
let cattopicLaptop = document.getElementsByClassName("cattopicLaptop");
Array.from(cattopicLaptop).forEach(element => {
    
    element.addEventListener('click',function(){
    window.open('laptop.php', '_blank');
})
});


// click on Accessories section
let homeAccessories = document.getElementById("homeAccessories");
homeAccessories.addEventListener('click',function(){
    window.open('Accessories.php', '_blank');
});

//click on Accessories sub categary
let cattopicAccessories = document.getElementsByClassName("cattopicAccessories");
Array.from(cattopicAccessories).forEach(element => {
    
    element.addEventListener('click',function(){
    window.open('Accessories.php', '_blank');
})
});

// click on Gaming section
let homeGaming = document.getElementById("homeGaming");
homeGaming.addEventListener('click',function(){
    window.open('gaming.php', '_blank');
});

//click on Gaming sub categary
let cattopicGaming = document.getElementsByClassName("cattopicGaming");
Array.from(cattopicGaming).forEach(element => {
    element.addEventListener('click',function(){
    window.open('gaming.php', '_blank');
})
});

// click on tips section

let tipHome= document.getElementById("tipHome");
tipHome.addEventListener('click',function(){
    window.open('tips.php', '_blank');
});




//click on Gaming tips categary
let tipCard = document.getElementsByClassName("tipCard");
Array.from(tipCard).forEach(element => {
    
    element.addEventListener('click',function(){
    window.open('tipsDetails.php', '_blank');
})
});

//click on item
let homeItem = document.getElementsByClassName("homeItem");
Array.from(homeItem).forEach(element => {
    element.addEventListener('click',function(){
        console.log(" ",element.id);
         window.open(`itemDetails.php?product_id=${element.id}`,"_blank");
})
});

//click on Brand Item
let cardbrand = document.getElementsByClassName("cardbrand");
Array.from(cardbrand).forEach(element => {
    element.addEventListener('click',function(){
    window.open('details.php', '_blank');
})
});

// click on day of deal section

let shopDealItem= document.getElementsByClassName("shopDealItem");
Array.from(shopDealItem).forEach(element => {
    element.addEventListener('click',function(){
        console.log(" ",element.id);
        window.open(`itemDetails.php?product_id=${element.id}`,"_blank");
})
});



