import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

import App from '../src/App';

const PORT = 3001;

const app = express();

  async function downloadTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data;
  }

  function getHTML(data) {
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="manifest" href="/manifest.json" />
    <title>React App</title>
    <script defer="defer" src="/static/js/main.bd2ec4bd.js"></script>
    <link href="/static/css/main.e6c13ad2.css" rel="stylesheet" />
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
  <script>
    window._initialtasks_=${data}
  </script>
</html>
`;
  }

app.get('/', async(req, res) => {
    const data = await downloadTodos();
    const appContent = ReactDOMServer.renderToString(<App initialTasks={data}/>);
    // const indexHTMLFile = path.resolve('./build/index.html');
    // fs.readFile(indexHTMLFile, 'utf8', (err, data) => {
    //     if(err) {
    //         console.log("Something went wrong", err);
    //         return res.status(500).send("Something went wrong");
    //     }
    //     return res.send(data.replace(`<div id="root"></div>`, `<div id="root">${appContent}</div>`));
    // });

    const htmlToSend = getHTML(JSON.stringify(data));
    return res.send(
      htmlToSend.replace(
        `<div id="root"></div>`,
        `<div id="root">${appContent}</div>`
      )
    );
});

app.use(express.static('./build'));

app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
})