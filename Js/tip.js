console.log("I am Tips Js");

let tipCard = document.getElementsByClassName("tipCard");

Array.from(tipCard).forEach((element) => {
  element.addEventListener("click", function () {
    window.open(`tipsDetails.php?Tip_No=${element.id}`, "_blank");
  });
});
