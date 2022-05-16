import CardLink from '../components/CardLink';
import CardLinkGrid from '../components/CardLinkGrid';
import TerminalIcon from '@mui/icons-material/Terminal';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PersonIcon from '@mui/icons-material/Person';
import me from '../public/images/me.jpeg';
import Link from 'next/link';

const OnPageNav: React.FC<{ current?: string; isDense?: boolean }> = ({
  current,
  isDense = false,
}) => {
  return (
    <CardLinkGrid>
      {current !== 'about' && (
        <Link href='/about'>
          <a>
            <CardLink
              title='About'
              summary='I like writing software for the web, rock climbing and drinking coffee.'
              imageSrc={!isDense && me}
              altText='A picture of me sport climbing in the Poudre Canyon, CO.'
              IconComponent={PersonIcon}
            />
          </a>
        </Link>
      )}
      {current !== 'work' && (
        <Link href='/work'>
          <a>
            <CardLink
              title='Work'
              summary='Projects, new and old. See my work and contributions.'
              IconComponent={TerminalIcon}
            />
          </a>
        </Link>
      )}
      {current !== 'contact' && (
        <Link href='/contact'>
          <a>
            <CardLink
              title='Contact'
              summary="If you'd like to get in touch."
              IconComponent={ContactMailIcon}
            />
          </a>
        </Link>
      )}
    </CardLinkGrid>
  );
};

export default OnPageNav;
