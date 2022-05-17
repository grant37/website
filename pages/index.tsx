import AnimatedTitleGrow from '../components/AnimatedTitleGrow';
import CardLinkGrid from '../components/CardLinkGrid';
import AboutLink from '../components/AboutLink';
import ContactLink from '../components/ContactLink';
import WorkLink from '../components/WorkLink';
import Head from 'next/head';

function HomePage() {
  return (
    <>
      <Head>
        <title>Grant Sisson</title>
        <meta name='description' content='My personal website.' />
      </Head>
      <AnimatedTitleGrow
        BoxProps={{ my: [2, 4] }}
        TypographyProps={{ variant: 'h1' }}
      >
        Grant Sisson
      </AnimatedTitleGrow>
      <CardLinkGrid BoxProps={{ my: [2, 4] }}>
        <AboutLink showImage />
        <WorkLink />
        <ContactLink />
      </CardLinkGrid>
    </>
  );
}

export function getStaticProps() {
  return {
    props: { pageTitle: 'Home' },
  };
}

export default HomePage;
