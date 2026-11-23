import express from "express";
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor executando em http://localhost:${PORT}`);
});
// Rota inicial
app.get("/", (req, res) => {
    res.json({
        mensagem: "Bem-vindo à API de Consulta de Capitais!"
    });
});
// Rota de Informações
app.get("/estados", (req, res) => {
    res.json({
        sp: "São Paulo",
        rj: "Rio de Janeiro",
        mg: "Belo Horizonte",
        ba: "Salvador",
        XX: "Erro 404"
    });
});
// Rota com parâmetro
app.get("/estados/:sigla", (req, res) => {
    const sigla = req.params.sigla;
    res.json({
        sigla: sigla,
        capital: sigla
    });
});
// Método POST
app.post("/exemplo", (req, res) => {
    res.status(201).json({
        mensagem: "Exemplo de rota POST.",
        status: "Recurso criado (simulação)"
    });
});
// Método PUT
app.put("/exemplo/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        mensagem: "Exemplo de rota PUT.",
        identificador: id,
        status: "Recurso atualizado (simulação)"
    });
});
// Método DELETE
app.delete("/exemplo/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        mensagem: "Exemplo de rota DELETE.",
        identificador: id,
        status: "Recurso excluído (simulação)"
    });
});
