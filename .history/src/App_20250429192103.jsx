import React, { useState } from 'react';
import Login from './Login';
import Desktop from './Desktop';


function App() {
  const [view, setView] = useState("login"); // login, desktop
  const [fadeClass, setFadeClass] = useState("fade-in");

  const handleLogin = () => {
    // Let Login handle the 2s delay
    setTimeout(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setView("desktop");
        setFadeClass("fade-in");
      }, 500); // fade out login
    }, 2000); // wait for login's loader time
  };

  const handleLogout = () => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setView("login");
      setFadeClass("fade-in");
    }, 500);
  };

  return (
    <div className={`container ${fadeClass}`}>
      {view === "login" && <Login onLogin={handleLogin} />}
      {view === "desktop" && <Desktop onLogout={handleLogout} />}
    </div>
  );
}

export default App;
