const convertButton = document.querySelector(".convert-button")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em real
    const currencyValueToConverted = document.querySelector(".currency-value") //Valor em dolar/euro

    const dolarToday = 5.20

    const convetedValue = inputCurrencyValue / dolarToday

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convetedValue)
}

convertButton.addEventListener("click",convertValues)

