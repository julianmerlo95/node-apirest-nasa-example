
function defaultPag(req, res) {
   res.json({
    Data: 'Pagina de inicio',
    '/nasa': 'devolvera informacion sobre un endpoint de la nasa',
  });
}


module.exports = defaultPag;
