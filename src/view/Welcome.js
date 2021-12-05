import React, { useState, useEffect } from 'react'

const Welcome = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  })

    return (
      <div>
        <h1 > The Welcome Page </h1>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
};

export default Welcome;