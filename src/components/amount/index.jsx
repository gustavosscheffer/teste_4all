import React from 'react';
import {useStyles} from './styles'

function Amount({children}) {
    const classes = useStyles()
  return(
      <div className={classes.amount}>
          {children}
      </div>
  )
}

export default Amount;