import { useEffect, useState } from "react";

const time = () =>{
    const formatTime = () => {
        return new Date()
          .toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
          .replace(/AM|PM/gi, '')
          .trim();
      };

        const [time, setTime] = useState(formatTime());

         useEffect(() => {
            const timer = setInterval(() => {
              setTime(formatTime());
              
            }, 1000);
        
            return () => clearInterval(timer);
          }, []);
    return(
        <h1>Hi</h1>
    )
}
export default time;