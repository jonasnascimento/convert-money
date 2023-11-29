const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")


convertButton.addEventListener("click", currencyButton)
function currencyButton() {
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor a converter

    const currencyValueConverted = document.querySelector(".currency-value") // Valor da moeda convertido 

    const dolarToday = 4.9
    const euroToday = 5.37
    const libraToday = 6.2
    const bitcoinToday = 184.749



    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"

        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }



    if (currencySelectToConvert.value == "real")
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
}



currencySelect.addEventListener("change", changeSelect)
function changeSelect() {

    const currencyNameConverted = document.querySelector("#currency-name-converted")
    const currencyImgConverted = document.querySelector(".currency-img-converted")



    if (currencySelect.value == "dolar") {
        currencyNameConverted.innerHTML = "Dólar Americano"
        currencyImgConverted.src = "./assets/dol.png"
    }

    if (currencySelect.value == "euro") {
        currencyNameConverted.innerHTML = "Euro"
        currencyImgConverted.src = "./assets/eur.png"
    }

    if (currencySelect.value == "real") {
        currencyNameConverted.innerHTML = "Real"
        currencyImgConverted.src = "./assets/real.png"
    }

    if (currencySelect.value == "libra") {
        currencyNameConverted.innerHTML = "Libra Esterlina"
        currencyImgConverted.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyNameConverted.innerHTML = "Bitcoin"
        currencyImgConverted.src = "./assets/bitcoin.png"
    }


    currencyButton()

}



