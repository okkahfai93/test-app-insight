const express = require('express');
const app = express();
let appInsights = require('applicationinsights');
appInsights.setup("InstrumentationKey=8340abbc-45d3-408f-8e1f-49eb579450d2;IngestionEndpoint=https://westus2-2.in.applicationinsights.azure.com/").start();

app.get('/h', (req, res) => {

  res.send(`Hello World!`);
});

app.listen(3000);
