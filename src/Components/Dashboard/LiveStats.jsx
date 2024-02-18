import { Box, Stack, Typography } from "@mui/material";
import CountUp from 'react-countup';

export default function LiveStats() {
  return (
    <Stack width={"100%"} sx={{ background: '#f4f4f4' }} padding={2} margin='4rem 1rem 0 0' borderRadius={'8px'}>
      <Typography sx={{ fontSize: '30px', fontWeight:'600'}}>Our Numbers</Typography>
      <Stack direction={'row'} display={'flex'} justifyContent={'space-evenly'}>
        <Box>
          <Typography sx={{ fontSize: '28px', fontWeight: '600' }}>
            <CountUp start={0} end={1250} duration={20} separator="," />
          </Typography>
          <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Active Users</Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: '28px', fontWeight: '600' }}>          <CountUp start={0} end={689} duration={20} separator="," />
          </Typography>
          <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Placed</Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: '28px', fontWeight: '600' }}><CountUp start={0} end={1600} duration={20} separator="," /></Typography>

          <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Opportunities</Typography>
        </Box><Box>
          <Typography sx={{ fontSize: '28px', fontWeight: '600' }}> <CountUp start={0} end={12} duration={20} separator="," /></Typography>

          <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Brand Collab</Typography>
        </Box><Box>
          <Typography sx={{ fontSize: '28px', fontWeight: '600' }}> <CountUp start={0} end={14} duration={20} separator="," /></Typography>
          <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Organisations</Typography>
        </Box><Box>
          <Typography sx={{ fontSize: '28px', fontWeight: '600' }}><CountUp start={0} end={4} duration={20} separator="," /></Typography>

          <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Countries</Typography>
        </Box>
      </Stack>
    </Stack>
  )
}
