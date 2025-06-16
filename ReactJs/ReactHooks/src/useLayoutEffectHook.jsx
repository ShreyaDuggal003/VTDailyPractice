import React, { useEffect, useLayoutEffect } from 'react'

function UseLayoutEffectHook() {

    useEffect(() => {
        console.log("Message from useEffect")
    }, [])

    useLayoutEffect(() => {
        console.log("Message from uselayoutEffect")
    }, [])

    return (
        <>
         <h2>Test Message</h2>
        </>
    )
}

export default UseLayoutEffectHook
