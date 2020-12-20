console.log("I am product.js")

let ulString = ``;
generateUlString();
let addProductForm = document.getElementById("addProductForm");

// addProductForm.addEventListener('submit', (e) => {

//     e.preventDefault();
//     if(validateForm()){
//         let productName = document.getElementById("productName").value;

//         let productDescription = document.getElementById("productDescription").value;
    
//         let productPrice = document.getElementById("productPrice").value;
    
//         let productBuy_Link = document.getElementById("productBuy_Link").value;
    
//         let productImg_Link = document.getElementById("productImg_Link").value;
    
//         let productPreview_Link1 = document.getElementById("productPreview_Link1").value;
    
//         let productPreview_Link2 = document.getElementById("productPreview_Link2").value;
    
//         let productPreview_Link3 = document.getElementById("productPreview_Link3").value;
    
//         let productPreview_Link4 = document.getElementById("productPreview_Link4").value;
    
//         let url = `product.php?productName=${productName}&productDescription=${productDescription}&productSpecification=${ulString}&productPrice=${productPrice}&productBuy_Link=${productBuy_Link}&productImg_Link=${productImg_Link}&productPreview_Link1=${productPreview_Link1}&productPreview_Link2=${productPreview_Link2}&productPreview_Link3=${productPreview_Link3}&productPreview_Link4=${productPreview_Link4}`;
//         addProductForm.setAttribute("action",url);
//         addProductForm.submit();
//     }
    
// })


let btnAddSpec = document.getElementById("btnAddSpec");
btnAddSpec.addEventListener('click', (e) => {
    e.preventDefault();
    let ulContainerValue = document.getElementById("ulContainer").innerHTML;
   
        let productSpecification = document.getElementById("productSpecification");
        let value=""+productSpecification.value;
        if(value.localeCompare("")==0){
            document.getElementById('productSpecification').style.borderColor = "red";
        }else{
            document.getElementById('productSpecification').style.borderColor = "#9EA4A9";
            ulContainerValue = ulContainerValue + ` <div class="alert alert-primary alert-dismissible fade show " role="alert">
            <p class="m-0 p-0 ulDisplayList">${productSpecification.value}</p>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>`;
        productSpecification.value = "";
        ulContainer = document.getElementById("ulContainer");
        ulContainer.innerHTML = ulContainerValue;
        }
       
    
    generateUlString();
})


let form_control = document.getElementsByClassName("form-control");
Array.from(form_control).forEach((element) => {


})

$(window).keydown(function (event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        return false;
    }
});

document.getElementById("productSpecificationFinal").style.display = "none";
let btnRefresh=document.getElementById("btnRefresh");
btnRefresh.addEventListener("click",(e)=>{
    e.preventDefault();
    generateUlString();
})


function generateUlString() {
    ulString = `<ul>`;
    let ulList = document.getElementsByClassName("ulDisplayList");
    Array.from(ulList).forEach(element => {
        let liString = `<li> ${element.innerHTML} <\\li>`
        ulString = ulString + liString
    })
    ulString = ulString + `<\\ul>`
    document.getElementById("productSpecificationFinal").value = ulString;
    console.log(ulString);
}


function validateForm(){


    let productName = document.getElementById("productName").value;
    if(productName.localeCompare("")==0){
        document.getElementById('productName').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('productName').style.borderColor = "#9EA4A9";
    }


    let productDescription = document.getElementById("productDescription").value;
    if(productDescription.localeCompare("")==0){
        document.getElementById('productDescription').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('productDescription').style.borderColor = "#9EA4A9";
    }


    let productPrice = document.getElementById("productPrice").value;
    if(productPrice.localeCompare("")==0){
        document.getElementById('productPrice').style.borderColor = "red";
        return false;
    }
    else{
        document.getElementById('productPrice').style.borderColor = "#9EA4A9";
    }


    let productBuy_Link = document.getElementById("productBuy_Link").value;
    if(productBuy_Link.localeCompare("")==0){
        document.getElementById('productBuy_Link').style.borderColor = "red";
        return false;
    }
    else{
        document.getElementById('productBuy_Link').style.borderColor = "#9EA4A9";
    }


    let productImg_Link = document.getElementById("productImg_Link").value;
    if(productImg_Link.localeCompare("")==0){
        document.getElementById('productImg_Link').style.borderColor = "red";
        return false;
    }
    else{
        document.getElementById('productImg_Link').style.borderColor = "#9EA4A9";
    }


    let productPreview_Link1 = document.getElementById("productPreview_Link1").value;
    if(productPreview_Link1.localeCompare("")==0){
        document.getElementById('productPreview_Link1').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('productPreview_Link1').style.borderColor = "#9EA4A9";
    }


    let productPreview_Link2 = document.getElementById("productPreview_Link2").value;
    if(productPreview_Link2.localeCompare("")==0){
        document.getElementById('productPreview_Link2').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('productPreview_Link2').style.borderColor = "#9EA4A9";
    }


    let productPreview_Link3 = document.getElementById("productPreview_Link3").value;
    if(productPreview_Link3.localeCompare("")==0){
        document.getElementById('productPreview_Link3').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('productPreview_Link3').style.borderColor = "#9EA4A9";
    }


    let productPreview_Link4 = document.getElementById("productPreview_Link4").value;
    if(productPreview_Link4.localeCompare("")==0){
        document.getElementById('productPreview_Link4').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('productPreview_Link4').style.borderColor = "#9EA4A9";
    }



    if(ulString.localeCompare("<ul><\\ul>")==0){
        document.getElementById('productSpecification').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('productSpecification').style.borderColor = "#9EA4A9";
    }
    return true;

}