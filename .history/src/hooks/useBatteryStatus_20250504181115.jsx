import { useState, useEffect } from "react";

const useBatteryStatus = () => {
  const [batteryStatus, setBatteryStatus] = useState(null);

  useEffect(() => {
    let battery = null;

    const updateBatteryStatus = () => {
      if (battery) {
        setBatteryStatus({
          level: Math.round(battery.level * 100),
          charging: battery.charging,
        });
      }
    };

    if ("getBattery" in navigator) {
      navigator.getBattery().then((bat) => {
        battery = bat;
        updateBatteryStatus();
        battery.addEventListener("levelchange", updateBatteryStatus);
        battery.addEventListener("chargingchange", updateBatteryStatus);
      });
    }

    return () => {
      if (battery) {
        battery.removeEventListener("levelchange", updateBatteryStatus);
        battery.removeEventListener("chargingchange", updateBatteryStatus);
      }
    };
  }, []);

  return batteryStatus;
};

export default useBatteryStatus;
