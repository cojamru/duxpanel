import React from 'react';

type DialogButtonBarPropsType = {
    buttons: string[] | HTMLElement[] | any[];
    onButton?: (label?: string) => void;
    buttonClassName: string;
    statusMsg?: string;
    statusMsgClassName?: string;
};

export const DialogButtonBar: React.FC<DialogButtonBarPropsType> = props => {
    const { buttonClassName = '', statusMsgClassName = '', statusMsg = '' } = props;

    const onButton = (label: string) => {
        if (props.onButton) {
            props.onButton(label);
        }
    };

    const defaultOnClick = onButton;

    let leftButtons = [];
    let rightButtons = [];

    for (let i = 0; i < props.buttons.length; i++) {
        let alignRight = true;
        let disabled = false;

        let label: any;
        let type = 'button';
        let onClick: any;
        let className = buttonClassName;

        if (typeof props.buttons[i] === 'string') {
            label = props.buttons[i];
            onClick = defaultOnClick;
        } else if (React.isValidElement(props.buttons[i])) {
            rightButtons.push(props.buttons[i]);
        } else if (typeof props.buttons[i] === 'object') {
            label = props.buttons[i].label;

            onClick = props.buttons[i].onClick ? props.buttons[i].onClick : defaultOnClick;

            if (props.buttons[i].className) {
                className = props.buttons[i].className;
            }
            if (props.buttons[i].type) {
                type = props.buttons[i].type;
            }
            if (props.buttons[i].align && props.buttons[i].align === 'left') {
                alignRight = false;
            }
            if (props.buttons[i].disabled) {
                disabled = true;
            }
        }

        if (label !== undefined) {
            const button = (
                <button
                    key={label}
                    className={className}
                    style={{ marginLeft: 10, marginRight: 10 }}
                    onClick={() => onClick(label)}
                    disabled={disabled}>
                    {label}
                </button>
            );

            if (alignRight) {
                rightButtons.push(button);
            } else {
                leftButtons.push(button);
            }
        }
    }

    return (
        <div className="duxdialogbuttonbar clearfix">
            <div style={{ width: '100%' }}>
                <div style={{ float: 'left' }}>
                    <span className={statusMsgClassName}>{statusMsg}</span>
                    {leftButtons}
                </div>
                <div style={{ float: 'right' }}>{rightButtons}</div>
            </div>
        </div>
    );
};
