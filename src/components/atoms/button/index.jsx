import PropTypes from 'prop-types';

function Button(props) {
  const {
    type, children, className, loading, onClick,
  } = props;
  return (
    <button
      disabled={loading}
      className={`${className}`}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
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
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: '',
  className: '',
  loading: false,
  onClick: () => {},
};

export default Button;
