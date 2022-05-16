import Image, { StaticImageData } from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import SvgIcon from '@mui/material/SvgIcon';
import Box from '@mui/material/Box';

const CardLink: React.FC<{
  title: string;
  summary: string;
  imageSrc?: StaticImageData;
  altText?: string;
  IconComponent?: typeof SvgIcon;
}> = ({ title, summary, imageSrc, altText, IconComponent }) => {
  const CardImage =
    imageSrc &&
    altText &&
    (() => (
      <Image
        src={imageSrc}
        layout='responsive'
        placeholder='blur'
        alt={altText}
      />
    ));

  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea>
        {CardImage && <CardMedia component={CardImage} />}
        <CardContent>
          <Box {...(IconComponent && { sx: { display: 'flex' } })}>
            {IconComponent && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  mr: 2,
                }}
              >
                <IconComponent
                  fontSize='large'
                  sx={{ flexGrow: 0 }}
                  color='secondary'
                />
              </Box>
            )}
            <Box>
              <Typography gutterBottom variant='h5' component='h2'>
                {title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {summary}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardLink;
