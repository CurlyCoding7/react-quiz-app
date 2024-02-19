import React, { useEffect, useState } from 'react'

const QuesTimer = ({timeout, onTimeout}) => {
    const [remainingTime, setReamainingTime] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);
    
      return () => {
        clearTimeout(timer)
      }
    }, [timeout, onTimeout])
    
    useEffect(() => {
        const interval = setInterval(() => {
            setReamainingTime((prevTime) => prevTime - 100)
        }, 100);
    
      return () => {
        clearInterval(interval)
      }
    }, [])
    
  return (
    <progress id='question-time' max={timeout} value={remainingTime}/>
  )
}

export default QuesTimer