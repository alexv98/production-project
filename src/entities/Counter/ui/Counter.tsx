import React from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {
  className?: string
}

export const Counter = ({ className }: CounterProps) => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="counter-value">{counterValue}</h1>
      <Button
        onClick={increment}
        data-testid="increment-btn"
      >
        +
      </Button>
      <Button
        onClick={decrement}
        data-testid="decrement-btn"
      >
        -
      </Button>
    </div>
  );
};
