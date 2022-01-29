// import '../styles/global.scss';
import type { AppProps } from 'next/app';
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@/styles/full-calendar.scss';
import '@/styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
