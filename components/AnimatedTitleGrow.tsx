import Box, { BoxProps } from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Typography, { TypographyProps } from '@mui/material/Typography';

const AnimatedTitleFade: React.FC<{
  children: string;
  BoxProps?: BoxProps;
  TypographyProps?: TypographyProps;
}> = ({ children, BoxProps = {}, TypographyProps = {} }) => {
  return (
    <Box {...BoxProps}>
      <Typography {...TypographyProps}>
        {Array.from(children).map((character, i) => (
          <Fade key={i} appear in timeout={1000 + i * 100}>
            <span>{character}</span>
          </Fade>
        ))}
      </Typography>
    </Box>
  );
};

export default AnimatedTitleFade;
