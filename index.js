// Dependencies
const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const port = 80;
const url = 'https://api.telegram.org/bot';
const apiToken = '';
// Configurations
app.use(bodyParser.json());
// Endpoints
app.post('/', (req, res) => {
     // console.log(req.body);
     const chatId = req.body.message.chat.id;
     const sentMessage = req.body.message.text;
     // Regex for hello
     if (sentMessage.match(/halo/gi)) {
          axios.post(`${url}${apiToken}/sendMessage`,
               {
                    chat_id: chatId,
                    text: 'halo juga 👋👋👋👋'
               })
               .then((response) => { 
                    console.log('pesan terkirim');
                    res.status(200).send(response);
               }).catch((error) => {
                    res.send(error);
               });
     } else {
          // jika halo gak ditemukan, repson saja dengan 200 
          res.status(200).send({});
     }
});
// Listening
app.get('/', (req, res) => res.send('Hello this is palangmerahcbs_bot!'))
app.listen(port, () => {
     console.log(`Listening on port ${port}`);
});