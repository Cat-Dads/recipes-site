import React from 'react';
import Modal from '../util/modal';
import { Plus } from 'react-bootstrap-icons'

class CreateRecipe extends React.Component {
    constructor() {
        super();
        
        this.state = {
            title: '',
            description: '',
            author: '',
            ingredients: [],
            directions: '',
            newIngredient: '',
            newRecipeId: 0,
            isLoading: false
        }
    }

    handleSubmit = (ev) => {
        ev.preventDefault();

        this.setState({ isLoading: true });

        let ingredientsArray = this.state.ingredients.map((ingredient, idx) => {
            return {
                description: ingredient.name
            };
        })

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: this.state.title,
                description: this.state.description,
                author: this.state.author,
                ingredients: ingredientsArray,
                directions: this.state.directions
            })
        }

        fetch('https://cat-dads-recipe-api.azurewebsites.net/api/recipe/', requestOptions)
            .then(async res => {
                const data = await res.json();

                if (!res.ok) {
                    const err = (data && data.message) || res.status;
                    return Promise.reject(err)
                }

                this.setState({
                    title: '',
                    description: '',
                    author: '',
                    ingredients: [],
                    directions: '',
                    newIngredient: '',
                    newRecipeId: data.id,
                    isLoading: false
                });
            })
            .catch(err => {
                console.error(err);
            });
    }

    saveIngredient = () => {
        if (!this.state.newIngredient) {
            return;
        }

        let newIngredients = this.state.ingredients;

        newIngredients.push({
            text: this.state.newIngredient
        });

        this.setState({
            ingredients: newIngredients,
            newIngredient: ''
        });
    }

    renderIngredients = () => {
        return (
            <div>
                {this.state.ingredients.map((ingredient, idx) => {
                    return(
                        <input
                            type="text"
                            className="form-control-plaintext"
                            id={"ingredient-${idx}"}
                            value={ingredient.text}
                            readOnly={true}
                        />
                    )
                    }
                )}
            </div>
        )
    }

    render() {
        return (
            <div>
                {!this.state.newRecipeId ? null :
                    <Modal
                        title="Recipe created!"
                        text={`Your recipe titled "${this.state.title}" was created!"`}
                        primaryIsLink={true}
                        primaryLinkUrl={`/recipe/${this.state.newRecipeId}/`}
                        primaryLinkText="Take me there"
                        secondaryButtonText="Create another"
                        secondaryButtonAction={() => this.setState({ newRecipeId: 0 })}
                        onClose={() => this.setState({ newRecipeId: 0 })}
                    />
                }
                <div className="create-recipe-form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="create-recipe-title mb-3">
                            <label className="form-label" htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                placeholder="Title"
                                value={this.state.title}
                                disabled={this.state.isLoading}
                                onChange={(ev) => this.setState({ title: ev.target.value })} />
                        </div>
                        <div className="create-recipe-author mb-3">
                            <label className="form-label" htmlFor="author">Author</label>
                            <input
                                type="text"
                                className="form-control"
                                id="author"
                                name="author"
                                placeholder="Author"
                                value={this.state.author}
                                disabled={this.state.isLoading}
                                onChange={(ev) => this.setState({ author: ev.target.value })} />
                        </div>
                        <div className="create-recipe-description mb-3">
                            <label className="form-label" htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                name="description"
                                placeholder="Decription"
                                value={this.state.description}
                                disabled={this.state.isLoading}
                                onChange={(ev) => this.setState({ description: ev.target.value })} />
                        </div>
                        <div className="create-recipe-ingredients mb-3">
                            <label className="form-label" htmlFor="ingredients">Ingredients</label>
                            {this.renderIngredients()}
                            <div className="input-group mb-3">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    disabled={this.state.newIngredient || !this.state.isLoading ? null : true}
                                    onClick={() => this.saveIngredient()}
                                >
                                    <Plus
                                        height="24"
                                        width="24"
                                    />
                                </button>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="newIngredient"
                                    name="ingredient"
                                    placeholder="Ingredient"
                                    value={this.state.newIngredient}
                                    disabled={this.state.isLoading}
                                    onChange={(ev) => this.setState({ newIngredient: ev.target.value })}
                                />
                            </div>
                        </div>
                        <div className="create-recipe-directions mb-3">
                            <label className="form-label" htmlFor="directions">Directions</label>
                            <textarea
                                className="form-control"
                                id="directions"
                                name="directions"
                                placeholder="Directions"
                                rows="5"
                                value={this.state.directions}
                                disabled={this.state.isLoading}
                                onChange={(ev) => this.setState({ directions: ev.target.value })} />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={this.state.isLoading}
                        >
                            {!this.state.isLoading ? "Create recipe" : null}
                            {this.state.isLoading &&
                                "Creating recipe... "
                            }
                            {this.state.isLoading && 
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            }
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateRecipe;