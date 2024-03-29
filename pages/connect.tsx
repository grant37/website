import Typography from '@mui/material/Typography';
import CardLinkGrid from '../components/CardLinkGrid';
import AboutLink from '../components/AboutLink';
import WorkLink from '../components/WorkLink';
import SocialLink from '../components/SocialLink';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Stack from '@mui/material/Stack';
import Head from 'next/head';

export default function Connect() {
  return (
    <>
      <Head>
        <title>Connect</title>
        <meta name='description' content='Contact info.' />
      </Head>
      <Typography variant='h2' sx={{ my: [2, 4] }}>
        Connect
      </Typography>
      <Stack direction='row' spacing={2} justifyContent='space-around'>
        <SocialLink
          title='LinkedIn'
          bgcolor='#0077B5'
          href='https://www.linkedin.com/in/grant-sisson'
          icon={<LinkedInIcon fontSize='large' />}
        />
        <SocialLink
          title='Email me'
          bgcolor={(theme) => theme.palette.secondary.main}
          href='mailto:grant@sisson.dev'
          icon={<EmailIcon fontSize='large' />}
        />
        <SocialLink
          title='GitHub'
          bgcolor={(theme) =>
            theme.palette.mode === 'dark' ? '#ffffff' : '#000000'
          }
          href='https://github.com/grant37'
          icon={<GitHubIcon fontSize='large' />}
        />
      </Stack>
      <CardLinkGrid BoxProps={{ mt: [4, 8], mb: [2, 4] }}>
        <WorkLink />
        <AboutLink />
      </CardLinkGrid>
    </>
  );
}

export function getStaticProps() {
  return {
    props: { pageTitle: 'Connect' },
  };
}
