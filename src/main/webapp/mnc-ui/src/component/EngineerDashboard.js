import React, { Component } from "react";
import EngineerMenu from "./EngineerMenu";
import EngineerCurr from "./EngineerCurr";
import Header from "./Header";
import {Container,Row,Col} from "reactstrap";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import EngineerProfile from "./EngineerProfile";
import Projects from "./Projects";
import ProfileForm from "./ProfileForm";


class EngineerDashboard extends Component{
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <Router>
                    <Container>
                        <Header/>
                        {/*need to add margin here and remove br */}

                        <Row>
                            <Col md={4}>
                                {/*<h2>Menu</h2>*/}
                                <EngineerMenu></EngineerMenu>
                            </Col>
                            <Col md={8}>
                                {/*<h2>Content</h2>*/}
                                <Route exact path="/" component={EngineerCurr}/>
                                <Route exact path="/EngineerCurr" component={EngineerCurr}/>
                                <Route exact path="/EngineerProfile" component={EngineerProfile}/>
                                <Route exact path="/Projects" component={Projects}/>
                                <Route exact path="/UpdateProfile" component={ProfileForm}/>

                            </Col>
                        </Row>
                    </Container>
                </Router>

            </div>
        )
    }
}

export default EngineerDashboard