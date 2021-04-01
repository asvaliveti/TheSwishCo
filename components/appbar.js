import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Popper, Button, Icon } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(theme => ({
  icon: {
    color: "#474747"
  },
  paper: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  dropdown: {
    fontFamily: 'Helvetica',
  },
  button: {
    color: "#6e6e6e",

  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
      <AppBar position="fixed" style={{backgroundColor: "#fefefe"}}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.icon}
            color="inherit"
            aria-label="open drawer"
          >
            <AppsIcon />
          </IconButton>
          <div>
            <Button type="button" onClick={handleClick} className={classes.button}>
              Men
              <ArrowDropDownIcon style={{color: "#e7522b"}}/>
            </Button>
            <Popper open={open} anchorEl={anchorEl} style={{marginTop: 5}}>
              <div className={classes.paper}>The content of the Popper.</div>
            </Popper>
          </div>
          <div>
            <Button type="button" onClick={handleClick} className={classes.button}>
              Women
              <ArrowDropDownIcon style={{color: "#e7522b"}}/>
            </Button>
            <Popper open={open} anchorEl={anchorEl} style={{marginTop: 5}}>
              <div className={classes.paper}>The content of the Popper.</div>
            </Popper>
          </div>
          <div>
            <Button type="button" className={classes.button}>
              Sale
            </Button>
          </div>
          <div style={{marginLeft: "auto", marginRight: "auto"}}>
            <img src="./logo.jpg"/>
          </div>
          <div style={{marginLeft: "auto", marginRight: 0}}>
          <Button type="button" className={classes.button}>
            Customer Support
          </Button>
            <IconButton
              edge='end'
              className={classes.icon}
              aria-label="open drawer"
            >
              <ShoppingCartIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
  );
}
