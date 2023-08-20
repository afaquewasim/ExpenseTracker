import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpences from './Components/IncomeExpences';
import TransactionList from './Components/TransactionList';
import AddTransection from './Components/AddTransection';

import { GlobalProvider } from './Context/Context';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpences/>
        <TransactionList/>
        <AddTransection/>
      </div>

    </GlobalProvider>
  );
}

export default App;
