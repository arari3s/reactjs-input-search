import './App.css';
import Select from 'react-select'
import { useEffect, useState } from 'react';

function App() {
  const [datas, setDatas] = useState([])
  
  const getBerries = async()=>{
    const berries = await fetch("https://pokeapi.co/api/v2/berry")
    const value = await berries.json()
    let result = value.results.map(data => {
      return {
        label : data.name,
        value : data.name
      }
    })
    setDatas(result.sort((a, b) => a.label.localeCompare(b.label)))
    
  }

  useEffect(()=>{
    getBerries()
  },[])

  return (
    <div className="App">
      <Select options={datas}></Select>
    </div>
  );
}

export default App;
