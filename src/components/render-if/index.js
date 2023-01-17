import PropTypes from 'prop-types';

const RenderIf = ({ show, children }) => {
  if (show) {
    return children;
  }

  return null;
};

RenderIf.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

RenderIf.defaultProps = {
  show: false,
};

export default RenderIf;
