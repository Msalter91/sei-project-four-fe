/* eslint-disable semi */
import React from 'react';
import axios from 'axios';

function App() {
  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/dogs');
      console.log(res.data);
    };
    getData();
  });

  return <h1 className="text-3xl font-bold underline"> Hello world! </h1>;
}

export default App;
