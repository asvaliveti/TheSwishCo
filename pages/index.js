import Head from 'next/head'
import {React, Component} from 'react'
import About from './about'
import { AppBar, Toolbar, IconButton, Typography, TextField } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PrimarySearchAppBar from "../components/appbar"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#FFFFFF",
    '&:hover': {
      backgroundColor: "#FFFFFF",
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    height: '100%',
    position: 'relative',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textfield: {
    color: "#ffffff",
    padding: '10px',
    height: '90%',
    margin: '5px 0px 0px 0px'
  }
}));

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <PrimarySearchAppBar/>
        </main>
      </div>
    )
  }
}
