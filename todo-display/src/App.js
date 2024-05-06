import React, { useState, useEffect } from 'react';
import './css/list-style.css'


function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const url = process.env.REACT_APP_BACKEND_URL
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    const intervalId = setInterval(fetchData, 5000); // Fetch every 5 seconds

    // Cleanup function to clear the interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <p>Loading tasks...</p>
      ) : (
        <div>
          {/* Display your fetched data here using JSX */}
          
          {data && data.length > 0 ? 
          (data.map((item, index) => (
            <div key={index} className='task-item'>
              {/* Access and display each item's properties */}
              <p>Name: {item.title}</p>
              <p>Description: {item.description}</p>
            </div>
          ))) : (
          <div className='no-task'>
            <h2>No task added yet...</h2>
          </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
