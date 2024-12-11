var dashboardModel = require("../models/dashboardModel");

function plotarKPIs(req, res) {
    var id = req.body.idServer;
    console.log(id);

    dashboardModel.plotarKPIs()
        .then(
            function (lista) {
                console.log(lista);
                res.json({
                    quantidade: lista[0].Qtd,
                });
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function plotarKPIS_2(req, res) {
    var id = req.body.idServer;
    console.log(id);

    dashboardModel.plotarKPIs_2()
        .then(
            function (lista) {
                console.log(lista);
                res.json({
                    quantidade: lista[0].Media,
                });
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function plotarGrafico(req, res) {
    var id = req.body.idServer;
    console.log(id);

    dashboardModel.plotarGrafico()
        .then(
            function (lista) {
                console.log(lista);
                res.json({
                    lista: lista,
                });
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    plotarKPIs,
    plotarKPIS_2,
    plotarGrafico
}