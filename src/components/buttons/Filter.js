import React from 'react';
import Image from './Image';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Filter = ({title, images, labels, classes}) => {
  console.log(labels);
  return(
    <div className={classes.root} > 
    {title}
    <Paper className={classes.paper}>
      <Grid container 
      alignItems="center"
      justify="center">
      {images.map((button_image, i) => {
        return(
            <Image label={labels[i]} image={images[i]} classes={classes}/>
        )
      })}
      </Grid>
    </Paper>
    </div>
  )
}

export default Filter;

