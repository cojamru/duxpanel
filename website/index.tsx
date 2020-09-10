import React from 'react';
import { render } from 'react-dom';

import { IconDefinition, IconPack } from '@fortawesome/fontawesome-common-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle } from '@fortawesome/fontawesome-free-solid';

type IconDefinitionOrPack = IconDefinition | IconPack;

library.add(faInfoCircle as IconDefinitionOrPack);

import { App } from './components/App';

import '../src/duxpanel.css';

render(<App />, document.getElementById('react-container'));
