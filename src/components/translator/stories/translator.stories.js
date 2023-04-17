import React from 'react';

import Translator from 'components/translator';

export default {
  title: 'Translator',
  component: Translator,
  parameters: {
    notes: `Pretty simple component that will translate the passed content, if the content is in 
    translations (if not, the component will just render passed text). You can pass 
    the "translationObject", if you need something replaced inside the string.`,
  },
};

const TranslatorStory = ({ ...args }) => <Translator {...args} />;

export const BasicExample = TranslatorStory.bind({});

BasicExample.args = {
  text: 'COMMON.YES',
  translationObject: {},
};
