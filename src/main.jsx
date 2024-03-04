import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/Store/myAppStore.jsx'
import ChatBubble from './Components/Webchat/ChatBubble.tsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store = {store}>
    <App />
    
    <ChatBubble/>
    </Provider>
  </React.StrictMode>,
)
