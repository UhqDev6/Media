// import Head from 'next/head';
import PropTypes from 'prop-types';
import Footer from '../molecules/footer';
import Headers from '../molecules/header';

export default function Layout(props) {
  const {
    children,
  } = props;
  return (
    <div>
      <header>
        <Headers />
      </header>
      <main>
        { children }
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
