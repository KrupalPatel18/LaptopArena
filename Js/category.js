console.log("i am particular catergory");

// function openAllItem(){
//     window.open("details.php?category=Dell_Laptop","_blank");
// }
let btnSeeAll= document.getElementsByClassName("btnSeeAll");
Array.from(btnSeeAll).forEach(element=>{
   element.addEventListener('click',function(){
    window.open(`details.php?category=${element.id}`,"_blank");
   })
})


let itemCard= document.getElementsByClassName("itemCard");
Array.from(itemCard).forEach(element=>{
   element.addEventListener('click',function(){
    window.open(`itemDetails.php?product_id=${element.id}`,"_blank");
   })
})