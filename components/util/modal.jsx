import React from 'react';

class Modal extends React.Component {
    constructor() {
        super();
    }

    renderSecondaryAction = () => {
        if (this.props.secondaryIsLink) {
            return (
                <a className="btn btn-primary" href={this.props.secondaryLinkUrl}>
                    {this.props.secondaryLinkText}
                </a>
            );
        }

        return (
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={this.props.secondaryButtonAction}>
                {this.props.secondaryButtonText}
            </button>
        )
    }

    renderPrimaryAction = () => {
        if (this.props.primaryIsLink) {
            return (
                <a className="btn btn-primary" href={this.props.primaryLinkUrl}>
                    {this.props.primaryLinkText}
                </a>
            );
        }

        return (
            <button type="button" className="btn btn-primary" onClick={this.props.primaryButtonAction}>
                {this.props.primaryButtonText}
            </button>
        );
    }

    render() {
        return(
            <div className="popup-overlay">
                <div className="popup-content">
                    <div className="modal-dialog modal-dialog-centered"tabIndex="-1" aria-labelledby="exampleModalLabel">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">{this.props.title}</h5>
                                    <button type="button" className="btn-close" aria-label="Close" onClick={this.props.onClose}></button>
                                </div>
                                <div className="modal-body">
                                    {this.props.text}
                                </div>
                                <div className="modal-footer">
                                    
                                    {this.renderSecondaryAction()}
                                    {this.renderPrimaryAction()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;