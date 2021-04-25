import React, { Component } from "react";
import { ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";



class EngineerMenu extends Component{

    constructor() {
        super();
    }

   render() {
        return(
            <ListGroup>
                <ListGroupItem tag="a" href="/EngineerProfile" action>
                    Profile
                </ListGroupItem>
                <ListGroupItem tag="a" href="/EngineerCurr" action>
                    Current Projects
                </ListGroupItem>
                <ListGroupItem tag="a" href="/Projects" action>
                    Available Projects
                </ListGroupItem>
                <ListGroupItem tag="a" href="/UpdateProfile" action>
                    Update Profile
                </ListGroupItem>
                <ListGroupItem tag="a" href="#!" action>
                    Logout
                </ListGroupItem>
            </ListGroup>
        )
   }
}

export default (EngineerMenu)