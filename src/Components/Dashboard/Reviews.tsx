import { Avatar, Card, CardActions, CardContent, Grid, Link, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { isMobile } from "react-device-detect";
import test1 from '../../img/testimonial_img_1.jpg'
import test2 from '../../img/testimonial_img_2.jpg'
import test3 from '../../img/testimonial_img_3.jpg'
import test4 from '../../img/testimonial_img_4.jpg'

export default function Reviews() {
    return (
        <Grid container mt={5} justifyContent={'center'} display={'flex'} flexDirection={'column'}>
            <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>Mentee Reviews</Typography>
            <Grid container display={'flex'} spacing={5} mt={2} sx={{ '&.MuiGrid-root': { width: '100%', marginLeft: '0' }, '&.MuiGrid-root >.MuiGrid-item': { padding: isMobile ? '10px 20px' : '0px 10px' } }}>
                <Grid item xs={isMobile ? 12 : 3} display={'flex'} paddingBottom={2}>
                    <Card sx={{ width: '100%', cursor: 'pointer' }} id="card-id">
                        <img src={test1} style={{ height: '18rem', width:'100%'}} />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left', alignItems: 'start', color: 'gray' }}>
                            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/655dc734b7246_frame.svg" style={{ height: '2rem' }} />
                            <Typography sx={{ mt: '10px' }}>I am incredibly grateful for the assistance and guidance provided by Kashish in refining my resume. I highly recommend to anyone seeking guidance in resume development.</Typography>
                            <Link sx={{ cursor: 'pointer' }}>Read more</Link>
                        </CardContent>
                        <CardActions sx={{ cursor: 'pointer', ml: '5px' }}>
                            <Avatar variant="soft" sx={{ height: '1.4rem', width: '1.4rem' }} />
                            <Typography fontSize={'14px'}>Harry</Typography>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={isMobile ? 12 : 3} display={'flex'} paddingBottom={2}>
                    <Card sx={{ width: '100%', cursor: 'pointer' }} id="card-id">
                        <img src={test2} style={{ height: '18rem', width:'100%'}} />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left', alignItems: 'start', color: 'gray' }}>
                            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/655dc734b7246_frame.svg" style={{ height: '2rem' }} />
                            <Typography sx={{ mt: '10px' }}>One of the best consulting sessions I ever had! Thank you, Rishika, for covering all my queries in a very well-structured manner, I truly loved the way you were listening.</Typography>
                            <Link sx={{ cursor: 'pointer' }}>Read more</Link>
                        </CardContent>
                        <CardActions sx={{ cursor: 'pointer', ml: '5px' }}>
                            <Avatar variant="soft" sx={{ height: '1.4rem', width: '1.4rem' }} />
                            <Typography fontSize={'14px'}>Julia</Typography>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={isMobile ? 12 : 3} display={'flex'} paddingBottom={2}>
                    <Card sx={{ width: '100%', cursor: 'pointer' }} id="card-id">
                        <img src={test4} style={{ height: '18rem', width:'100%'}} />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left', alignItems: 'start', color: 'gray' }}>
                            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/655dc734b7246_frame.svg" style={{ height: '2rem' }} />
                            <Typography sx={{ mt: '10px' }}>I had the incredible opportunity to be mentored by an exceptional individual who exceeded all my expectations. Their unwavering, and deep transformative.</Typography>
                            <Link sx={{ cursor: 'pointer' }}>Read more</Link>
                        </CardContent>
                        <CardActions sx={{ cursor: 'pointer', ml: '5px' }}>
                            <Avatar variant="soft" sx={{ height: '1.4rem', width: '1.4rem' }} />
                            <Typography fontSize={'14px'}>Akmal</Typography>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={isMobile ? 12 : 3} display={'flex'} paddingBottom={2}>
                    <Card sx={{ width: '100%', cursor: 'pointer' }} id="card-id">
                        <img src={test3} style={{ height: '18rem', width:'100%'}} />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left', alignItems: 'start', color: 'gray' }}>
                            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/655dc734b7246_frame.svg" style={{ height: '2rem' }} />
                            <Typography sx={{ mt: '10px' }}>I have had the pleasure of working with Rakesh as my mentor for interview preparation, CV review teaching style is patient, encouraging, and always tailored.</Typography>
                            <Link sx={{ cursor: 'pointer' }}>Read more</Link>
                        </CardContent>
                        <CardActions sx={{ cursor: 'pointer', ml: '5px' }}>
                            <Avatar variant="soft" sx={{ height: '1.4rem', width: '1.4rem' }} />
                            <Typography fontSize={'14px'}>Kashish</Typography>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}
