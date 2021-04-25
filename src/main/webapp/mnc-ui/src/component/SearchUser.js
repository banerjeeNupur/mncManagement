import React, {Component} from "react";

class SearchUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            contactNumber: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit(event) {
        event.preventDefault(); //why
        event.stopPropagation(); //why

        let response = await fetch('/customer/registerCustomer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': '*/*'
            },

            body: JSON.stringify({
                customerName: this.state.firstName + " " + this.state.lastName,
                password: this.state.password,
                emailId: this.state.email,
                contactNumber: this.state.contactNumber,
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

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <div className="search">
                <form onSubmit={this.handleSubmit()}>
                    <input
                        type="text"
                        name="username"
                        required="True"
                        className="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </form>


            </div>
        )


    }
}

export default SearchUser