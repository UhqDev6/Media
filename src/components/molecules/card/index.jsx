import PropTypes from 'prop-types';

export default function Card(props) {
  const {
    className,
    children,
  } = props;
  return (
    <div className={`${className}`}>
      { children }
    </div>
  );
}

function Title(props) {
  const {
    className,
    children,
  } = props;
  return (
    <div>
      <h1 className={`${className}`}>
        { children }
      </h1>
    </div>
  );
}

function Body(props) {
  const {
    children,
    className,
  } = props;

  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}

function Footer(props) {
  const {
    className,
    children,
  } = props;

  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
};
Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
};
Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
};
Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
};

Card.defaultProps = {
  children: '',
  className: '',
};
Title.defaultProps = {
  children: '',
  className: '',
};

Body.defaultProps = {
  children: '',
  className: '',
};

Footer.defaultProps = {
  children: '',
  className: '',
};

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;
