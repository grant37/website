import Typography from '@mui/material/Typography';
import OnPageNav from '../components/OnPageNav';

export default function Contact() {
  return (
    <>
      <Typography variant='h1' sx={{ my: [2, 4] }}>
        Contact
      </Typography>
      <OnPageNav current='contact' isDense />
    </>
  );
}

export function getStaticProps() {
  return {
    props: { pageTitle: 'Contact' },
  };
}
