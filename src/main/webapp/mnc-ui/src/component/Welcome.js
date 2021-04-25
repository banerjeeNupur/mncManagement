import React, {Component} from "react";
import {Link} from 'react-router-dom';

class welcome extends Component {
    constructor(props) {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        this.props.history.push('/SignUp');
    }

    render() {
        return (
            <div className= "Welcome">
                <body>
                <div className="content">
                    <h1>A New Way to Organize your Bookmarks</h1>
                    <p>BookShelf is the best platform to help you organize your bookmarks into multiple categories
                        and allows the user to add and save tags to their articles.</p>
                    <button onClick={this.handleSubmit} className="createAccount">Create Account ></button>
                </div>
                <nav>
                    <input type="checkbox" id="check"/>
                    <label htmlFor="check" className="checkBtn">
                        <i className="fas fa-bars"/>
                    </label>
                    <label className="logo">BookShelf</label>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/SignIn">About</Link></li>
                        <li><Link to="/SignIn">Sign In</Link></li>
                        <li><Link to="/SignUp">Sign Up</Link></li>
                        <li className="createAccountShort"><Link to="/SignUp">Create Account</Link></li>
                    </ul>
                </nav>
                </body>
            </div>
        )
    }

}
export default welcome
