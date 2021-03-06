import React from 'react';

class FirstSsr extends React.Component {
    constructor(props) {
        super(props);

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleReset = this.handleReset.bind(this);

        console.log(this.props);

        this.state = {
            name: this.props.foo ? this.props.foo : '',
            msg: ''
        };
    }

    handleButtonClick = (e) => {
        const nameLen = this.state.name.length;

        if (nameLen > 0) {
            this.setState({
                msg: `Your name has ${nameLen} characters.`
            });
        }
    };

    handleTextChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleReset = () => {
        this.setState({
            name: '',
            msg: ''
        });
    }

    render() {
        let msg;

        if (this.state.msg !== '') {
            msg = <p>{this.state.msg}</p>;
        }
        else {
            msg = '';
        }
        
        return (
            <div>
                <label>Your name</label>
                <input
                    type = 'text'
                    id = 'txtName'
                    name = 'txtName'
                    value = {this.state.name}
                    onChange = {this.handleTextChange}
                />
                <button
                    id = 'btnSubmit'
                    onClick = {this.handleButtonClick}
                >
                    Calculate name length
                </button>
                <button
                    id = 'btnReset'
                    onClick = {this.handleReset}
                >
                    Reset all
                </button>
                <hr />
                {msg ? msg : null}
            </div>
        );
    }
}

export default FirstSsr;