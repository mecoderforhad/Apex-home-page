import { Helmet } from 'react-helmet-async';

import { Grid, Card, useTheme, Typography, CardContent } from '@mui/material';
import { Factory, Restaurant, AccountTree, EnergySavingsLeaf } from '@mui/icons-material';

import { CONFIG } from 'src/config-global';

const BusinessSegments = () => {
  const theme = useTheme();

  const segments = [
    { title: 'Our Food Division', icon: <Restaurant fontSize="large" /> },
    { title: 'Our Textile Division', icon: <Factory fontSize="large" /> },
    { title: 'Our Agro Division', icon: <EnergySavingsLeaf fontSize="large" /> },
    { title: 'Our Diversified Division', icon: <AccountTree fontSize="large" /> },
  ];

  return (
    <>
    <Helmet>
        <title> {`About us - ${CONFIG.appName}`}</title>
    </Helmet>
    <div
      style={{
        padding: '40px 20px',
        backgroundColor: theme.palette.mode === 'dark' ? '#2e3b55' : '#e8e8e8',
      }}
    >
      <Typography variant="h2" align="center" gutterBottom color={theme.palette.text.primary} my={5}>
        OUR <span style={{ color: '#0056b3' }}>BUSINESS</span> SEGMENTS
      </Typography>
      <Grid container spacing={4} justifyContent="center" my={5}>
        {segments.map((segment, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                textAlign: 'center',
                padding: '20px',
                height: '100%',
                backgroundColor: theme.palette.background.paper,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)', // Slightly enlarge the card on hover
                },
              }}
            >
              <CardContent
                sx={{
                  padding: '20px',
                  transition: 'transform 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    transform: 'scale(1)',
                    transition: 'transform 0.3s ease',
                  }}
                  className="icon"
                >
                  {segment.icon}
                </div>
                <Typography
                  variant="h6"
                  style={{
                    marginTop: '10px',
                    transition: 'transform 0.3s ease',
                  }}
                  color={theme.palette.text.primary}
                >
                  {segment.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
    </>
  );
};

export default BusinessSegments;
