import React, { Children } from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const CardLinkGrid: React.FC<{
  children: React.ReactNode | React.ReactNode[];
  BoxProps?: BoxProps;
}> = ({ children, BoxProps = {} }) => {
  return (
    <Box {...BoxProps}>
      <Grid container columns={12} spacing={4}>
        {Children.map(
          children,
          (child, i) =>
            child && (
              <Grid item xs={12} key={i} sx={{ flexGrow: 1 }}>
                {child}
              </Grid>
            )
        )}
      </Grid>
    </Box>
  );
};

export default CardLinkGrid;
