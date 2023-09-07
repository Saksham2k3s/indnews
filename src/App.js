import { useState } from 'react';
import './App.css';
import Header from './Component/Header';
import News from './Component/News';

function App() {
  const [mode, SetMode] = useState('light')
  const toggleMode = () => {
    if(mode === 'light'){
      SetMode('dark')
      document.body.style.background  = 'black' 
      document.body.style.color = '#4efc73'
      
      
    }else{
      SetMode('light')
      document.body.style.background  = '#b7ffc6' 
      document.body.style.color = 'black'
      
    }
  }
  return (
<>
<Header mode={mode} toggleMode={toggleMode}/>
<News mode={mode}/>
</>
  );
}

export default App;
