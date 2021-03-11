import React from 'react';
import { hydrate } from 'react-dom';
import CreateRecipe from '../../components/recipes/createRecipe';

hydrate(
    <CreateRecipe />,
    document.getElementById('root')
);