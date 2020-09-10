import React from 'react';

import { Section } from './Section';
import { Panel } from './Panel';
import { Responsive } from './Responsive';
import { PanelStack } from './PanelStack';
import { Animation } from './Animation';
import { Dialog } from './Dialog';
import { OkDialog } from './OkDialog';
import { YesNoDialog } from './YesNoDialog';

export const App = () => (
    <div>
        <Section title="Panel" name="panel" form={<Panel />} />
        <Section title="Responsive" name="responsive" form={<Responsive />} />
        <Section title="Animation" name="animation" form={<Animation />} />
        <Section title="Panel Stack" name="panelstack" form={<PanelStack />} />
        <Section title="Dialog" name="dialog" form={<Dialog />} />
        <Section title="Ok Dialog" name="okdialog" form={<OkDialog />} />
        <Section title="Yes No Dialog" name="yesnodialog" form={<YesNoDialog />} />
    </div>
);
