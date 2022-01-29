import React, {useState} from 'react';
import Index from './components/Index';
import { Link } from "react-router-dom";
import Loader from './components/Loader/Loader';


function App() {
  const [isLoaded, setIsLoaded] = useState(true);
  const handleIsLoadedToggle = () => {
    setIsLoaded(currentIsLoaded => !currentIsLoaded)
  };

  return (
    <div className="App">
    <Index/>
    <button onClick={handleIsLoadedToggle}>
        Toggle LoadSpinner
      </button>
      {isLoaded && <Loader/>}
    </div>
  )
}

export default App
