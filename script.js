const subscribeBtn = document.querySelector(".subscribe-btn");
const successBtn = document.querySelector(".success-btn");
const basicContainer = document.querySelector(".all-contents");
const secondaryContainer = document.querySelector(".success-container");
const input = document.querySelector(".email-input");
const errorLabel = document.querySelector(".Error");
const emailAddress = document.querySelector(".email-address");

// ###############################################################


const checkingForEarror = function(){
    if(input.value === ''){
        errorLabel.textContent = "empty input";
        errorLabel.style.display = "block";
        return true;
    }

    if(!input.value.includes("@")){
        errorLabel.textContent = "valid email required";
        errorLabel.style.display = "block";
        return true;
    }

    if(!input.value.includes(".")){
        errorLabel.textContent = "missing the dot '.' ";
        errorLabel.style.display = "block";
        return true;
    }
    return false;
}

subscribeBtn.addEventListener("click",function(e){
    e.preventDefault();
    if(checkingForEarror()) return;
    basicContainer.style.display = "none";
    secondaryContainer.style.display = "flex";
    emailAddress.textContent = `${input.value}`;
    input.value = '';
})

successBtn.addEventListener("click",function(e){
    e.preventDefault();
    secondaryContainer.style.display = "none";
    basicContainer.style.display = "flex";
})