const alfy = require("alfy");
const fetch = require("node-fetch");

const options = {
  method: "post",
  mode: "no-cors",
  headers: {
    "content-type": "text/plain",
    "Access-Control-Allow-Origin": "http://typograf.ru",
  },
};

fetch(
  "http://www.typograf.ru/webservice/?text=" + encodeURIComponent(alfy.input) + "&chr=UTF-8",
  options,
)
  .then(res => {
    return res.text();
  })
  .then(body => {
    alfy.output([
      {
        title: body.replace(/<[^>]*>/g, ''),
        subtitle:  "CMD + C to copy...",
        arg: body.replace(/<[^>]*>/g, ''),
      },
    ]);
  })
  .catch(err => {
    console.log(err);
  });


