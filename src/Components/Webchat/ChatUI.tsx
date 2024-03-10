import React, { useState } from "react"
import { Box, Divider, Grid, IconButton, Stack, TextField, Typography } from "@mui/material"
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Thread from "./Thread";
import { isMobile } from "react-device-detect";

const ChatUI = ({ showChat, setShowChat }) => {
    const [userInput, setUserInput] = useState('')
    const [send, setSend] = useState(false)
    return (
        <Grid container width={'100%'} height={isMobile ? '100%':'97.1%'}  sx={{ display: showChat, background: '#ff5758', color: 'white', borderRadius: '.5rem', transition: 'display 1s ease-in-out' }}>
            <Grid item xs={12} display={'flex'} flexDirection={'row'} padding={2} justifyContent={'space-between'}>
                <Typography>Chat with Zinnie</Typography>
                <IconButton sx={{ padding: '0' }} onClick={() => setShowChat('none')}>
                    <ExpandMoreRoundedIcon sx={{ fill: 'white' }} />
                </IconButton>
            </Grid>
            <Divider variant="fullWidth" sx={{ background: 'white', width: '100%' }} />
            <Grid item xs={12} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} sx={{ background: 'white', margin: '0px', height: '94%', color: 'gray', padding: '12px 16px' }}>
                <Stack>
                    <Thread userInput={userInput} send={send}/>
                </Stack>
                <Stack direction={'row'}>
                    <TextField placeholder="Enter your message..." size="small" fullWidth sx={{'.MuiOutlinedInput-root':{ borderRadius:'1rem'}}} onChange={(e) => setUserInput(e.target.value)}/>
                    <IconButton sx={{paddingRight:'0px'}} onClick={()=> setSend(true)}>
                        <SendRoundedIcon/>
                    </IconButton>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default ChatUI