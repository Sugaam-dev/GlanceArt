

import React from "react";
// Import the new router component
import AppRouter from "./RouteFiles/Router.jsx";
// Import the main layout CSS file
import './App.css'; 

function App() {
  return (
    // App.jsx now just calls the router
    <AppRouter />
  );
}

export default App;
