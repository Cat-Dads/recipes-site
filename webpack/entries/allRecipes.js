import React from 'react';
import { hydrate } from 'react-dom';
import AllRecipes from '../../components/recipes/allRecipes';

hydrate(
    <AllRecipes
        recipes={window.initialProps}
    />,
    document.getElementById('root')
);