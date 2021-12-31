const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku

app.get("/", function (req, res) {
    res.send("<h1>Moja aplikacja - Darek Przybylo 3i2b </h1>")
})
app.get("/data", function (req, res) {
    res.send(JSON.stringify({ imie: "Darek" }, { nazwisko: "Przybylo" }, { klasa: "3i2" }, { grupa: "b" }))
})
app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
