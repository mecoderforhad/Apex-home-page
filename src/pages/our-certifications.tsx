import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

import { Box, Card, CardMedia, Typography, CardContent } from '@mui/material';

import { certifications } from 'src/_mock/_apex';

SwiperCore.use([Autoplay, FreeMode, Pagination]);

export default function CertificationSwiper(){
  
  return (
    <Box sx={{ textAlign: 'center', py: 4 }}>
      <Typography variant="h2" sx={{ mb: 2 }} my={5}>
        <span style={{ color: '#0069c0' }}>OUR</span> CERTIFICATIONS
      </Typography>
      <Swiper
        spaceBetween={0}
        slidesPerView={5}
        freeMode
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        style={{ padding: '40px 0px' }}
      >
        {certifications.map((cert) => (
          <SwiperSlide key={cert.id} style={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ borderRadius: '0px', width: '100%', mx: 1}}>
              <CardMedia
                component="img"
                height="180"
                width="180"
                image={cert.url}
                alt={cert.alt}
                sx={{ objectFit: 'contain' }}
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
                  {cert.alt}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
