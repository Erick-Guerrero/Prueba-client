var botId = '158504164009061';
var phoneNbr = '541165417871';

//pol = 5491150570128
var bearerToken = 'EAAWDZCD2bpxABO7jhW1s538h3jJ51zyLc2PNCzIZCh81A1apsPq5etGh742zxB1DtysxAolXXR2nRjtZAcnZBYFnG3piWpd1jnx81gUNZBZBaBdSf6LSMDmIIvdZCepE63vmNwlUCY5kfjkPSZCAnOKZAhOeQ7LG5R1GQPxcf0lrrydCZCF5NpiOSKR6yNPtDZCsZAS63jZATf5gCdlYL9vucHQZDZD';

var url = 'https://graph.facebook.com/v17.0/' + botId + '/messages';
var data = {
  messaging_product: 'whatsapp',
  to: phoneNbr,
  type: 'template',
  template: {
    name:'hello_world',
    language:{ code: 'en_US' }
  }
};

var postReq = {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + bearerToken,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data),
  json: true
};

fetch(url, postReq)
  .then(data => {
    return data.json()
  })
  .then(res => {
    console.log(res)
  })
  .catch(error => console.log(error));