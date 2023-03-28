import PropTypes from 'prop-types';

function Button(props) {
  const {
    type, children, className, loading,
  } = props;
  return (
    <button
      disabled={loading}
      className={`${className}`}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      { loading ? '...' : children }
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  children: '',
  className: '',
  loading: false,
};

export default Button;
