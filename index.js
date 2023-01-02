const express = require('express');
const { getCityFromZipcode, getPackageDescriptionNpm } = require('utils-playground');

const app = express();

app.get('/', async (req, res) => {
    const cidade = getCityFromZipcode('04849655');
    const cidade2 = getCityFromZipcode('20561146');

    const promise = await Promise.all([cidade, cidade2]);

    const [ resposta1, resposta2 ] = promise;

    res.send(`Eu moro na cidade de ${resposta1}, mas quero conhecer ${resposta2}`);
});

app.get('/pacote/:nomePacote', async (req, res) => {
    const { nomePacote } = req.params;
    
    descricaoPacote = await getPackageDescriptionNpm(nomePacote);
    
    return res.send(descricaoPacote);
    
});

app.listen(3000);