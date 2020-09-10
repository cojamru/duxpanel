import React, { useState } from 'react';

import DuxPanel from '../../src/DuxPanel';

export const Basics: React.FC = () => {
    const [IsOpen, setIsOpen] = useState<boolean>(false);

    const handleTogglePanelClick = () => {
        setIsOpen(!IsOpen);
    };

    return (
        <div>
            <button type="button" className="btn btn-secondary" onClick={handleTogglePanelClick}>
                Open Panel
            </button>

            <DuxPanel show={IsOpen} title="Basic DuxPanel" width={400} height={300} onClose={handleTogglePanelClick}>
                <p>This is a basic DuxPanel</p>
            </DuxPanel>
        </div>
    );
};
