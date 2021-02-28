import React from 'react';

class AllRecipes extends React.Component {
    constructor() {
        super();

        this.state = {
            recipes: []
        };
    }

    renderRecipe = (recipe) => {
        return (
            <div class="row all-recipe-item">
                <div class="all-recipe-rating">
                    <span>{recipe.rating}/5</span>
                </div>
                <div class="all-recipe-content">
                    <div class="all-recipe-title">
                        <h3>{recipe.title}</h3>
                    </div>
                    <div class="all-recipe-description">
                        <p>{recipe.description}</p>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        let recipes = this.props.recipes ? this.props.recipes : this.state.recipes;

        console.log(recipes);

        if (!recipes.length) return <div>No recipes!</div>

        return (
            <div class="container">
                <h1>All Recipes</h1>
                {recipes.map(recipe => this.renderRecipe(recipe))}
            </div>
        );
    }
}

export default AllRecipes;