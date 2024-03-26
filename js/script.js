let yell = document.querySelector("#yell");

yell.addEventListener("click", function() {
 let firstName = document.querySelector("#firstName").value;
 let firstMiddle = document.querySelector("#firstMiddle").value;
 let lastMiddle = document.querySelector("#lastMiddle").value;
 let lastName = document.querySelector("#lastName").value;
 let placeToYell = document.querySelector("#placeToYell");
 placeToYell.innerHTML = `${firstName} ${firstMiddle} ${lastMiddle} ${lastName}`;
 
})

