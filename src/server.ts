import express from "express";
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.json({ mensagem: "Bem-vindo à API de Cadastro de Produtos!" });
});
app.get("/sobre", (req, res) => {
  res.json({
    projeto: "Cadastro de Produtos",
    tecnologia: "Node.js, TypeScript e Express",
    finalidade: "Projeto didático de desenvolvimento back-end"
  });
});
app.get("/estados", (req, res) => {
  const estados = ["SP", "RJ", "MG", "BA", "AM", "DF"];
  res.json({ estados: estados.map(estado => estado.toUpperCase()) });
});
app.get("/estados/:sigla", (req, res) => {
  const sigla = req.params.sigla.toUpperCase();
  const capitais = {
    "SP": "São Paulo",
    "RJ": "Rio de Janeiro",
    "MG": "Belo Horizonte",
    "BA": "Salvador",
    "AM": "Manaus",
    "DF": "Brasília"
  };
  const capital = capitais[sigla];
  if (!capital) {
    return res.status(404).json({
      erro: "Estado não encontrado",
      mensagem: `A sigla '${sigla}' não corresponde a nenhum estado mapeado.`
    });
  }
  res.json({ estado: sigla, capital });
});
app.post("/exemplo", (req, res) => {
  res.status(201).json({
    mensagem: "Exemplo de rota POST.",
    status: "Recurso criado (simulação)"
  });
});
app.put("/exemplo/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    mensagem: "Exemplo de rota PUT.",
    identificador: id,
    status: "Recurso atualizado (simulação)"
  });
});
app.delete("/exemplo/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    mensagem: "Exemplo de rota DELETE.",
    identificador: id,
    status: "Recurso excluído (simulação)"
  });
});
app.use((req, res) => {
  res.status(404).json({
    erro: "Rota não encontrada",
    mensagem: `O caminho '${req.originalUrl}' não existe nesta API. Verifique a URL ou o método HTTP.`
  });
});
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});