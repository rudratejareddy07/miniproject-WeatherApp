import { useState } from 'react';
import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';
import WeatherApp from './WeatherApp.jsx'
function App() {
  const [count, setCount] = useState(0)
  let styles={
    backgroundColor : "red"
  }

  return (
    <>
    <WeatherApp/>
  
      
    </>
  )
}

export default App
