import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";

class Header extends Component{

    constructor() {
        super();
    }

    render() {
        return(
            <div  className="my-3">
                <h1 align="text-left">Calvin and Hobbes Co.</h1>
            </div>
        )
    }
}

export default (Header)