import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faCaretRight from '@fortawesome/fontawesome-free-solid/faCaretRight';
import faCaretDown from '@fortawesome/fontawesome-free-solid/faCaretDown';

type PropsType = {
    title: string;
    form: JSX.Element;
    name: string;
};
type StateType = {
    collapsed: boolean;
};

export class Section extends React.Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);
        this.state = {
            collapsed: true,
        };
    }

    toggleCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div className="container mt-2">
                <div className="row">
                    <div className="col">
                        <div className="alert alert-secondary" onClick={this.toggleCollapse} style={{ cursor: 'pointer' }}>
                            <h4>
                                {this.state.collapsed && <FontAwesomeIcon icon={faCaretRight} className="mr-2" />}
                                {!this.state.collapsed && <FontAwesomeIcon icon={faCaretDown} className="mr-2" />}
                                {this.props.title}
                            </h4>
                        </div>
                    </div>
                </div>
                {!this.state.collapsed && (
                    <div className="row">
                        <div className="col">{this.props.form}</div>
                    </div>
                )}
            </div>
        );
    }
}
