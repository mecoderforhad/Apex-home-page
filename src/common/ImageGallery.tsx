import { useState } from 'react';

import { styled } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ImageListItem from '@mui/material/ImageListItem';

import { itemData } from 'src/_mock/_apex';

import ThumbPlayModal from './Modal/GalleryViewerModal';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

const OverlayIcon = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0,
  transition: 'opacity 0.3s',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: theme.palette.common.white,
}));

const ImageContainer = styled('div')({
  position: 'relative',
  '&:hover .overlay': {
    opacity: 1,
  },
});

export default function ImageGallery() {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <ImageList sx={{ width: 500 }} variant="quilted" cols={4}>
        {itemData.map((item, index) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <ImageContainer>
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
              <OverlayIcon className="overlay">
                <IconButton
                  color="inherit"
                  onClick={() => {
                    setData(itemData);
                    setOpen(true);
                    setCurrentIndex(index);
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </OverlayIcon>
            </ImageContainer>
          </ImageListItem>
        ))}
      </ImageList>
      <ThumbPlayModal
        open={open}
        images={data}
        thumbPlyerClose={() => setOpen(false)}
        initialIndex={currentIndex}
      />
    </>
  );
}
