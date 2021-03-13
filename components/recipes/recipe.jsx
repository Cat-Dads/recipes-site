import React from 'react';

class Recipe extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="recipe-container">
                <div className="row">
                    <h3>{this.props.title}</h3>
                    <hr />
                </div>
                <div className="row">
                    <p>
                        {this.props.description}
                    </p>
                </div>
                <div className="row">
                    <ul className="list-group">
                        {this.props.ingredients ? this.props.ingredients.map((ingredient, idx) => {
                            return (
                                <li className="list-group-item">
                                    {ingredient.description}
                                </li>
                            );
                        }) : null}
                    </ul>
                </div>
                <div className="list-group">
                    <p>
                        {this.props.directions}
                    </p>
                </div>
            </div>
        );
    }
}

export default Recipe;