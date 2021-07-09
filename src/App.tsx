import React, {useState} from 'react';
import data from './data';
import ButtonComponent from './components/Button';
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [state, setState] = useState<any>({});

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const getResult = () => {
    getPromise().then((response) => setState(response))
    setIsLoading(false);
  }

  const getPromise = () => {    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      },3000)
    })
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ButtonComponent onClick={getResult} placeholder={'Get data'}/>
      {JSON.stringify(state)}
    </>
  )
}

export default App;