import React from 'react';
import './App.css';
import { Designation } from './components/Designation';
import { Events } from './components/Events';
import { Greeting } from './components/Greeting';
import { Heading } from './components/Heading';

function App() {
  const nameArray = [{
    firstName: "Hikmat",
    lastName: "Bishu Karma"
  },
  {
    firstName: "Hikmat B.k",
    lastName: "Bishu Karma"
  },
  {
    firstName: "Hikmat Bishu Karma",
    lastName: "Bishu Karma"
  }
  ]
  const handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("event",event)
  }
  return (
    <div className="App">
      <Greeting name={nameArray} messageCount={20} />
      <Heading> Hello people</Heading>
      <Designation>
        <Heading>My Designation is Software Developer</Heading>
      </Designation>
      <Events handleClick={handleChange} />
    </div>
  );
}

export default App;
