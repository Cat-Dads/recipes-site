import express from 'express';
import Home from '../components/home';
import FirstSsr from '../components/firstssr';
import AllRecipes from '../components/recipes/allRecipes';
import React from 'react';
import { renderToString } from 'react-dom/server';

const router = express.Router();

router.get('/', async (req, res) => {
    const reactComp = renderToString(<Home />);

    res.render('home', {
        layout: 'default',
        title: 'Home',
        root: reactComp
    });
});

router.get('/firstssr', async (req, res) => {
    const reactComp = renderToString(
        <FirstSsr />
    );

    res.render('home', {
        layout: 'default',
        script: 'firstssr',
        title: 'Home',
        root: reactComp
    });
});

router.get('/allrecipes', async(req, res) => {

    let initialProps = [
        {
            id: 1,
            title: 'Recipe 1',
            description: `It's my favorite recipe`,
            rating: "5"
        },
        {
            id: 2,
            title: 'Recipe 2',
            description: `Its my 2nd favorite recipe`,
            rating: "4.5"
        },
        {
            id: 3,
            title: 'Recipe 3',
            description: `Its my 3rd favorite recipe`,
            rating: "3"
        }
    ];

    const reactComp = renderToString(
        <AllRecipes
            recipes={initialProps}
        />
    );

    console.log(reactComp);

    res.render('allRecipes', {
        layout: 'default',
        script: 'allRecipes',
        css: 'allRecipes',
        title: 'All Recipes',
        initialProps: JSON.stringify(initialProps),
        root: reactComp
    });
})

export default router;