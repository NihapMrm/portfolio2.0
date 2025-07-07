import { useEffect, useState } from "react";

const CurrentDate = () => {
  const formatDate = () => {
    return new Date()
      .toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
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
