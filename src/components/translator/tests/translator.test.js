import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Translator from '../index';
import { wrapComponent } from '../../../common/index';

const correctTranslation = 'COMMON.YES';
const wrongTranslation = 'THIS.KEY.NON.EXISTING';

afterEach(cleanup);

it('renders correct translation when passed in', () => {
  const untouchedComponent = wrapComponent(Translator, { text: correctTranslation });

  const { getByText } = render(untouchedComponent);

  expect(getByText('Yes')).toBeInTheDocument();
});

it(`doesn't translate if the key doesn't exist in the translations`, () => {
  const untouchedComponent = wrapComponent(Translator, { text: wrongTranslation });

  const { getByText } = render(untouchedComponent);

  expect(getByText(wrongTranslation)).toBeInTheDocument();
});

jest.clearAllMocks();
