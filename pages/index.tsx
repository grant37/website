import AnimatedTitleGrow from '../components/AnimatedTitleGrow';
import CardLink from '../components/CardLink';
import CardLinkGrid from '../components/CardLinkGrid';
import TerminalIcon from '@mui/icons-material/Terminal';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PersonIcon from '@mui/icons-material/Person';
import me from '../public/images/me.jpeg';
import Link from 'next/link';
import OnPageNav from '../components/OnPageNav';

function HomePage() {
  return (
    <>
      <AnimatedTitleGrow
        BoxProps={{ my: [2, 4] }}
        TypographyProps={{ variant: 'h1' }}
      >
        Grant Sisson
      </AnimatedTitleGrow>
      <OnPageNav />
    </>
  );
}

export function getStaticProps() {
  return {
    props: { pageTitle: 'Home' },
  };
}

export default HomePage;
