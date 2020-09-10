import React from 'react';
import { render } from 'react-dom';

import { IconDefinition, IconPack } from '@fortawesome/fontawesome-common-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretRight, faCaretDown, faInfoCircle } from '@fortawesome/fontawesome-free-solid';

type IconDefinitionOrPack = IconDefinition | IconPack;

library.add(faCaretRight as IconDefinitionOrPack, faCaretDown as IconDefinitionOrPack, faInfoCircle as IconDefinitionOrPack);

import { App } from './components/App';

render(<App />, document.getElementById('react-container'));
