import React, { useState, useRef, useEffect } from 'react';
import DuxPanel from '../../src/DuxPanel';

export const PanelStack: React.FC = () => {
    const [OpenPanels, setOpenPanels] = useState<number>(0);

    const EnterPanelRef1 = useRef<HTMLParagraphElement>(null);
    const EnterPanelRef2 = useRef<HTMLParagraphElement>(null);
    const EnterPanelRef3 = useRef<HTMLParagraphElement>(null);
    const EnterPanelRef4 = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        setTimeout(openPanel, 100);
    }, []);

    const closePanel = () => {
        setOpenPanels(OpenPanels - 1);
    };

    const openPanel = () => {
        if (OpenPanels >= 4) {
            return;
        }
        setOpenPanels(OpenPanels + 1);
        setTimeout(openPanel, 1000);
    };

    const enterPressed = (num: number, ref: React.RefObject<HTMLParagraphElement>) => {
        if (ref.current) {
            ref.current.style.display = 'block';
        }
        setTimeout(() => {
            if (ref.current) {
                ref.current.style.display = 'none';
            }
        }, 1000);
    };

    const escapePressed = (num: number, ref: React.RefObject<HTMLParagraphElement>) => {
        if (ref.current) {
            ref.current.style.display = 'block';
        }
        setTimeout(() => {
            if (ref.current) {
                ref.current.style.display = 'none';
            }
        }, 1000);
    };

    return (
        <div>
            <DuxPanel
                show={OpenPanels > 0}
                title="First Panel"
                onClose={closePanel}
                onEnterPressed={() => enterPressed(0, EnterPanelRef1)}
                onEscPressed={() => escapePressed(0, EnterPanelRef1)}
                top="5%"
                left="5%"
                width="40%"
                height="40%">
                <p className="text-primary" style={{ display: 'none' }} ref={EnterPanelRef1}>
                    Enter Pressed
                </p>
                <p className="text-primary" style={{ display: 'none' }} ref={EnterPanelRef1}>
                    Escape Pressed
                </p>
            </DuxPanel>

            <DuxPanel
                show={OpenPanels > 1}
                title="Second Panel"
                onClose={closePanel}
                onEnterPressed={() => enterPressed(1, EnterPanelRef2)}
                onEscPressed={() => escapePressed(1, EnterPanelRef2)}
                top="5%"
                left="55%"
                width="40%"
                height="40%">
                <p className="text-primary" style={{ display: 'none' }} ref={EnterPanelRef2}>
                    Enter Pressed
                </p>
                <p className="text-primary" style={{ display: 'none' }} ref={EnterPanelRef2}>
                    Escape Pressed
                </p>
            </DuxPanel>

            <DuxPanel
                show={OpenPanels > 2}
                title="Third Panel"
                onClose={closePanel}
                onEnterPressed={() => enterPressed(2, EnterPanelRef3)}
                onEscPressed={() => escapePressed(2, EnterPanelRef3)}
                top="55%"
                left="5%"
                width="40%"
                height="40%">
                <p className="text-primary" style={{ display: 'none' }} ref={EnterPanelRef3}>
                    Enter Pressed
                </p>
                <p className="text-primary" style={{ display: 'none' }} ref={EnterPanelRef3}>
                    Escape Pressed
                </p>
            </DuxPanel>

            <DuxPanel
                show={OpenPanels > 3}
                title="Fourth Panel"
                onClose={closePanel}
                onEnterPressed={() => enterPressed(3, EnterPanelRef4)}
                onEscPressed={() => escapePressed(3, EnterPanelRef4)}
                top="55%"
                left="55%"
                width="40%"
                height="40%">
                <p className="text-primary" style={{ display: 'none' }} ref={EnterPanelRef4}>
                    Enter Pressed
                </p>
                <p className="text-primary" style={{ display: 'none' }} ref={EnterPanelRef4}>
                    Escape Pressed
                </p>
            </DuxPanel>
        </div>
    );
};
