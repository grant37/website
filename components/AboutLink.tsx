import CardLink from '../components/CardLink';
import PersonIcon from '@mui/icons-material/Person';
import me from '../public/images/me.jpeg';
import Link from 'next/link';

const AboutLink: React.FC<{ showImage?: boolean }> = ({
  showImage = false,
}) => {
  return (
    <Link href='/about'>
      <a>
        <CardLink
          title='About'
          summary='I like writing software for the web, rock climbing and drinking coffee.'
          IconComponent={PersonIcon}
          {...(showImage && {
            imageSrc: me,
            altText: 'A picture of me sport climbing in the Poudre Canyon, CO.',
          })}
        />
      </a>
    </Link>
  );
};

export default AboutLink;
