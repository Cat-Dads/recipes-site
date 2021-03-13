import express from 'express';
import Home from '../components/home';
import FirstSsr from '../components/firstssr';
import AllRecipes from '../components/recipes/allRecipes';
import CreateRecipe from '../components/recipes/createRecipe';
import React from 'react';
import { renderToString } from 'react-dom/server';
import * as https from 'https';
import Recipe from '../components/recipes/recipe';

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

router.get('/recipe/:recipeId', async(req, res) => {
    https.get(`https://cat-dads-recipe-api.azurewebsites.net/api/recipe/${req.params.recipeId}/`, (apiRes) => {
        apiRes.on('data', data => {
            const recipe = JSON.parse(data);

            const reactComp = renderToString(
                <Recipe
                    title={recipe.title}
                    author={recipe.author}
                    description={recipe.description}
                    ingredients={recipe.ingredients}
                    directions={recipe.directions}
                />
            );

            res.render('recipe', {
                layout: 'default',
                script: 'recipe',
                css: 'recipe',
                title: `${recipe.title} by ${recipe.author}`,
                initialProps: JSON.stringify(recipe ? recipe : null),
                root: reactComp
            });
        });
    });
});

router.get('/allrecipes', async(req, res) => {
    https.get('https://cat-dads-recipe-api.azurewebsites.net/api/recipe/', (apiRes) => {
        apiRes.on('data', data => {
            const recipes = JSON.parse(data);

            const reactComp = renderToString(
                <AllRecipes
                    recipes={recipes ? recipes : null}
                />
            );
        
            res.render('allRecipes', {
                layout: 'default',
                script: 'allRecipes',
                css: 'allRecipes',
                title: 'All Recipes',
                initialProps: JSON.stringify(recipes ? recipes : null),
                root: reactComp
            });
        });
    });
});

router.get('/createrecipe', async(req, res) => {
    const reactComp = renderToString(<CreateRecipe />);

    res.render('createRecipe', {
        layout: 'default',
        script: 'createRecipe',
        css: 'createRecipe',
        title: 'Create Recipe',
        root: reactComp
    });
});

export default router;