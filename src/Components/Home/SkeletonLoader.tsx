import React from 'react'
import { Stack, Grid, Skeleton} from '@mui/material';
import EachCardSkeleton from './EachCardSkeleton';

const SkeletonLoader = () => {
    return (
        <Stack direction={'row'}>
            <Grid container mt={0}>
                <Grid item xs={5} paddingTop={'0rem !important'} height={'100vh'} overflow={'auto'} id='abc'>
                    <EachCardSkeleton />
                    <EachCardSkeleton />
                    <EachCardSkeleton />
                </Grid>
                <Grid item xs={7} paddingTop={'0rem !important'} paddingLeft={4}>
                    <Stack border={'1px solid rgb(237, 237, 237)'} padding={3} borderRadius={'.4rem'} boxShadow={'2px 2px 6px 3px #ebebeb'} sx={{ cursor: 'pointer' }} mt={4}>
                        <Stack direction={'row'} spacing={2}>
                            <Skeleton variant="circular" width={'6vw'} height={75} sx={{ marginTop: '5px !important' }} />
                            <Stack direction={'row'} width={'100%'} display={'flex'} justifyContent={'space-between'} alignItems={'start'}>
                                <Stack direction={'column'} width={'60%'}>
                                    <Skeleton variant="text" sx={{ fontSize: '1.4rem' }} />
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                </Stack>
                                <Stack direction={'column'} width={'25%'} mt={1}>
                                    <Skeleton variant="rounded" width={'100%'} height={35}/>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack direction={'row'} spacing={2} width={'75%'} mt={3}>
                            <Skeleton variant="rounded" sx={{ fontSize: '2rem', borderRadius:'13px'}} width={'25%'} />
                            <Skeleton variant="rounded" sx={{ fontSize: '2rem', borderRadius:'13px'}} width={'35%'} />
                            <Skeleton variant="rounded" sx={{ fontSize: '2rem', borderRadius:'13px'}} width={'25%'} />
                            <Skeleton variant="rounded" sx={{ fontSize: '2rem', borderRadius:'13px'}} width={'15%'} />
                        </Stack>
                        <Stack direction={'column'} width={'100%'} mt={2}>
                            <Skeleton variant="text" sx={{ fontSize: '1.2rem' }} width={'100%'} />
                            <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'100%'} />
                        </Stack>
                        <Stack direction={'column'} width={'100%'} mt={2}>
                            <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'35%'} />
                        </Stack>
                        <Stack direction={'column'} width={'100%'}>
                            <Skeleton variant="text" sx={{ fontSize: '1.4rem' }} width={'100%'} />
                            <Skeleton variant="text" sx={{ fontSize: '1.4rem' }} width={'100%'} />
                            <Skeleton variant="text" sx={{ fontSize: '1.4rem' }} width={'100%'} />
                            <Skeleton variant="text" sx={{ fontSize: '1.4rem' }} width={'100%'} />
                            <Skeleton variant="text" sx={{ fontSize: '1.4rem' }} width={'100%'} />
                            <Skeleton variant="text" sx={{ fontSize: '1.4rem' }} width={'100%'} />
                        </Stack>
                        <Stack direction={'column'} width={'100%'} mt={2}>
                            <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'35%'} />
                        </Stack>
                        <Stack direction={'column'} width={'100%'}>
                            <Skeleton variant="text" sx={{ fontSize: '1.4rem' }} width={'100%'} />
                            <Skeleton variant="text" sx={{ fontSize: '1.4rem' }} width={'100%'} />
                            <Skeleton variant="text" sx={{ fontSize: '1.4rem' }} width={'100%'} />
                            <Skeleton variant="text" sx={{ fontSize: '1.4rem' }} width={'100%'} />
                            <Skeleton variant="text" sx={{ fontSize: '1.4rem' }} width={'100%'} />
                            <Skeleton variant="text" sx={{ fontSize: '1.4rem' }} width={'100%'} />
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>


            {/* <Stack>
                <EachCardSkeleton/>
                <EachCardSkeleton/>
                <EachCardSkeleton/>
            </Stack>
            <Stack>
                <EachCardSkeleton/>
                <EachCardSkeleton/>
                <EachCardSkeleton/>
            </Stack> */}
        </Stack>
    )
}
export default SkeletonLoader;