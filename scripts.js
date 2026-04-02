const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyName = document.querySelector("#currency-name")
const currencyFlags = document.querySelector(".currency-flag")
currencyFlags.style.width = "64px"


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em real
    const currencyValueToConverted = document.querySelector(".currency-value") //Valor em dolar/euro

    const dolarToday = 5.20
    const euroToday = 6.20
    const libraToday = 6.80
    const pesoToday = 0.0055

    if(currencySelect.value == "dolar"){
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(inputCurrencyValue / dolarToday)
}
    
    if(currencySelect.value == "euro"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday)
    }
    if(currencySelect.value == "libra"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libraToday )
    }
    if(currencySelect.value == "peso-argentino"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
        }).format(inputCurrencyValue / pesoToday)
    }
    
    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyFlags.src = "./assets/dolar.png"
    } 

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyFlags.src = "./assets/euro.png"
    } 

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyFlags.src = "./assets/libra.png"
    }

    if(currencySelect.value == "peso-argentino"){
        currencyName.innerHTML = "Peso Argentino"
        currencyFlags.src = "./assets/argentina.png"
    }
    convertValues()
}
 


currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click",convertValues)

