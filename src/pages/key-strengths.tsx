import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { styled } from '@mui/system';
import { Box, Grid, Typography } from '@mui/material';
import { People, Business, TrendingUp, LocalShipping } from '@mui/icons-material';

const HoverBox = styled(Box)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  textAlign: 'center',
}));

const KeyStrengths = () => (
  <Box sx={{ margin: '40px 0px' }}>
    <Typography variant="h2" align="center" gutterBottom my={5}>
    <span style={{ color: '#0056b3' }}>KEY</span> STRENGTHS
    </Typography>
    <Grid container spacing={4} justifyContent="center" my={5}>
      {/* Total Employees */}
      <Grid item xs={12} sm={6} md={3}>
        <HoverBox>
          <People style={{ fontSize: 48, color: '#1976d2' }} />
          <Typography variant="h3" color="primary">
            22,000+
          </Typography>
          <Typography variant="body1">TOTAL EMPLOYEES</Typography>
        </HoverBox>
      </Grid>

      {/* Total Business Concerns */}
      <Grid item xs={12} sm={6} md={3}>
        <HoverBox>
          <Business style={{ fontSize: 48, color: '#1976d2' }} />
          <Typography variant="h3" color="primary">
            15+
          </Typography>
          <Typography variant="body1">TOTAL BUSINESS CONCERNS</Typography>
        </HoverBox>
      </Grid>

      {/* Export Oriented Companies */}
      <Grid item xs={12} sm={6} md={3}>
        <HoverBox>
          <LocalShipping style={{ fontSize: 48, color: '#1976d2' }} />
          <Typography variant="h3" color="primary">
            6
          </Typography>
          <Typography variant="body1">EXPORT ORIENTED COMPANIES</Typography>
        </HoverBox>
      </Grid>

      {/* Public Listed Companies */}
      <Grid item xs={12} sm={6} md={3}>
        <HoverBox>
          <TrendingUp style={{ fontSize: 48, color: '#1976d2' }} />
          <Typography variant="h3" color="primary">
            2
          </Typography>
          <Typography variant="body1">PUBLIC LISTED COMPANIES</Typography>
        </HoverBox>
      </Grid>
    </Grid>
  </Box>
);

export default KeyStrengths;
