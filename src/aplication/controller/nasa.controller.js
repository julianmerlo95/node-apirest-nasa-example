const fetch = require('node-fetch');
const logErr = require('../../utils/logErr');
const logOk = require('../../utils/logOk');

const URI = process.env.URI;
const method = { method: 'get' };


function getUrl() {
  return fetch(URI, method)
    .then((response) => {
      logOk.info(' - La data se proceso');
      return response.json();
    })
    .catch((err) => {
      logErr.error(' - La data tuvo un error');
      console.log('El endpoint no funciona correctamente', err);
    });
}

async function showUrl(req, res) {
  const data = await getUrl();
  return res.json({
    Data: data,
  });
}


module.exports = showUrl;
