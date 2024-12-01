import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

import App from '../src/App';

const PORT = 3001;

const app = express();



app.get('/', (req, res) => {
    const appContent = ReactDOMServer.renderToString(<App/>);
    const indexHTMLFile = path.resolve('./build/index.html');
    fs.readFile(indexHTMLFile, 'utf8', (err, data) => {
        if(err) {
            console.log("Something went wrong", err);
            return res.status(500).send("Something went wrong");
        }
        return res.send(data.replace(`<div id="root"></div>`, `<div id="root">${appContent}</div>`));
    });
});

app.use(express.static('./build'));

app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
})