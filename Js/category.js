console.log("i am particular catergory");

// function openAllItem(){
//     window.open("details.php?category=Dell_Laptop","_self");
// }

let cat = window.location.href;
cat = cat.split("/");
cat = cat[4];
cat = cat.replace(".php", "");
let btnSeeAll = document.getElementsByClassName("btnSeeAll");
Array.from(btnSeeAll).forEach(element => {
   element.addEventListener('click', function () {

      if (cat.localeCompare("Accessories") == 0) {
         window.open(`details.php?category=${element.id}&main_category=accessories_category`, "_self");
      }
      if (cat.localeCompare("laptop") == 0) {
         window.open(`details.php?category=${element.id}&main_category=laptop_category`, "_self");
      }
      if (cat.localeCompare("desktop") == 0) {
         window.open(`details.php?category=${element.id}&main_category=desktop_category`, "_self");
      }
      if (cat.localeCompare("gaming") == 0) {
         window.open(`details.php?category=${element.id}&main_category=gaming_category`, "_self");
      }

   })
})


let itemCard = document.getElementsByClassName("itemCard");
Array.from(itemCard).forEach(element => {
   element.addEventListener('click', function () {
      window.open(`itemDetails.php?product_id=${element.id}`, "_self");
   })
})