import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home/Home/Home";
import Login from "./Home/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./Home/PrivateRoute/PrivateRoute";
import Dashboard from "./Dashboard/Dashboard/Dashboard";
import Orders from "./Dashboard/Orders/Orders";
import Review from "./Home/Review/Review";
import AddWorker from "./Dashboard/AddWorker/AddWorker";
import DeleteData from "./Dashboard/DeleteData/DeleteData";


export const UserContext=createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
     <Switch>
     <Route exact path="/">
      <Home/>
       </Route>
       <Route  path="/home">
      <Home/>
       </Route>
       <PrivateRoute path="/dashboard">
         <Dashboard/>
       </PrivateRoute>
       <Route path="/orders">
         <Orders/>
       </Route>
       <Route path="/review">
         <Review></Review>
       </Route>
       <Route path='/login'>
         <Login></Login>

       </Route>
       <Route path='/delete'>
         <DeleteData></DeleteData>
       </Route>
       <PrivateRoute path='/addWorker'>
         <AddWorker></AddWorker>
       </PrivateRoute>
       
      
     </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
