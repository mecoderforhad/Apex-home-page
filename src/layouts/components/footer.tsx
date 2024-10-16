import { Link } from 'react-router-dom';

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box, Grid, Divider, Typography } from '@mui/material';

export default function Footer({ bgColor = '#111' }: any) {
  return (
    <Box sx={{ width: '100%', background: bgColor, p: { xs: 2, sm: 4 }, color: '#fff' }}>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="center"
        textAlign="center"
      >
        {/* Quick Menu */}
        <Grid item xs={12} sm={6} lg={2} sx={{ my: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#1E90FF', mb: 2 }}>
            QUICK MENU
          </Typography>
          <Typography
            component={Link}
            to="/"
            variant="body1"
            sx={{ textDecoration: 'none', color: '#fff', display: 'block', mb: 1 }}
          >
            HOME
          </Typography>
          <Typography
            component={Link}
            to="/"
            variant="body1"
            sx={{ textDecoration: 'none', color: '#fff', display: 'block', mb: 1 }}
          >
            ABOUT
          </Typography>
          <Typography
            component={Link}
            to="/"
            variant="body1"
            sx={{ textDecoration: 'none', color: '#fff', display: 'block', mb: 1 }}
          >
            OUR BUSINESSES
          </Typography>
        </Grid>

        {/* More Info */}
        <Grid item xs={12} sm={6} lg={2} sx={{ my: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#1E90FF', mb: 2 }}>
            More Info
          </Typography>
          <Typography
            component={Link}
            to="/"
            variant="body1"
            sx={{ textDecoration: 'none', color: '#fff', display: 'block', mb: 1 }}
          >
            SUSTAINABILITY
          </Typography>
          <Typography
            component={Link}
            to="/"
            variant="body1"
            sx={{ textDecoration: 'none', color: '#fff', display: 'block', mb: 1 }}
          >
            CSR
          </Typography>
          <Typography
            component={Link}
            to="/"
            variant="body1"
            sx={{ textDecoration: 'none', color: '#fff', display: 'block', mb: 1 }}
          >
            CONTACT
          </Typography>
        </Grid>

        {/* Contact Us */}
        <Grid item xs={12} sm={6} lg={3} sx={{ my: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#1E90FF', mb: 2 }}>
            CONTACT US
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center" sx={{ mb: 1 }}>
            <EmailIcon sx={{ mr: 1, color: '#1E90FF' }} />
            <Typography variant="body1">info@apexholdings.com</Typography>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center" sx={{ mb: 1 }}>
            <PhoneIcon sx={{ mr: 1, color: '#1E90FF' }} />
            <Typography variant="body1">+880 9606669988</Typography>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center" sx={{ mb: 1 }}>
            <PhoneIcon sx={{ mr: 1, color: '#1E90FF' }} />
            <Typography variant="body1">+88-02-9861685, +88-02-8810850</Typography>
          </Box>
        </Grid>

        {/* Location */}
        <Grid item xs={12} sm={6} lg={5} sx={{ my: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#1E90FF', mb: 2 }}>
            LOCATION
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center" sx={{ mb: 1 }}>
            <LocationOnIcon sx={{ mr: 1, color: '#1E90FF' }} />
            <Typography variant="body1">
              Gulshan Avenue, Shanta Skymark, Gulshan, Dhaka-1212, Bangladesh
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center" sx={{ mb: 1 }}>
            <AccessTimeIcon sx={{ mr: 1, color: '#1E90FF' }} />
            <Typography variant="body1">SAT-THU 08:00am ⇾ 04:30pm</Typography>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3, backgroundColor: '#444' }} />

      <Grid container justifyContent="center" sx={{ mt: 2 }}>
        <Typography variant="body2" align="center" sx={{ color: '#fff' }}>
          Copyright © {new Date().getFullYear()} Apex Holdings Limited. All Rights Reserved
        </Typography>
      </Grid>
    </Box>
  );
}
