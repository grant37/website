import '../styles.css';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import NavProvider from '../providers/NavProvider';
import ThemeSettingProvider from '../providers/ThemeSettingProvider';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeSettingProvider>
      <Head>
        <link rel='icon' type='image/png' href='/images/favicon.png' />
      </Head>
      <CssBaseline />
      <NavProvider pageTitle={pageProps.pageTitle} />
      <Container maxWidth='md' sx={{ mb: [2, 4, 6, 8] }}>
        <Component {...pageProps} />
      </Container>
    </ThemeSettingProvider>
  );
}

export default MyApp;
