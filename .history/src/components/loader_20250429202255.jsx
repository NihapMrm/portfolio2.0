import "./Loader.css"; // Make sure this file exists

const Loader = () => {
  return (
    <div className="container">
      <div className="wrapper">
        {[...Array(6)].map((_, i) => (
          <div className="loader" key={i}>
            <div className="dot"></div>
          </div>
        ))}
      </div>
  
    </div>
  );
};

export default Loader;
