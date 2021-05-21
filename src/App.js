import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/cardList/CardList';
import SearchBox from './components/search-box/SearchBox'

function App() {
  const [search, setSearch] = useState('');
  const [monsters, setMonsters] = useState([])


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, [])

  const filteredMonster = monsters.filter(monster =>
    monster.name.toLowerCase()
      .includes(search.toLowerCase()));

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder='search monsters' onChange={handleChange} />
      <CardList monsters={filteredMonster} />
    </div>
  );
}

export default App;
