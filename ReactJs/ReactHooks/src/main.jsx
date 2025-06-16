import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import UseStateHook from './useStateHook.jsx'
import UseEffectHook from './UseEffectHook.jsx'
import UseMemoHook from './useMemoHook.jsx'
import UseCallbackHook from './useCallbackHook.jsx'
import UseLayoutEffectHook from './useLayoutEffectHook.jsx'
import CustomHook from './CustomHook/customHook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <UseStateHook /> */}
    {/* <UseEffectHook/> */}
    {/* <UseMemoHook/> */}
    {/* <UseCallbackHook/> */}
    {/* <UseLayoutEffectHook/> */}
    <CustomHook/>
  </StrictMode>,
)
