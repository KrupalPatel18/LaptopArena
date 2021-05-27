console.log("i am dtails")

let btnDetails= document.getElementsByClassName("btnDetails");

Array.from(btnDetails).forEach(element=>{
    element.addEventListener('click',function(){
    window.open(`itemDetails.php?product_id=${element.id}`,"_self");
    })
 })