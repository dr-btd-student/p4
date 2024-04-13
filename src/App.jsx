import { React, useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import Example from './components/Example';
import States from './components/States';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      Hello World!
      <Header/>
      <Example/>
      <States/>
    </>
  );
}

export default App;
