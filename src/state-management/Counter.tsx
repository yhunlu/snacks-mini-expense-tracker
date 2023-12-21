import { useReducer } from 'react';
import counterReducer from './reducers/counterReducer';

const Counter = () => {
  //   const [value, setValue] = useState(0);

  const [value, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      Counter ({value})
      <button
        className="btn btn-primary mx-1"
        onClick={() => dispatch({ type: 'INCREMENT' })}
      >
        +
      </button>
      <button
        className="btn btn-primary mx-1"
        onClick={() => dispatch({ type: 'RESET' })}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
