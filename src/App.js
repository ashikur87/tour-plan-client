import logo from './logo.svg';
import './App.css';
import Header from './components/Home/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import AuthProvider from './components/Contexts/AuthProvider';
import Login from './components/Firebase/Login/Login';
import Services from './components/Home/services/Services';
import PrivateRoute from './components/Home/PrivateRoute/PrivateRoute';
import Booking from './components/Booking/Booking';

import AddService from './components/AddService/AddService';
import ManageService from './components/Home/ManageService/ManageService';

function App() {
  return (
    <div className="App">
<AuthProvider>
<BrowserRouter>
      <Header></Header>
      <Switch>
      <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route exact path='/home'>
        <Home></Home>
        </Route>
        <Route exact path='/services'>
        <Services></Services>
        </Route>
        <PrivateRoute path='/booking/:serviceId'>
            <Booking></Booking>
        </PrivateRoute>
        <Route path='/addservice'>
          <AddService></AddService>
        </Route>
        <Route path="/manageservice">
              <ManageService></ManageService>
          </Route>
        <Route path='/login'>
        <Login></Login>
        </Route>
      </Switch>
      </BrowserRouter>
</AuthProvider>
    </div>
  );
}

export default App;
