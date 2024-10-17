import { Grid, Button, styled } from '@mui/material';

export const QuestionLevelButton = styled(Button)({
  background: '#009EFA',
  borderRadius: '5px',
  color: 'white',
  textTransform: 'capitalize',
  width: '100%',
  '&:hover': {
    background: '#009EFA !important',
  },
});
export const QuestionSequenceButton = styled(Button)({
  background: '#57CE66',
  borderRadius: '5px',
  color: 'white',
  textTransform: 'capitalize',
  width: '100%',
  '&:hover': {
    background: '#57CE66 !important',
  },
});
export const UpdateButton = styled(Button)({
  background: '#57CE66',
  borderRadius: '5px',
  color: 'white',
  textTransform: 'capitalize',
  width: '100%',
  '&:hover': {
    background: '#57CE66 !important',
  },
});

export const MainGrid = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '5px',
});

export const BlurredImageOverlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: '#ffffff',
  fontWeight: 'bold',
  fontSize: '16px',
});

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: '#F3F3F4',
  boxShadow: '1px 2px 7px rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
  outline: 0,
  padding: '20px',
};
