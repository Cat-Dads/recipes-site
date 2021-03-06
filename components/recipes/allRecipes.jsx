import React from 'react';

class AllRecipes extends React.Component {
    constructor() {
        super();
    }

    renderRecipe = (recipe, idx) => {
        return (
            <div key={`rcp-${recipe.id}`} className="row all-recipe-item">
                <div className="all-recipe-rating">
                    <span>{recipe.rating}/5</span>
                </div>
                <div className="all-recipe-content">
                    <div className="all-recipe-title">
                        <h3>{recipe.title}</h3>
                    </div>
                    <div className="all-recipe-description">
                        <p>{recipe.description}</p>
                    </div>
                </div>
            </div>
        )
    }

    render() {

        if (!this.props.recipes || !this.props.recipes.length) return <div>No recipes!</div>

        return (
            <div className="container">
                <h1>All Recipes</h1>
                {this.props.recipes.map((recipe, idx) => this.renderRecipe(recipe))}
            </div>
        );
    }
}

export default AllRecipes;