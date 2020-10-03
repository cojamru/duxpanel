import React, { useState, useEffect } from 'react';
import DuxDialog from './DuxDialog';

type DuxProgressDialogPropsType = {
    show: boolean;
    title: string;
    min: number;
    max: number;
    value: number;
    allowAbort: boolean;
    onAbort: () => void;
    showAfter?: number;
    abortButtonClassName: string;
    progressComponent: any;
};

const DuxProgressDialog: React.FC<DuxProgressDialogPropsType> = props => {
    const { min = 0, max = 0, value = 0, showAfter = 0 } = props;
    const { abortButtonClassName = '' } = props;
    const { allowAbort = false, show } = props;
    const { onAbort } = props;

    const [TimerElapsed, setTimerElapsed] = useState<boolean>(showAfter < 1);

    useEffect(() => {
        if (show) {
            // The dialog was hidden but is now to be shown.
            if (showAfter) {
                // The dialog is only to be shown after a timeout
                setTimeout(() => {
                    setTimerElapsed(true);
                }, showAfter);
            }
        } else if (!show && showAfter > 0) {
            // The dialog was being shown but is now hidden.
            // When the dialog is to be re-displayed it is only after a timeout.
            setTimerElapsed(false);
        }
    }, [show, showAfter]);

    if (!show || !TimerElapsed) {
        return null;
    }

    let buttons = null;

    if (allowAbort) {
        buttons = [
            {
                label: 'Abort',
                className: abortButtonClassName,
                onClick: onAbort,
            },
        ];
    }

    return (
        <DuxDialog {...props} allowClose={false} clickToDismiss={false} buttons={buttons}>
            {props.children}
            {(min || max || value) &&
                props.progressComponent &&
                React.createElement(props.progressComponent, {
                    min,
                    max,
                    value,
                })}
        </DuxDialog>
    );
};

export default DuxProgressDialog;
