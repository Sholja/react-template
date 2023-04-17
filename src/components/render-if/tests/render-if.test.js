import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import RenderIf from 'components/render-if';

const dataTestId = 'render-if';

afterEach(cleanup);

it('renders null if show prop is false', () => {
  const untouchedComponent = (
    <RenderIf show={false}>
      <p data-testid={dataTestId}>Render something in component</p>
    </RenderIf>
  );

  const { queryByTestId } = render(untouchedComponent);

  expect(queryByTestId(dataTestId)).toBeNull();
});

it('renders component if show prop is true', () => {
  const untouchedComponent = (
    <RenderIf show>
      <p data-testid={dataTestId}>Render something in component</p>
    </RenderIf>
  );

  const { getByTestId } = render(untouchedComponent);

  expect(getByTestId(dataTestId)).toBeInTheDocument();
});

jest.clearAllMocks();
