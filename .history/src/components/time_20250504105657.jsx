import { useEffect, useState } from "react";

const Time = (taskbar) => {
  const formatTime = () => {
    const timeString = new Date()
      .toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    return taskbar
      ? timeString
      : timeString.replace(/AM|PM/gi, '').trim();
  };

  const [currentTime, setCurrentTime] = useState(formatTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(formatTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <span>{currentTime}</span>;
};

export default Time;
