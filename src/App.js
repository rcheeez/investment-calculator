import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
   })

   const isInputValid = userInput.duration >= 1;

    const handleChange = (inputIdentifier, newValue) => {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue
            }
        }
        );
    }

    console.log(userInput);
  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!isInputValid && <p className='center'>Please Enter a Duration greater than 0</p>}
      {isInputValid && <Results input={userInput}/>}
    </>
  );
}

export default App;
