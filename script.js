let tg = window.Telegram.WebApp;

tg.expand()

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#2cab37"

let item = ""

let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")
let btn4 = document.querySelector("#btn4")
let btn5 = document.querySelector("#btn5")
let btn6 = document.querySelector("#btn6")

btn1.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали товар морковь!")
        item = "морковь"
        tg.MainButton.show()
    }
}

btn2.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали товар 2!")
        item = "2"
        tg.MainButton.show()
    }
}

btn3.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали товар 3!")
        item = "3"
        tg.MainButton.show()
    }
}

btn4.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали товар 4!")
        item = "4"
        tg.MainButton.show()
    }
}

btn5.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали товар 5!")
        item = "5"
        tg.MainButton.show()
    }
}

btn6.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали товар 6!")
        item = "6"
        tg.MainButton.show()
    }
}

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(item)
})

let usercard = document.querySelector("#usercard")
let p = document.createElement("p")
p.innerText = `${tg.initDataUnsafe.first_name} ${tg.initDataUnsafe.last_name}`
usercard.appendChild(p)