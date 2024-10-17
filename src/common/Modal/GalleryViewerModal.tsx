import React, { useState, useEffect } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Modal, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { style } from '../../styles/modal-image-view/index';

interface Image {
  img: any;
}

interface ThumbPlayModalProps {
  open: boolean;
  images: Image[];
  thumbPlyerClose: () => void;
  initialIndex: number;
}

export default function ThumbPlayModal({
  open,
  images,
  thumbPlyerClose,
  initialIndex,
}: ThumbPlayModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (open) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setCurrentIndex(initialIndex);
        setIsTransitioning(false);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [open, initialIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Modal
      open={open}
      onClose={thumbPlyerClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '#FFFFFF',
            height: '50px',
          }}
        >
          <Box>
            <h2
              style={{
                fontWeight: 700,
                fontSize: '16px',
                color: '#000000',
                paddingLeft: '9px',
              }}
            >
              View
            </h2>
          </Box>
          <Box
            style={{
              width: '50px',
              height: '50px',
              color: 'rgba(22, 31, 41, 0.5)',
            }}
          >
            <CloseIcon
              onClick={thumbPlyerClose}
              sx={{
                width: '70%',
                marginRight: '7px',
                height: '100%',

                '&:hover': {
                  color: 'white',
                  backgroundColor: 'red',
                  alignItems: 'center',
                  width: '100%',
                  transition: '0.5s',
                  height: '100%',
                },
              }}
            />
          </Box>
        </Box>
        {images && images.length > 0 ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              width: 800,
              height: 500,
            }}
          >
            <IconButton
              sx={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1,
                background: 'rgba(255, 255, 255, 0.7)',
              }}
              onClick={handlePrev}
            >
              <ArrowBackIosIcon />
            </IconButton>
            {!isTransitioning && (
              <img
                height="100%"
                width="100%"
                src={images?.[currentIndex]?.img || ''}
                alt="post thumbnail"
                style={{ objectFit: 'cover' }}
              />
            )}
            <IconButton
              sx={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1,
                background: 'rgba(255, 255, 255, 0.7)',
              }}
              onClick={handleNext}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        ) : (
          <Box
            sx={{
              mt: 4,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 400,
            }}
          >
            <p>No images available</p>
          </Box>
        )}
      </Box>
    </Modal>
  );
}
