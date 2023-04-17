import React from 'react';
import PropTypes from 'prop-types';

import translations from 'core/translations';

const Translator = ({ text, translationObject = {} }, { t }) => {
  if (translations.en[text]) {
    return <>{t(text, translationObject)}</>;
  }

  return text;
};

Translator.contextTypes = {
  t: PropTypes.func.isRequired,
};

Translator.propTypes = {
  text: PropTypes.string.isRequired,
  translationObject: PropTypes.shape({}),
};

Translator.defaultProps = {
  translationObject: {},
};

export default Translator;
