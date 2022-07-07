import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export const Spinner = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  );
};
