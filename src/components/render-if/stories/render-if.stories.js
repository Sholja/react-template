import React from 'react';

import RenderIf from 'components/render-if';

export default {
  title: 'Render If',
  component: RenderIf,
  parameters: {
    notes: 'Pretty simple component that will render children based on a passed boolean prop.',
  },
};

const RenderIfStory = ({ ...args }) => (
  <RenderIf {...args}>
    <p>The paragraph is now displayed</p>
  </RenderIf>
);

export const BasicExample = RenderIfStory.bind({});

BasicExample.args = {
  show: true,
};
