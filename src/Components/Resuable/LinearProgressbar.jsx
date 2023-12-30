import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearIndeterminate() {
  return (
    <Box sx={{ width: '100%', position:"fixed" }}>
      <LinearProgress color='inherit' sx={{color:"#ff5758"}}/>
    </Box>
  );
}