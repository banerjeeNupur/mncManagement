import React, { Component } from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText'
import FormGroup from '@material-ui/core/FormGroup';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));

class ProfileForm extends Component{

    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <h3>In the update profile section</h3>

                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="my-input">First Name</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">This should display the current val in DB.</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Last Name</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">This should display the current val in DB.</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Address</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">This should display the current val in DB.</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">DOB</InputLabel>
                        <br/><br/>
                        <Input id="my-input" aria-describedby="my-helper-text" type="date"/>
                        <FormHelperText id="my-helper-text">This should display the current val in DB.</FormHelperText>
                    </FormControl>
                    <br/>
                    <InputLabel>Skill Set</InputLabel> <br/>
                    <Row>

                        <Col md={6}>
                            <FormControl>
                                <FormLabel component="legend">FrontEnd</FormLabel>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox   name="gilad" />}
                                        label="Gilad Gray"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox   name="jason" />}
                                        label="Jason Killian"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox   name="antoine" />}
                                        label="Antoine Llorca"
                                    />
                                </FormGroup>
                            </FormControl>
                        </Col>
                        <Col md={6}>
                            <FormControl>
                                <FormLabel component="legend">BackEnd</FormLabel>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox   name="gilad" />}
                                        label="Gilad Gray"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox   name="jason" />}
                                        label="Jason Killian"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox   name="antoine" />}
                                        label="Antoine Llorca"
                                    />
                                </FormGroup>
                            </FormControl>

                        </Col>
                    </Row>



                </FormGroup>

            </div>
        )
    }

}

export default withStyles(useStyles)(ProfileForm)