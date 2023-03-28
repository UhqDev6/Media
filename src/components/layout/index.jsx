// import Head from 'next/head';
import PropTypes from 'prop-types';
import Wrapper from '../atoms/wrapper';
import Footer from '../molecules/footer';
import Headers from '../molecules/header';

export default function Layout(props) {
  const {
    children,
  } = props;
  return (
    <Wrapper>
      <header>
        <Headers />
      </header>
      <main>
        { children }
      </main>
      <footer>
        <Footer />
      </footer>
    </Wrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
