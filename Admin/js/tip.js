console.log("i am in tip.js")

let descriptionContainer = document.getElementById("descriptionContainer");


let btnAddText = document.getElementById("btnAddText");
btnAddText.addEventListener('click', (e) => {
    e.preventDefault();

    let tipDesc = document.getElementById("tipDesc");
    let uiValue = descriptionContainer.innerHTML;
    let newTextElemet = `  <div class="alert alert-warning alert-dismissible fade show descriptionItem" role="alert">
   ${tipDesc.value}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>`
    let uiNewValue = uiValue + newTextElemet;
    descriptionContainer.innerHTML = uiNewValue;
    tipDesc.value = "";
    generateUlString();
})



let btnAddImg = document.getElementById("btnAddImg");
btnAddImg.addEventListener('click', (e) => {
    e.preventDefault();
    let tipDesc = document.getElementById("tipDesc");
    let uiValue = descriptionContainer.innerHTML;
    let newTextElemet = `  <div class="alert alert-warning alert-dismissible fade show descriptionItem" role="alert">
    img/items/${tipDesc.value}<button type="button" class="close btnRemove" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>`
    let uiNewValue = uiValue + newTextElemet;
    descriptionContainer.innerHTML = uiNewValue;
    tipDesc.value = "";
    generateUlString()
})
let btnRefresh=document.getElementById("btnRefresh");
btnRefresh.addEventListener("click",(e)=>{
    e.preventDefault();
    generateUlString();
})

let LongDescription=document.getElementById("LongDescription");
LongDescription.style.display = "none";

function generateUlString() {
    let displayValue = "";
    let descriptionItem = document.getElementsByClassName("descriptionItem");
    let value = "";
    Array.from(descriptionItem).forEach((e) => {
        if ((e.innerText).includes("img/")) {
            value = value+"<img src=\""
            value = value + e.innerText;
            value = value.substring(0, value.length - 1);
            value = value + "\" class=\"img-fluid\" alt=\"\" srcset=\"\">";
        } else {
            value = value+"<p>"
            value = value + e.innerText;
            value = value.substring(0, value.length - 1);
            value = value + "</p>";
        }
    })
    console.log(value);
    document.getElementById("LongDescription").value = value;
}