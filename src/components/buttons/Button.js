import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        
      },
      
    },
  }));
  /*
  const BootstrapButton = withStyles({
    root: {
        backgroundColor: '#1724ab'
    },
  })(Button);
*/

  export default function Buttons({label, variant}) {
    const classes = useStyles();
  
    return (
        <div className={classes.root}>
        <Button variant={`${variant}`} color="primary" disableElevation>
        {label}
      </Button>
      </div>
    );
  }