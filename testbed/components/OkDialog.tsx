import React, { useState, useRef } from 'react';

import DuxOkDialog from '../../src/DuxOkDialog';

export const OkDialog: React.FC = () => {
    const [IsDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const [ShowAgreeMsg, setShowAgreeMsg] = useState<boolean>(false);

    const ShouldCloseRef = useRef<HTMLInputElement>(null);

    const toggleDialog = () => {
        setIsDialogOpen(!IsDialogOpen);
        setShowAgreeMsg(false);
    };

    const onCancel = () => toggleDialog;
    const onOk = () => toggleDialog;

    const shouldClose = (): boolean => {
        if (ShouldCloseRef.current) {
            if (!ShouldCloseRef.current.checked) {
                setShowAgreeMsg(true);
            }

            return ShouldCloseRef.current.checked;
        } else {
            return false;
        }
    };

    return (
        <div>
            <DuxOkDialog
                show={IsDialogOpen}
                title="Ok Dialog Title"
                showCancel={true}
                onOk={onOk}
                onCancel={onCancel}
                shouldClose={shouldClose}
                okClassName="btn btn-primary"
                cancelClassName="btn btn-warning">
                I Agree: <input type="checkbox" ref={ShouldCloseRef} />
                <p>Your order is ready to submit.</p>
                {ShowAgreeMsg && <p className="text-danger">You must agree to the terms</p>}
            </DuxOkDialog>

            <button type="button" className="btn btn-default" onClick={toggleDialog}>
                Open Dialog
            </button>
        </div>
    );
};
