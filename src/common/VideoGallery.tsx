// eslint-disable-next-line import/no-extraneous-dependencies
import YouTube from 'react-youtube';
import React, { useState } from 'react';

import { PlayArrow } from '@mui/icons-material';
import {
  Grid,
  Card,
  Dialog,
  useTheme,
  Typography,
  IconButton,
  CardContent,
  DialogContent,
} from '@mui/material';

import { segments } from 'src/_mock/_apex';

export default function VideoGallery() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleClickOpen = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideo(null);
  };

   // YouTube video options
   const youtubeOpts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1, // Auto-play the video
    },
  };

  return (
    <div
      style={{
        padding: '40px 20px',
        backgroundColor: theme.palette.mode === 'dark' ? '#2e3b55' : '#e8e8e8',
        margin: '40px 0px',
      }}
    >
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        color={theme.palette.text.primary}
        my={5}
      >
        <span style={{ color: '#0056b3' }}>VIDEO</span> GALLERY
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
                  transform: 'scale(1.05)',
                },
              }}
              onClick={() => handleClickOpen(segment.videoUrl)}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '150px',
                    backgroundColor: '#000',
                  }}
                >
                  <img
                    src={segment.posterUrl}
                    alt={segment.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      color: '#fff',
                      cursor: "pointer"
                    }}
                  >
                    <PlayArrow fontSize="large" />
                  </Typography>
                </div>
                <Typography
                  variant="h6"
                  style={{ marginTop: '10px' }}
                  color={theme.palette.text.primary}
                >
                  {segment.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent>
          {selectedVideo && (
            <YouTube
              videoId={selectedVideo}
              opts={youtubeOpts}
              onError={(event: any) => {
                console.error('Error playing video:', event);
                alert('Error playing video. Please try a different one.');
              }}
            />
          )}
        </DialogContent>
        <IconButton
          style={{
            position: 'absolute',
            top: '20px',
            right: '30px',
            color: '#fff',
            fontSize: '40px',
          }}
          onClick={handleClose}
        >
          x
        </IconButton>
      </Dialog>
    </div>
  );
}
