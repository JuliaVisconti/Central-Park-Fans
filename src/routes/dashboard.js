var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

//Recebendo os dados do html e direcionando para a função cadastrar de dashboardController.js
router.post("/plotarKPIS", function (req, res) {
    dashboardController.plotarKPIs(req, res);
})

router.post("/plotarKPIS_2", function (req, res) {
    dashboardController.plotarKPIS_2(req, res);
});

router.post("/plotarGrafico", function (req, res) {
    dashboardController.plotarGrafico(req, res);
})

module.exports = router;