import { useState, useEffect } from "react";

interface BatteryStatus {
  level: number;
  charging: boolean;
}

const useBatteryStatus = (): BatteryStatus | null => {
  const [batteryStatus, setBatteryStatus] = useState<BatteryStatus | null>(null);

  useEffect(() => {
    let battery: any = null;

    const updateBatteryStatus = () => {
      if (battery) {
        setBatteryStatus({
          level: Math.round(battery.level * 100),
          charging: battery.charging,
        });
      }
    };

    if (navigator.getBattery) {
      navigator.getBattery().then((bat: any) => {
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