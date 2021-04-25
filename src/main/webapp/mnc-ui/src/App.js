import React, {Component} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

import SignUp from "./component/SignUp";
import SignIn from "./component/SignIn";
import AdminDashboard from "./component/AdminDashboard";
import SearchUser from "./component/SearchUser";
import EngineerDashboard from "./component/EngineerDashboard";
import EngineerMenu from "./component/EngineerMenu";
import EngineerCurr from "./component/EngineerCurr";

class App extends Component {
    render() {
        return (

            <EngineerDashboard></EngineerDashboard>
            // <Router>
            //     <Route exact path='/' component={EngineerDashboard}>
            //     </Route>
            //     {/*<Route exact path="/SignUp" component={SignUp}>*/}
            //     {/*</Route>*/}
            //     {/*<Route exact path="/SignIn" component={SignIn}>*/}
            //     {/*</Route>*/}
            //     {/*<Route exact path="/AdminDashboard" component={AdminDashboard}>*/}
            //     {/*</Route>*/}
            //     {/*<Route exact path="/SearchUser" component={SearchUser}>*/}
            //     {/*</Route>*/}
            //
            //
            // </Router>
        )
    }
}

export default App;
