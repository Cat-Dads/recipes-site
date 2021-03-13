import React from 'react';
import { hydrate } from 'react-dom';
import Recipe from '../../components/recipes/recipe';

hydrate(
    <Recipe
        title={window.initialProps.title}
        author={window.initialProps.author}
        description={window.initialProps.description}
        ingredients={window.initialProps.ingredients}
        directions={window.initialProps.directions}
    />,
    document.getElementById('root')
);