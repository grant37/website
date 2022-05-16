import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

const SocialLink = ({ icon, href, title, bgcolor }) => {
  return (
    <a href={href}>
      <IconButton title={title}>
        <Avatar sx={{ width: 56, height: 56, bgcolor }}>{icon}</Avatar>
      </IconButton>
    </a>
  );
};

export default SocialLink;
