import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CardLinkGrid from '../components/CardLinkGrid';
import HomeLink from '../components/HomeLink';
import ContactLink from '../components/ContactLink';
import WorkLink from '../components/WorkLink';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name='description'
          content='A little more about me and the site.'
        />
      </Head>
      <Typography variant='h2' sx={{ my: [2, 4] }}>
        About
      </Typography>
      <Typography sx={{ mb: [1, 2] }}>
        Welcome to my site. It's a little sparse at the moment. In the long
        term, I'd like for it to serve as a portfolio of sorts, and maybe one
        day a place to post some writing as well.
      </Typography>
      <Typography sx={{ mb: [1, 2] }}>
        I started programming in college, and since graduating I've worked as a
        software engineer in the ecommerce, saas, and consulting industries. I
        enjoy building fast, useful web applications, and the majority of my
        experience is in exactly that. I also like to talk about (and generally
        enjoy) rock climbing, books, movies, and driking way too much coffee.
      </Typography>
      <Typography sx={{ mb: [1, 2] }}>
        I built this site with{' '}
        <Link color='inherit' href='https://www.typescriptlang.org/'>
          TypeScript
        </Link>
        ,{' '}
        <Link color='inherit' href='https://reactjs.org/'>
          React
        </Link>
        ,{' '}
        <Link color='inherit' href='https://nextjs.org/'>
          Next.js
        </Link>
        , and{' '}
        <Link
          color='inherit'
          href='https://mui.com/material-ui/getting-started/installation/'
        >
          Material-UI
        </Link>{' '}
        - just a few of my favorite tools. Honestly, they're probably a bit
        overpowered for what the site is now, but they're also fun to use. Find
        the source code and that of any of my other projects on my projects
        page, or reach out if you'd like to get in touch.
      </Typography>
      <CardLinkGrid BoxProps={{ my: [2, 4] }}>
        <WorkLink />
        <ContactLink />
        <HomeLink />
      </CardLinkGrid>
    </>
  );
}

export function getStaticProps() {
  return {
    props: { pageTitle: 'About' },
  };
}
