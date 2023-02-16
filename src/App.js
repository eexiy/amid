import React, { useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { useDispatch } from 'react-redux';
import { addCompanies } from './redux/companies/companiesActions';

import data from './mock/data.json'

import { Footer } from './components/Footer/Footer';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addCompanies(data))
  })

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
