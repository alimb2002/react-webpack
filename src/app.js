import React , {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Ninjas from './components/Ninjas';
import Addninja from './components/Addninja';

const App = () => {
  const [ninjas,setNinjas] = useState([
    { name: 'Ali' , age :30 , belt: 'black', id: 1},
    { name: 'Eric' , age :40 , belt: 'blue', id:2},
    { name: 'Jim' , age :20 , belt: 'red', id:3}
  ]);
 useEffect( () => {
   console.log('hi');
 },[ninjas] );
 
  const addNinja = (ninja) => {
    setNinjas([...ninjas,ninja]);
  }

const deleteNinja = (id) => {
  setNinjas(ninjas.filter(ninja=>ninja.id !== id)  );
}
  return(
    <div>
      <Navbar/>
        <div className="container">
          <h3>Add new Ninja</h3>
          <Addninja addNinja={ addNinja }  />
          <br/>
          <h2>Ninja List</h2>
          <Ninjas ninjas={ ninjas } deleteNinja ={ deleteNinja }/>
        </div>
    </div>
  )
}

export default App;
  



