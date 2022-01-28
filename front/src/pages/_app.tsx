// import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
