import React from 'react';
import {useStyles} from './styles'

function Title({children}) {
    const classes = useStyles()
  return(
      <div className={classes.title}>
          {children}
      </div>
  )
}

export default Title;