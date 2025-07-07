import useBatteryStatus from './hooks/useBatteryStatus';
const Battery = () =>{
    const battery = useBatteryStatus();
    if (!battery) {
      return <p>Loading battery status...</p>;
    }
    return(
        <div className="battery">
        <span style={{ width: battery.level+"%", height: "100%" ,backgroundColor: "#fff" }}></span>
        </div>
    )
}
export default Battery;