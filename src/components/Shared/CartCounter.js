import React, { useState } from 'react';

const CartCounter = () => {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={increaseCount}>+</button>
      <span>تعداد : {count}</span>
      <button onClick={decreaseCount}>-</button>
    </div>
  );
};

export default CartCounter;