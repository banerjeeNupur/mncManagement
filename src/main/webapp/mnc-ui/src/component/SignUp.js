import React, {Component} from "react";
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import withStyles from "@material-ui/core/styles/withStyles";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            minWidth: 275,
        },
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    button_margin: {

        // margin: theme.spacing(1),
    }
}));

class SignUp extends Component {


    constructor(props) {
        super();

        this.state = {
            first_name: "",
            last_name: "",
            username: "",
            password: "",
            user_type:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    async handleSubmit(event) {
        event.preventDefault(); //why
        event.stopPropagation(); //why

        let response = await fetch('/employee/registerEmployee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': '*/*'
            },

            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                password: this.state.password,
                username: this.state.first_name,
                user_type:this.state.user_type,
            })
        });
        let status = response.status;
        if (status === 200) {
            this.props.history.push({
                pathname: '/DashBoard',
                customer: await response.json()
            });
        } else if (status === 404) {
            this.setState({
                errorMessage: true
            })
        } else {
            this.props.history.push({
                pathname: '/Error404',
                message: 'Backend server is down'
            });
        }
    }






    render() {
        const { classes } = this.props;
        return (

            <Container maxWidth="sm">
                <div className="signUp">
                    {/*<body>*/}
                    <div className="register">
                        <h1>Create an account</h1>
                        <p>Already have an account?<Link to="/SignIn"> Sign in</Link></p>
                    </div>
                    <br/><br/>
                    {/*<form onSubmit={this.handleSubmit}>*/}
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Sign Up
                            </Typography>

                            <form onSubmit={this.handleSubmit} className={classes.root}>
                                {/*id="standard-basic"*/}
                                <TextField
                                           label="First Name"
                                           name="first_name"
                                           className="first_name"
                                           value={this.state.first_name}
                                           onChange={this.handleChange} />
                                <br/>
                                <TextField
                                           label="Last Name"
                                           name="last_name"
                                           className="last_name"
                                           value={this.state.last_name}
                                           onChange={this.handleChange} />
                                <br/>
                                <TextField
                                           label="Password"
                                           name="password"
                                           className="password"
                                           type="password"
                                           value={this.state.password}
                                           onChange={this.handleChange} />
                                <br/>
                                {/*<TextField id="standard-basic"*/}
                                {/*           label="User Type"*/}
                                {/*           name="user_type"*/}
                                {/*           className="user_type"*/}
                                {/*           value={this.state.user_type}*/}
                                {/*           onChange={this.handleChange}*/}
                                {/*           placeholder="Admin/Manager/Engineer"/>*/}
                                {/*<br/>*/}

                                <label>
                                    <input
                                        type="radio"
                                        name="user_type"
                                        value="admin"
                                        checked={this.state.user_type === "admin"}
                                        onChange={this.handleChange}
                                    /> Admin
                                </label>
                                <br/>

                                <label>
                                    <input
                                        type="radio"
                                        name="user_type"
                                        value="manager"
                                        checked={this.state.user_type === "manager"}
                                        onChange={this.handleChange}
                                    /> Manager
                                </label>
                                <br/>

                                <label>
                                    <input
                                        type="radio"
                                        name="user_type"
                                        value="engineer"
                                        checked={this.state.user_type === "engineer"}
                                        onChange={this.handleChange}
                                    /> Engineer
                                </label>
                                <br/>

                                {/*<button className="registerButton">Register</button>*/}
                                <Button type="submit" variant="outlined" color="primary" size="small">
                                    Register
                                </Button>
                            </form>
                        </CardContent>

                    </Card>
                    {/*</body>*/}
                    {/*</form>*/}
                </div>
            </Container>

        );
    }
}

export default withStyles(useStyles)(SignUp);