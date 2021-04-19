import './App.css';
import Meal from './components/Meal';
import menu from './data';
import {useState} from 'react';

function App() {
  const[items, SetItems] = useState(menu);

  const handleFilter = (e) =>{
    let filterValue = e.target.getAttribute('data-value');
    let items;
    if(filterValue === "all"){
      items = menu;
    }else{
      items = menu.filter(meal => meal.category === filterValue.toLowerCase());
    }
    SetItems(items);
  }

  return (
    <div className="App">
      <h1>Our Menu</h1>
      <hr />
      <div className="filter-section">
        <div className="filter" data-value="all" onClick={handleFilter}>All</div>
        <div className="filter" data-value="breakfast" onClick={handleFilter} >Breakfast</div>
        <div className="filter" data-value="lunch" onClick={handleFilter}>Lunch</div>
        <div className="filter" data-value="shakes" onClick={handleFilter}>Shakes</div>
      </div>
      <div className="meal-section">
      {
        items.map(meal => <Meal key={meal.id} {...meal}/>)
      }
      </div>

    </div>
  );
}

export default App;
