import React from 'react';
import { DuxOkDialog } from '../../src/DuxOkDialog';

export class OkDialog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDialogOpen: false,
            showAgreeMsg: false
        };
    }

    onCancel = () => {
        this.toggleDialog();
    };

    onOk = () => {
        this.toggleDialog();
    };

    shouldClose = () => {
        if (!this._shouldClose.checked) {
            this.setState({showAgreeMsg: true});
        }
        return this._shouldClose.checked;
    };

    toggleDialog = () => {
        this.setState({
            isDialogOpen: !this.state.isDialogOpen,
            showAgreeMsg: false
        });
    };

    render() {
        return (
            <div>
                <DuxOkDialog
                    show={this.state.isDialogOpen}
                    title="Ok Dialog Title"
                    width={400}
                    showCancel={true}
                    onOk={this.onOk}
                    onCancel={this.onCancel}
                    shouldClose={this.shouldClose}
                    okClassName="btn btn-primary"
                    cancelClassName="btn btn-warning"
                >
                    I Agree: <input type="checkbox" ref={ref => this._shouldClose=ref}/>
                    <p>Your order is ready to submit.</p>
                    {this.state.showAgreeMsg &&
                    <p className="text-danger">You must agree to the terms</p>
                    }
                </DuxOkDialog>

                <button type="button" className="btn btn-primary" onClick={this.toggleDialog}>Open Dialog</button>
            </div>
        );
    }
}
