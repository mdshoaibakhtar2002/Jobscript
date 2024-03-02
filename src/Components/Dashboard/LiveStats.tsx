import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import CountUp from 'react-countup';
import { isMobile } from "react-device-detect";

export default function LiveStats() {
  return (
    <Stack width={"100%"} sx={{ background: '#f4f4f4' }} padding={2} margin={isMobile ? '1rem 0 0 0':'4rem 0 0 0'} borderRadius={'8px'}>
      <Typography sx={{ fontSize: isMobile ?'3vw' :'2vw', fontWeight:'600'}}>Our Numbers</Typography>
      <Stack direction={'row'} display={'flex'} justifyContent={'space-evenly'}>
        <Box>
          <Typography sx={{ fontSize: isMobile ?'3vw' :'1.8vw', fontWeight: '600' }}>
            <CountUp start={0} end={1250} duration={20} separator="," />
          </Typography>
          <Typography sx={{ fontSize: isMobile ? '2vw' :'1vw', fontWeight: '600' }}>Active Users</Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: isMobile ?'3vw' :'1.8vw', fontWeight: '600' }}>
            <CountUp start={0} end={689} duration={20} separator="," />
          </Typography>
          <Typography sx={{ fontSize: '1vw', fontWeight: '600' }}>Placed</Typography>
        </Box>
        <Box>
        
          <Typography sx={{ fontSize: isMobile ?'3vw' :'1.8vw', fontWeight: '600' }}><CountUp start={0} end={1600} duration={20} separator="," /></Typography>

          <Typography sx={{ fontSize: '1vw', fontWeight: '600' }}>Opportunities</Typography>
        </Box><Box>
          
          <Typography sx={{ fontSize: isMobile ?'3vw' :'1.8vw', fontWeight: '600' }}><CountUp start={0} end={12} duration={20} separator="," /></Typography>

          <Typography sx={{ fontSize: '1vw', fontWeight: '600' }}>Brand Collab</Typography>
        </Box><Box>
        
          <Typography sx={{ fontSize: isMobile ?'3vw' :'1.8vw', fontWeight: '600' }}> <CountUp start={0} end={14} duration={20} separator="," /></Typography>
          <Typography sx={{ fontSize: '1vw', fontWeight: '600' }}>Organisations</Typography>
        </Box><Box>
        
          <Typography sx={{ fontSize: isMobile ?'3vw' :'1.8vw', fontWeight: '600' }}><CountUp start={0} end={4} duration={20} separator="," /></Typography>

          <Typography sx={{ fontSize: '1vw', fontWeight: '600' }}>Countries</Typography>
        </Box>
      </Stack>
    </Stack>
  )
}
