import React, {Component} from "react";

// import {Link} from "react-router-dom";





class SignIn extends Component{


    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errorMessage: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();

        let response = await fetch('/employee/validateLogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        });
        let status = response.status;
        if (status === 200) {
            this.props.history.push({
                pathname: '/AdminDashBoard',
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

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    render(){
        // const {classes} = this.props;
        // const classes = useStyles();
        return(
            <div>
                <div className="signIn">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            name="username"
                            required="True"
                            className="username"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        <br/>
                        <h2 className="name">Password</h2>
                        <input
                            type="password"
                            name="password"
                            required="True"
                            className="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <h3 style={{display: this.state.errorMessage ? "block" : "none"}}>Incorrect
                            Username/Password</h3>
                        <button className="registerButton" disabled={!this.validateForm}>Sign in</button>
                    </form>
                </div>
            </div>
        );
    }



}

// export default withStyles(useStyles)(SignIn)
export default SignIn