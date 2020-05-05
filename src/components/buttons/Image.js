import React from 'react';
import { ButtonBase } from '@material-ui/core';

const Image = ({label, image, classes}) => {
  return(
    <>
    <div style={{
    color: 'black',
    border: '1px solid green',
  }}
  >
    <ButtonBase className={classes.image}>
    <div>
      <img className={classes.img}  src={`${image}`} />
      <label>{label}</label>
      </div>
    </ButtonBase>
    </div>
    </>
  )
}

export default Image;
