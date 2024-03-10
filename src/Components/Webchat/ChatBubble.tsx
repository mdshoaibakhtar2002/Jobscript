import { Stack } from "@mui/material"
import React, { useState } from "react"
import bot from "../../img/chatBubble.png"
import ChatUI from "./ChatUI"
import { isMobile } from 'react-device-detect';

const ChatBubble = () =>{
    const [showChat, setShowChat] = useState('none')
    return(
        <Stack position={'fixed'} bottom={'10px'} right={isMobile ?'0' :'10px'} paddingRight={0} width={isMobile ? '100%' :'24rem'} height={showChat === 'block' ? (isMobile ? '98.8%':'75%'):'4rem'} alignItems={'end'} sx={{transition:'opacity 3s ease-in-out', zIndex:isMobile?9999:'0'}}>
            <ChatUI showChat = {showChat} setShowChat = {setShowChat}/>
            <img src={bot} style={{width:'4rem', height:'4rem', cursor:'pointer', display:showChat === 'block' ? 'none' : 'block'}} onClick={() => setShowChat('block')}/>
        </Stack>
    )
}

export default ChatBubble