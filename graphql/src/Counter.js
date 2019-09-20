import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <span>You clicked {count} times</span>
            <Button variant="outline-primary"
                onClick={() => setCount(count+1)}>Click</Button>
        </div>
    );
}

export default Counter;