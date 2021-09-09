import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const nayoks = ["Ariyan", "ismail", "Sumon", "Emon", "Dulal", "Sovon", "Rakib"]

  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Primiere E1', price: '$125.99'}
  
  ]




  return (
    <div className="App">
      <header className="App-header">
        
          <p>I am a react person</p>

          <Counter></Counter>
          <Users></Users>

          <ul>
            {
              nayoks.map(nayok => <li>{nayok}</li>)
            }
            
            {
              products.map(product => <li>{product.name} {product.price}</li>)
            }
          </ul>

          {
            products.map(pd => <Product product={pd}> </Product>)
          }

          <Person name="Ariyan" job ="Web developer"></Person>
          <Person name="ismail" job="Cyber security Expaer"></Person>
          <Person></Person>

      </header>
    </div>
  );
}

function Counter(){

  const [count, setCount] = useState(0);
  //const handelIncrease = () => setCount(count + 1);

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick = { () => setCount( count - 1 )}>Decrease</button>
        <button onClick={ () => setCount( count + 1 ) }>Increase</button>
    </div>
  )
}

function Users(){

  const [users, serUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => serUsers(data))
  }, [])

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      {
        users.map(user => <li>{user.name + "  "} {"Email: "}{user.email}</li>)
      }
    </div>
  )
}

function Product(props){

  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }

  const {name, price} = props.product;

  return ( 
    <div style={productStyle}>
        <h3>{name} </h3>
        <h4>{price}</h4>
        <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  
  return (
    <div style={{border: '2px solid gold', width: '400px', margin:'10px', padding:'10px'}}>
        <h3>My Name: {props.name} </h3>
        <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;
