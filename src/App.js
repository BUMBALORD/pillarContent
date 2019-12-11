import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginTop: 5
  },
  logo: {
    maxWidth: 160,
  },
}));



function App() {
  const classes = useStyles();

  return (
    <div>
    <AppBar 
      position="static" 
      titleStyle={{verticalAlign:'middle'}}
    >
      <Toolbar>
      <Grid
        justify="space-between"
        container 
        spacing={24}
      >
      <Grid item>
        <Link href="https://www.kloudless.com">
          <img src="https://mlpwp7ewkcnn.i.optimole.com/w:auto/h:auto/q:90/https://kloudless.com/wp-content/uploads/2019/01/kloudless@2x.png" alt="logo" className={classes.logo} />
        </Link>
      </Grid>
      <Grid item>
        <div>
          <Typography variant="h6" className={classes.title} style={{ flex: 1 }}>
            Kloudless Guide To API Integrations
          </Typography> 
        </div>
      </Grid>  
      </Grid>
      </Toolbar>
    </AppBar>
    <Container maxWidth="lg">
      <Typography variant="h1" align="center">
            The Official Kloudless Guide To API Integrations
      </Typography> 
    </Container>

    </div>
  );
}

export default App;
