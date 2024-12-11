var database = require("../database/config")

function plotarKPIs() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function plotarKPIs(): ")
    var instrucaoSql = `
        SELECT COUNT(idUsuario) AS Qtd FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function plotarKPIs_2() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function plotarKPIs_2(): ")
    var instrucaoSql = `
        SELECT AVG(pontuacao) AS Media FROM resposta;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function plotarGrafico() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function plotarKPIs_2(): ")
    var instrucaoSql = `
        SELECT COUNT(r.fkUsuario) AS Qtd, pontuacao AS Pontuacao FROM resposta AS r
            GROUP BY pontuacao ORDER BY pontuacao ASC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    plotarKPIs,
    plotarKPIs_2,
    plotarGrafico
};