import { useEffect, useState } from "react";

const CurrentDate = ({taskbar}) => {
  const formatDate = () => {
    return taskbar
      ? new Date().toLocaleDateString('en-US')
      : new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };

  const [currentDate, setCurrentDate] = useState(formatDate());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(formatDate());
    }, 86400000);

    return () => clearInterval(timer);
  }, []);

  return <span>{currentDate}</span>;
};

export default CurrentDate;
