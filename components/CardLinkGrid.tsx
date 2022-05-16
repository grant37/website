import React, { Children } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const CardLinkGrid: React.FC<{
  children: React.ReactNode | React.ReactNode[];
}> = ({ children }) => {
  return (
    <Box>
      <Grid container columns={12} spacing={4}>
        {Children.map(children, (child, i) => (
          <Grid item xs={12} key={i} sx={{ flexGrow: 1 }}>
            {child}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardLinkGrid;
