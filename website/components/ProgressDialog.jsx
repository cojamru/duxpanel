import React from 'react';
import { DuxProgressDialog } from '../../src/DuxProgressDialog';
import { ProgressBarBS4 } from '../../src/ProgressBarBS4';

export class ProgressDialog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFixedDialogOpen: false,
            isIndeterminateOpen: false,
            fixedProgressValue: 0
        };

        this.progressBarFixed = ProgressBarBS4('progress-bar');
        this.progressBarIndeterminate = ProgressBarBS4('progress-bar progress-bar-striped progress-bar-animated')
    }

    onFixedAbort = () => {
        this.setState({
            isFixedDialogOpen: false,
            fixedProgressValue: 5
        });
    };

    onIndeterminateAbort = () => {
        this.setState({
            isIndeterminateOpen: false
        });
    };

    tick = () => {
        const nextValue = this.state.fixedProgressValue + 1;
        this.setState({
            fixedProgressValue: nextValue
        });
        if (nextValue <= 5) {
            setTimeout(this.tick, 1000);
        } else {
            this.setState({
                isFixedDialogOpen: false
            });
        }
    };

    toggleFixedDialog = () => {
        this.setState({
            isFixedDialogOpen: true,
            fixedProgressValue: 0
        });

        setTimeout(this.tick, 1000);
    };

    toggleIndeterminateOpen = () => {
        this.setState({
            isIndeterminateOpen: true
        });

        setTimeout(() => {
            if (this.state.isIndeterminateOpen) {
                this.setState({
                    isIndeterminateOpen: false
                });
            }
        }, 10000);  // 10 seconds
    };

    render() {
        return (
            <div>
                <DuxProgressDialog
                    show={this.state.isFixedDialogOpen}
                    title="Please Wait"
                    min={0}
                    max={5}
                    value={this.state.fixedProgressValue}
                    allowAbort={true}
                    onAbort={this.onFixedAbort}
                    progressComponent={this.progressBarFixed}
                    abortButtonClassName="btn btn-warning"
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </DuxProgressDialog>

                <DuxProgressDialog
                    show={this.state.isIndeterminateOpen}
                    title="Please Wait"
                    min={0}
                    max={1}
                    value={1}
                    allowAbort={true}
                    onAbort={this.onIndeterminateAbort}
                    showAfter={3000}
                    progressComponent={this.progressBarIndeterminate}
                    abortButtonClassName="btn btn-warning"
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </DuxProgressDialog>

                <p>
                    This progress bar demonstrates a task that takes 5 seconds to complete.  The dialog opens
                    immediately.
                </p>
                <button type="button" className="btn btn-primary" onClick={this.toggleFixedDialog}>Open Dialog</button>

                <p className="mt-5">
                    This progress bar demonstrates a task that takes an unknown amount of time but usually finishes
                    quickly.  This would usually be a web service call.  The dialog opens after 3 seconds then closes
                    automatically after another 7 seconds if not aborted by the user.
                </p>
                <button type="button" className="btn btn-primary" onClick={this.toggleIndeterminateOpen}>Open Dialog</button>
            </div>
        );
    }
}

