import CardLink from '../components/CardLink';
import TerminalIcon from '@mui/icons-material/Terminal';
import Link from 'next/link';

const WorkLink: React.FC<{}> = ({}) => {
  return (
    <Link href='/work'>
      <a>
        <CardLink
          title='Work'
          summary='Projects, new and old. See my work and contributions.'
          IconComponent={TerminalIcon}
        />
      </a>
    </Link>
  );
};

export default WorkLink;
