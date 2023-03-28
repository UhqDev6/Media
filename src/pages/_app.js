import { Poppins } from '@next/font/google';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import store from '@/states';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable} font-sans`}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </main>
  );
}
