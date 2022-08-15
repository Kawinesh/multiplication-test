
import React from 'react';
import { useSelector } from 'react-redux';
import { NumberButton } from '../NumberButton';
import './App.css';

function App() {
  const numbers = useSelector((state) => state.number.buttons);
  return (
    <div className="App">
      {
        Object.values(numbers).map(
          ({ label, ishighlighted, isSelected }) => {
            return (
              <NumberButton
                key={label}
                label={label}
                ishighlighted={ishighlighted}
                isSelected={isSelected}
              />
            )
          }
        )
      }
    </div>
  );
}

export default App;
