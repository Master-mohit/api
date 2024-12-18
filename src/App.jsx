import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const counhandler = () => {
    setCount(count +1 )
  }

  useEffect(() => {
    console.log(`Count is now: ${count}`);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={counhandler}>Increment</button>
    </div>
  );
};

export default App;
