import React, { useState } from 'react';

import { Topic } from './Topic';
import { NavBar } from './NavBar';

import IntroHtml from '../html/Intro.html';

import GettingStartedHtml from '../html/GettingStarted.html';

import { Basics } from './Basics';
import BasicsHtml from '../html/Basics.html';
import BasicsSource from '../source/Basics.txt';

import { Responsive } from './Responsive';
import ResponsiveHtml from '../html/Responsive.html';
import ResponsiveSource from '../source/Responsive.txt';

import { Animation } from './Animation';
import AnimationHtml from '../html/Animation.html';
import AnimationSource from '../source/Animation.txt';

import DuxPanelPropertiesHtml from '../html/DuxPanelProperties.html';

import { Dialog } from './Dialog';
import DialogHtml from '../html/Dialog.html';
import DialogSource from '../source/Dialog.txt';

import { OkDialog } from './OkDialog';
import OkDialogHtml from '../html/OkDialog.html';
import OkDialogSource from '../source/OkDialog.txt';

import { YesNoDialog } from './YesNoDialog';
import YesNoDialogHtml from '../html/YesNoDialog.html';
import YesNoDialogSource from '../source/YesNoDialog.txt';

import { ProgressDialog } from './ProgressDialog';
import ProgressDialogHtml from '../html/ProgressDialog.html';
import ProgressDialogSource from '../source/ProgressDialog.txt';

type TopicType = {
    topic: string;
    component?: JSX.Element;
    html: string;
    source?: string;
};

const Topics: TopicType[] = [
    {
        topic: 'intro',
        html: IntroHtml,
    },
    {
        topic: 'gettingstarted',
        html: GettingStartedHtml,
    },
    {
        topic: 'basics',
        component: <Basics />,
        html: BasicsHtml,
        source: BasicsSource,
    },
    {
        topic: 'responsive',
        component: <Responsive />,
        html: ResponsiveHtml,
        source: ResponsiveSource,
    },
    {
        topic: 'animation',
        component: <Animation />,
        html: AnimationHtml,
        source: AnimationSource,
    },
    {
        topic: 'reference',
        html: DuxPanelPropertiesHtml,
    },
    {
        topic: 'dialog',
        component: <Dialog />,
        html: DialogHtml,
        source: DialogSource,
    },
    {
        topic: 'okdialog',
        component: <OkDialog />,
        html: OkDialogHtml,
        source: OkDialogSource,
    },
    {
        topic: 'yesnodialog',
        component: <YesNoDialog />,
        html: YesNoDialogHtml,
        source: YesNoDialogSource,
    },
    {
        topic: 'progressdialog',
        component: <ProgressDialog />,
        html: ProgressDialogHtml,
        source: ProgressDialogSource,
    },
];

export const App: React.FC = () => {
    const [CurrentTopic, setCurrentTopic] = useState<string>('intro');

    const TopicComponents = Topics.map(topic => {
        <Topic
            show={topic.topic === CurrentTopic}
            key={topic.topic}
            topic={topic.topic}
            component={topic.component}
            source={topic.source}
            html={topic.html}
        />;
    });

    const topicClicked = (topic: string) => setCurrentTopic(topic);

    return (
        <div className="container">
            <NavBar {...{ topicClicked }} />
            {TopicComponents}
        </div>
    );
};
