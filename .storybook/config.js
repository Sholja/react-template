import { configure, addDecorator } from '@storybook/react';
import { configureViewport } from '@storybook/addon-viewport';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);
configure(require.context('../src', true, /\.stories\.js$/), module);
configureViewport();
