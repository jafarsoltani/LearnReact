import React from 'react'

const App = () => {
  const myName = 'Jafar';
  const names = ['Brad', 'Mary', 'Joe'];
  const loggedIn = false;
const styles = {
  color: 'green', 
  fontSize: '24px'
};

  return (
    <>
      <div className='text-5xl'>This is my first app</div>
      <p style={styles}>My name is {myName}</p>  
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
          ))}
      </ul>
      {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
    </>
  )
  

}

export default App