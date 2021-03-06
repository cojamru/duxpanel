import React from 'react';
import DuxPanel from '../../src/DuxPanel';

export class Responsive extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isProportionalOpen: false, isBreakpointOpen: false };
    }

    toggleBreakpointPanel = () => {
        this.setState({ isBreakpointOpen: !this.state.isBreakpointOpen });
    };

    toggleProportionalPanel = () => {
        this.setState({ isProportionalOpen: !this.state.isProportionalOpen });
    };

    render() {
        const breakpointWidths = {
            xs: 400,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1100,
        };

        return (
            <div>
                <button type="button" className="btn btn-secondary" onClick={this.toggleProportionalPanel}>
                    Open Proportionally Sized Panel
                </button>
                <button type="button" className="btn btn-secondary ml-3" onClick={this.toggleBreakpointPanel}>
                    Open Breakpoint Sized Panel
                </button>

                <DuxPanel
                    show={this.state.isProportionalOpen}
                    title="Proportionally Sized DuxPanel"
                    width="80%"
                    height="80%"
                    left="10%"
                    top="10%"
                    onClose={this.toggleProportionalPanel}
                    allowDrag={false}
                    center={false}>
                    <p>
                        This is a proportionally sized DuxPanel. As you resize the browser window the panel will resize to maintain a proportional
                        size.
                    </p>
                </DuxPanel>

                <DuxPanel
                    show={this.state.isBreakpointOpen}
                    title="Breakpoint Sized DuxPanel"
                    onClose={this.toggleBreakpointPanel}
                    allowDrag={false}
                    center={true}
                    width={breakpointWidths}>
                    <p>This panel will adjust its width based on the width of the browser window. Try resizing your browser.</p>
                    <div className="d-block d-sm-none">
                        <h5 className="text-primary">Breakpoint xs</h5>
                        Browser is less than 576px wide.
                    </div>
                    <div className="d-none d-sm-block d-md-none">
                        <h5 className="text-primary">Breakpoint sm</h5>
                        Browser is between 576px and 768px wide.
                    </div>
                    <div className="d-none d-md-block d-lg-none">
                        <h5 className="text-primary">Breakpoint md</h5>
                        Browser is between 768px and 992px wide.
                    </div>
                    <div className="d-none d-lg-block d-xl-none">
                        <h5 className="text-primary">Breakpoint lg</h5>
                        Browser is between 992px and 1200px wide.
                    </div>
                    <div className="d-none d-xl-block">
                        <h5 className="text-primary">Breakpoint xl</h5>
                        Browser is larger than 1200px wide.
                    </div>
                </DuxPanel>
            </div>
        );
    }
}
