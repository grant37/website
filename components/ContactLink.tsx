import CardLink from '../components/CardLink';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Link from 'next/link';

const OnPageNav: React.FC<{}> = () => {
  return (
    <Link href='/connect'>
      <a>
        <CardLink
          title='Connect'
          summary="If you'd like to get in touch."
          IconComponent={ContactMailIcon}
        />
      </a>
    </Link>
  );
};

export default OnPageNav;
