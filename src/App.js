import React, { useState,useEffect } from 'react';
import Loading from './components/globals/Loading';
import PageIndex from "./pages/PageIndex";

function App() {
  const loadingTime = 3000;
  const [loading, setLoading] = useState(true);

  useEffect(() => 
  {
    setTimeout(() => {
      setLoading(false);
    }, loadingTime);

  }, []);

  return (
    <>
    {
      loading 
      ? (<Loading />) 
      : (<PageIndex />)
    }
    </>
  );
}

export default App;
