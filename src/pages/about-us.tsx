import { Helmet } from 'react-helmet-async';

import { Box, Grid, Container, Typography } from '@mui/material';

import { CONFIG } from 'src/config-global';
import ImageGallery from 'src/common/ImageGallery';

export default function Page() {
  return (<>
    <Helmet>
        <title> {`About us - ${CONFIG.appName}`}</title>
    </Helmet>
    <Container maxWidth="lg">
      <Box textAlign="center" my={2}>
        <Typography variant="h2" component="h1" fontWeight="bold">
          ABOUT <span style={{ color: '#0056b3' }}>US</span>
        </Typography>
      </Box>
      <Grid container my={5}>
        <Grid item lg={5.5} mx={2} sx={{ height: '350px' }}>
          <Box my={2}>
            <Typography variant="h5" component="h2" fontWeight="bold" mb={2}>
              WHO <span style={{ color: '#0056b3' }}>WE</span> ARE
            </Typography>
            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
              Apex Holdings Limited (AHL) is a holding company for the management of a wide range of
              manufacturing and export-oriented enterprises, ranging from Frozen & Convenience
              Foods, Textiles & Apparels, Chemicals & Agro businesses. The company was formed and
              registered in Bangladesh in 1998. The sponsors of AHL had set up its first
              export-oriented manufacturing enterprise in 1980 and have ever since grown into a
              sizable group of companies. As the number of companies under the management increased,
              the need for a management company to facilitate coordination and to maintain control
              over the individual company became necessary.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          lg={5.5}
          mx={2}
          sx={{
            height: '350px',
            overflowY: 'scroll',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            my: 2,
          }}
        >
          <ImageGallery />
        </Grid>
      </Grid>
    </Container>
    </>
  );
}
