import '../styles.css';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import NavProvider from '../providers/NavProvider';
import ThemeSettingProvider from '../providers/ThemeSettingProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeSettingProvider>
      <CssBaseline />
      <NavProvider pageTitle={pageProps.pageTitle} />
      <Container maxWidth='md' sx={{ mb: [2, 4, 6, 8] }}>
        <Component {...pageProps} />
      </Container>
    </ThemeSettingProvider>
  );
}

export default MyApp;
