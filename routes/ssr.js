import express from 'express';
import Home from '../components/home';
import React from 'react';
import { renderToString } from 'react-dom/server';
import hbs from 'handlebars';

const router = express.Router();

router.get('/', async (req, res) => {
    const reactComp = renderToString(<Home />);

    res.render('home', {
        layout: 'default',
        title: 'Home',
        root: reactComp
    });
});

export default router;