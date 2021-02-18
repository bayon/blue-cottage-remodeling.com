//
import { Container, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { blue } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";



const theme = createMuiTheme({
  palette: {
    primary:blue,
  }
})

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
  link: {
    textDecoration: "none",
    // color: theme.palette.text.primary,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    backgroundColor: 'white',
    [theme.breakpoints.up('sm')]:{
      backgroundColor: 'black'
    }
  }
}));

export default function Routing() {
  const classes = useStyles();

  return (
  
   <ThemeProvider theme={theme}>
    <Router>
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Link to="/home">
              <Typography variant="h6" className={classes.title}>
                Home
              </Typography>
            </Link>
            <Link to="/about">
              <Typography variant="h6" className={classes.title}>
                About
              </Typography>
            </Link>
            <Link to="/login">
              <Button color="inherit"  className={classes.button}>Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
        
        <Switch>
          <Route exact path="/home">
            <Container maxWidth="sm">
              <Typography variant="h3" gutterBottom>
                Blue Cottage Remodeling
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Container>
          </Route>
          <Route exact path="/about">
            <Container maxWidth="sm">
              <Typography variant="h3" gutterBottom>
                About
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Container>
          </Route>
          <Route exact path="/login">
            <Container maxWidth="sm">login</Container>
          </Route>
        </Switch>
      </>
    </Router>
    </ThemeProvider>
  
  );
}

// function Home() {
//   return (
//     <>
//       <h2>Blue Cottage Remodeling</h2>
//     </>
//   );
// }
