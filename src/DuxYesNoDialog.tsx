import React from 'react';

import DuxDialog from './DuxDialog';

type DuxYesNoDialogPropsType = {
    show: boolean;
    title: string;
    yesClassName: string;
    noClassName: string;
    onYes: () => void;
    onNo: () => void;
};

const DuxYesNoDialog: React.FC<DuxYesNoDialogPropsType> = props => {
    let buttons = [
        {
            label: 'Yes',
            className: props.yesClassName,
            onClick: props.onYes,
        },
        {
            label: 'No',
            className: props.noClassName,
            onClick: props.onNo,
        },
    ];

    return (
        <DuxDialog {...props} buttons={buttons} onClose={props.onNo}>
            {props.children}
        </DuxDialog>
    );
};

export default DuxYesNoDialog;
