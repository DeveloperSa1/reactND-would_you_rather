import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'self-end',
    paddingTop: '9rem',
  },
  button : {
      textAlign:"center"
  }
});

export default function NotFound() {
  const classes = useStyles();
const authedUser = localStorage.getItem("user") || null ;
  return (
      <>
        <CssBaseline />
      <Container className={classes.root} maxWidth="sm">
      <Typography color="primary" align="center" variant="h3" gutterBottom>
       Sorry,The Page You Looking For  isn't Found <ErrorIcon fontSize="large" color="primary"/>
      </Typography>
     
     <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            href="/"
          >
            {!authedUser ? ('Back to Login Page' ) : ('Back To Home Page')}
          </Button>
      </Container>
     </>
  );
}