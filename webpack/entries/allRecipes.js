import React from 'react';
import { hydrate } from 'react-dom';
import AllRecipes from '../../components/recipes/allRecipes';

hydrate(
    <AllRecipes
        recipes={[
            {
                title: 'Recipe 1',
                description: `It's my favorite recipe`,
                rating: "5"
            },
            {
                title: 'Recipe 2',
                description: `Its my 2nd favorite recipe`,
                rating: "4.5"
            },
            {
                title: 'Recipe 3',
                description: `Its my 3rd favorite recipe`,
                rating: "3"
            },
        ]}
    />,
    document.getElementById('root')
);