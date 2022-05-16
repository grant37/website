import CardLink from '../components/CardLink';
import HomeIcon from '@mui/icons-material/Home';

import Link from 'next/link';

const HomeLink: React.FC<{}> = () => {
  return (
    <Link href='/'>
      <a>
        <CardLink
          title='Home'
          summary='Take me back.'
          IconComponent={HomeIcon}
        />
      </a>
    </Link>
  );
};

export default HomeLink;
