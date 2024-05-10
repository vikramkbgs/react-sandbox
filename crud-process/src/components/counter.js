import React, { useEffect, useState } from 'react';

function Counter() {
    // Step 1: Define a state variable to hold the count
    const [count, setCount] = useState(0);


    // Step 2: Implement a function to increment the count
    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    useEffect( () =>{
        setCount(10);
    }, [1]   );

    // Step 3: Update the JSX to display the count and add a button to increment it
    return (
        <div>
            <div>
                <h3>{count}</h3> {/* Display the count */}
            </div>
            <div>
                <button onClick={incrementCount}>Increment</button> {/* Button to increment the count */}
            </div>
        </div>
    );
}

export default Counter;
