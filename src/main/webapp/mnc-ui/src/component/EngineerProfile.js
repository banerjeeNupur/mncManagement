import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Row } from "reactstrap";

class EngineerProfile extends Component{
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <h1>This'll have the user details</h1>
                    </Row>


                </Container>
            </div>
        )
    }
}

export default EngineerProfile