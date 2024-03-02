import {Avatar, Card, CardActions, CardContent, Grid, Link, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { isMobile } from "react-device-detect";

export default function Reviews() {
    return (
        <Grid container mt={5} justifyContent={'center'} display={'flex'} flexDirection={'column'}>
            <Typography sx={{fontSize:'20px', fontWeight:'600'}}>Mentee Reviews</Typography>
            <Grid container display={'flex'} spacing={5} mt={0} sx={{'&.MuiGrid-root':{width:'100%', marginLeft:'0'}, '&.MuiGrid-root >.MuiGrid-item':{padding:isMobile ? '10px 40px':'0px 10px'}}}>
            {/* :<Grid container display={'flex'} spacing={5} mt={0}>} */}
            {/* <Grid container display={'flex'} spacing={5} mt={0} direction={isMobile ?'column':'row'}>/ */}
                <Grid item xs={isMobile?12:3} display={'flex'}>
                    <Card sx={{ width: '100%', padding:'1rem', cursor:'pointer'}} id="card-id">
                        <CardContent sx={{display:'flex', flexDirection:'column', textAlign:'left', alignItems:'start', color:'gray'}}>
                            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/655dc734b7246_frame.svg" style={{height:'2rem'}}/>
                            <Typography sx={{mt:'10px'}}>I am incredibly grateful for the assistance and guidance provided by Kashish in refining my resume. I highly recommend to anyone seeking guidance in resume development.</Typography>
                            <Link sx={{cursor:'pointer'}}>Read more</Link>
                        </CardContent>
                        <CardActions sx={{cursor:'pointer', ml:'5px'}}>
                            <Avatar variant="soft" sx={{height:'1.4rem', width:'1.4rem'}}/>
                            <Typography fontSize={'14px'}>Harry</Typography>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={isMobile?12:3} display={'flex'}>
                    <Card sx={{ width: '100%', padding:'1rem', cursor:'pointer'}} id="card-id">
                        <CardContent sx={{display:'flex', flexDirection:'column', textAlign:'left', alignItems:'start', color:'gray'}}>
                            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/655dc734b7246_frame.svg" style={{height:'2rem'}}/>
                            <Typography sx={{mt:'10px'}}>One of the best consulting sessions I ever had! Thank you, Rishika, for covering all my queries in a very well-structured manner, I truly loved the way you were patiently listening.</Typography>
                            <Link sx={{cursor:'pointer'}}>Read more</Link>
                        </CardContent>
                        <CardActions sx={{cursor:'pointer', ml:'5px'}}>
                            <Avatar variant="soft" sx={{height:'1.4rem', width:'1.4rem'}}/>
                            <Typography fontSize={'14px'}>Avijeet</Typography>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={isMobile?12:3} display={'flex'}>
                    <Card sx={{ width: '100%', padding:'1rem', cursor:'pointer'}} id="card-id">
                        <CardContent sx={{display:'flex', flexDirection:'column', textAlign:'left', alignItems:'start', color:'gray'}}>
                            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/655dc734b7246_frame.svg" style={{height:'2rem'}}/>
                            <Typography sx={{mt:'10px'}}>I had the incredible opportunity to be mentored by an exceptional individual who exceeded all my expectations. Their unwavering support, genuine passion, and deep transformative.</Typography>
                            <Link sx={{cursor:'pointer'}}>Read more</Link>
                        </CardContent>
                        <CardActions sx={{cursor:'pointer', ml:'5px'}}>
                            <Avatar variant="soft" sx={{height:'1.4rem', width:'1.4rem'}}/>
                            <Typography fontSize={'14px'}>Akmal</Typography>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={isMobile?12:3} display={'flex'}>
                    <Card sx={{ width: '100%', padding:'1rem', cursor:'pointer'}} id="card-id">
                        <CardContent sx={{display:'flex', flexDirection:'column', textAlign:'left', alignItems:'start', color:'gray'}}>
                            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/655dc734b7246_frame.svg" style={{height:'2rem'}}/>
                            <Typography sx={{mt:'10px'}}>I have had the pleasure of working with Rakesh as my mentor for interview preparation, CV review teaching style is patient, encouraging, and always tailored.</Typography>
                            <Link sx={{cursor:'pointer'}}>Read more</Link>
                        </CardContent>
                        <CardActions sx={{cursor:'pointer', ml:'5px'}}>
                            <Avatar variant="soft" sx={{height:'1.4rem', width:'1.4rem'}}/>
                            <Typography fontSize={'14px'}>Kashish</Typography>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}
