import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeContainer from './containers/Home';
import CustomersContainer from './containers/Customers';
import CustomerContainer from './containers/Customer';

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<HomeContainer />} />
            <Route exact path='/customers' element={<CustomersContainer />} />
            <Route exact path='/customers/new' element={<div><h1>test3</h1></div>} />                 
            <Route exact path='/customers/:dni/*' element={<CustomerContainer />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
