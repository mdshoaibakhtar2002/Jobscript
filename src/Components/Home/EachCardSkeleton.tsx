import React from "react";
import { Stack, Skeleton } from '@mui/material';
import { isMobile } from "react-device-detect";

const EachCardSkeleton = () => {
    return (
        <Stack border={'1px solid rgb(237, 237, 237)'} padding={3} borderRadius={'.4rem'} boxShadow={'2px 2px 6px 3px #ebebeb'} sx={{ cursor: 'pointer' }} mt={4}>
            <Stack direction={'row'} spacing={2}>
                <Skeleton variant="circular" width={isMobile ? '18%':'10%'} height={40} sx={{ marginTop: '5px !important' }} />
                <Stack direction={'row'} width={'100%'} display={'flex'} justifyContent={'space-between'} alignItems={'start'}>
                    <Stack direction={'column'} width={'60%'}>
                        <Skeleton variant="text" sx={{ fontSize: '1.4rem' }} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    </Stack>
                    <Stack direction={'column'} width={'20%'}>
                        <Skeleton variant="text" sx={{ fontSize: '1.4rem' }} />
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction={'row'} spacing={2} width={'75%'}>
                <Skeleton variant="text" sx={{ fontSize: '2rem', borderRadius: '12px' }} width={'25%'} />
                <Skeleton variant="text" sx={{ fontSize: '2rem', borderRadius: '12px' }} width={'35%'} />
                <Skeleton variant="text" sx={{ fontSize: '2rem', borderRadius: '12px' }} width={'40%'} />
                <Skeleton variant="text" sx={{ fontSize: '2rem', borderRadius: '12px' }} width={'20%'} />
            </Stack>
            <Stack direction={'column'} width={'100%'} mt={1}>
                <Skeleton variant="text" sx={{ fontSize: '1.2rem' }} width={'100%'} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'100%'} />
            </Stack>
            <Stack direction={'column'} width={'100%'} mt={2}>
                <Skeleton variant="text" sx={{ fontSize: '1.2rem' }} width={'75%'} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'50%'} />
            </Stack>

            <Stack direction={'column'} width={'100%'} display={'flex'} justifyContent={'end'} alignItems={'end'} mt={1}>
                <Skeleton variant="rounded" width={'30%'} height={35} />
            </Stack>
        </Stack>
    )
}
export default EachCardSkeleton;