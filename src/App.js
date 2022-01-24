import React from 'react';
import Routes from './routes'

import axios from 'axios';

async function getUserData(){
  const {data : userInfo} = await axios.get('https://api.github.com/users/PedroAraripe')
  console.log(userInfo)
}

function App() {

  return (
      <Routes />
  );
}

export default App;
