// CustomImageSlider.jsx
// eslint-disable-next-line import/no-extraneous-dependencies
import SwiperCore from 'swiper';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Typewriter } from 'react-simple-typewriter'; 
// eslint-disable-next-line import/no-extraneous-dependencies
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { Box, Typography } from '@mui/material';

// Import Swiper styles
// eslint-disable-next-line import/no-extraneous-dependencies
import 'swiper/css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'swiper/css/pagination';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'swiper/css/navigation';

const images = [
  { url: 'https://apexholdings.com/img/slider/slider_banner_003.jpg', caption: 'Apex Holding Limited.' },
  { url: 'https://apexholdings.com/img/slider/food_collage.jpg', caption: 'A Standard in the Food Business.' },
  { url: 'https://apexholdings.com/img/slider/textile_collage.jpg', caption: 'A Pioneer in the Textile Business.' },
  { url: 'https://apexholdings.com/img/slider/agri_collage.jpg', caption: 'An Innovator in the Agricultural Business.' },
  { url: 'https://apexholdings.com/img/slider/multi_collage_2.jpg', caption: 'Expanding Our diversified Businesses.' },
];

// Initialize Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function ApexSlider() {
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 8500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        style={{ width: '100%', height: '100%' }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                backgroundImage: `url(${image.url})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: { xs: '300px', md: '500px' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                textAlign: 'center',
              }}
            >
               <Typography
                variant="h4"
                component="div"
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  padding: '10px 20px',
                  borderRadius: '10px',
                }}
              >
                <Typewriter
                  words={[image.caption]} // Type out the caption
                  loop={false} // You can set it to true to loop the animation
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
