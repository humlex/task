import React, {useState} from 'react';
import data from './data';
import ButtonComponent from './components/Button';
import TableComponent from './components/Table';
import LoopIcon from '@material-ui/icons/Loop';
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [state, setState] = useState<any>({});

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const getResult = () => {
    setIsLoading(true);
    getPromise().then((response) => setState(response))
  }

  const getPromise = () => {    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data.rates);
        setIsLoading(false);
      },3000)
    })
  }

  return (
    <>
      <ButtonComponent onClick={getResult} placeholder={'Get data'} disabled={false}/>
      {console.log(state)}
      {isLoading ? <LoopIcon/> : null}
      <TableComponent data={state}/>
    </>
  )
}

export default App;