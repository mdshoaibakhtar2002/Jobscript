import { Link, Stack, Typography } from '@mui/material'
import React from 'react'

const Thread = ({userInput, send}) => {
    return (
        <Stack sx={{
            '.MuiTypography-root': {
                border: '1px solid #e9e9e9',
                borderRadius: '1rem',
                padding: '2px 10px',
                background: '#eaeaea',
                width:'fit-content',
                marginTop: '4px',
                fontSize:'14px',
                maxWidth:'18rem'
            }
        }}>
            <Stack>
                <Typography align='left'>Hey, How can i assist you?</Typography>
            </Stack>
            <Stack alignItems={'end'}>
                <Typography align='right'>I'm looking for a job opportunity.</Typography>
            </Stack>
            <Stack>
                <Typography align='left'>We appreciate your willingness to assist, but unfortunately, we're currently experiencing technical issues that prevent us from addressing your job-related concerns. Please reach out to us via email at <Link padding={'0px !important'} sx={{cursor:'pointer'}}>help@jobscript.com</Link> <br/>Thank you for your understanding.</Typography>
            </Stack>
        </Stack>
    )
}

export default Thread