import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import ApexSlider from 'src/common/ApexSlider';
import VideoGallery from 'src/common/VideoGallery';

import AboutUs from './about-us';
import KeyStrengths from './key-strengths';
import BusinessSegments from './our-business';
import CertificationSwiper from './our-certifications';


// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`Apex Holding Limited - ${CONFIG.appName}`}</title>
        <meta
          name="description"
          content="Apex Holding Limited"
        />
        <meta name="keywords" content="Apex Holding Limited" />
      </Helmet>
      <ApexSlider />
      <AboutUs />
      <BusinessSegments />
      <KeyStrengths />
      <VideoGallery />
      <CertificationSwiper />
    </>
  );
}
