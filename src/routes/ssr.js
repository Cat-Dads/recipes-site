import express from 'express';
import App from '../components/app';
import React from 'react';
import { renderToString } from 'react-dom/server';
import hbs from 'handlebars';

const router = express.Router();

router.get('/', async (req, res) => {
    const html = `
        <html>
            <head>
                <title>My First SSR</title>
            </head>
            <body>
                <h1>My First Server Side Render</h1>
                <div id="root">{{{root}}}</div>
                <script src="/app.js" charset="utf-8"></script>
                <script src="/vendor.js" charset="utf-8"></script>
            </body>
        </html>
    `;

    const template = hbs.compile(html);
    const reactComp = renderToString(<App />);
    const htmlToSend = template({ root: reactComp });
    res.send(htmlToSend);
});

export default router;