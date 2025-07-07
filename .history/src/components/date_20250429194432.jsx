const Date = () =>{
      const formatDate = () => {
        return new Date()
          .toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
      };
    
    
      const [date, setDate] = useState(formatDate());
        useEffect(() => {
          const timer = setInterval(() => {
            set(formatTime());
          }, 1000);
      
          return () => clearInterval(timer);
        }, []);
    return(
        <h1>Hi</h1>
    )
}
export default Date;