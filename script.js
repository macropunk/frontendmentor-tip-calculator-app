const billInput = document.getElementById("bill-amount-input");
const buttonsContainer = document.querySelectorAll(".tip-buttons-container button");
const numberOfPeopleInput = document.getElementById("number-of-people-input");
const customTip = document.getElementById("custom-tip-amount-input");
let percentage = 0;

buttonsContainer.forEach(button => {
    button.addEventListener("click", ()=>{
        percentage = button.dataset.value;
        if(!numberOfPeopleInput.value == "" || !numberOfPeopleInput.value == 0){
            result()
        }else if(billInput.value === ""){
            percentage = 0;
            window.alert("Make sure to enter the bill value first!");

            document.querySelector(".bill-price-container p").style.color = "red";
            document.querySelector(".bill-price-container p").style.transition = "all 0.5s"
            setTimeout(()=>{
                document.querySelector(".bill-price-container p").style.color = "hsl(186, 14%, 43%)";
            }, 1300);
        }
    });
});

customTip.addEventListener("input", ()=>{
    if(customTip.value > 100 || customTip.value < 0){
        customTip.value = "";
        customTip.style.outlineColor = "red";
        customTip.style.transition = "all 0.3s"
    }else{
        customTip.style.outlineColor = "hsl(172, 67%, 45%)";
        percentage = customTip.value;
    }

    if(!numberOfPeopleInput.value == "" || !numberOfPeopleInput.value == 0){
        result()
    }else if(billInput.value === ""){
        customTip.value = "";
        percentage = 0;
        window.alert("Make sure to enter the bill value first!");
    }
    
});

numberOfPeopleInput.addEventListener("input", ()=>{
    const numberOfPeopleWrapper = document.querySelector(".number-of-people-wrapper");
    const zeroWarning = document.getElementById("zero-warning");
    if(numberOfPeopleInput.value == 0){
        numberOfPeopleWrapper.style.outlineColor = "red";
        zeroWarning.style.display = "block";
        numberOfPeopleInput.value = "";
    }else if(numberOfPeopleInput.value < 0){
        numberOfPeopleWrapper.style.outlineColor = "red";
        numberOfPeopleInput.value = "";
    }else{
        numberOfPeopleWrapper.style.outlineColor = "hsl(172, 67%, 45%)";
        zeroWarning.style.display = "none";
        result();
    }
})

billInput.addEventListener("input", ()=>{
    if(!percentage == 0){
        result()
    }

    if(parseFloat(billInput.value) <= 0){
        billInput.value = "";
        document.querySelector(".bill-price-container div").style.outlineColor = "red";
    }else{
        document.querySelector(".bill-price-container div").style.outlineColor = "hsl(172, 67%, 45%)";
    }
})

document.getElementById("reset-button").addEventListener("click", ()=>{
    billInput.value = "";
    numberOfPeopleInput.value = "";
    customTip.value = "";
    tipAmountTotal.textContent = "$0.00";
    totalAmountPrice.textContent = "$0.00";
    percentage = 0;
});

const tipAmountTotal = document.getElementById("tip-amount-total");
const totalAmountPrice = document.getElementById("total-amount-price");

function result() {
    const tipAmount = ( percentage / 100 ) * billInput.value;
    
    tipAmountTotal.textContent = `$${(tipAmount / numberOfPeopleInput.value).toFixed(2)}`;
    totalAmountPrice.textContent = `$${(billInput.value / numberOfPeopleInput.value).toFixed(2)}`;
}

/* github.com/macropunk */