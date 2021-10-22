
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import AuthProvider from './context/AuthProvider';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import Session from './Components/Session/Session';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
          <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path= '/service/:serviceId'>
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='/session'>
            <Session></Session>
          </Route>
          <Route path='/blogs'>
            <Blogs></Blogs>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
    </BrowserRouter> 
    </AuthProvider>
  );
}

export default App;
