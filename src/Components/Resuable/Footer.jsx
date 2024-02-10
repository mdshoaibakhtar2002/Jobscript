import { Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box sx={{ padding: '10px', borderTop: '1px solid #ededed', boxShadow: '10px 10px 10px 15px #ededed',display:'flex', justifyContent:'space-evenly'}}>
                <Typography sx={{fontSize:'13px',cursor:'pointer'}}>Copyright © 2024</Typography>
                <Typography sx={{fontSize:'13px',cursor:'pointer'}}>Help Center</Typography>
                <Typography sx={{fontSize:'13px',cursor:'pointer'}}>Terms</Typography>
                <Typography sx={{fontSize:'13px',cursor:'pointer'}}>Privacy Policy</Typography>
        </Box>
    )
}
