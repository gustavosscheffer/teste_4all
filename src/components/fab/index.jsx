import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {useStyles} from './styles'

function FabButton() {
    const classes = useStyles()
    return (
        <div className={classes.fabcontent}>
            <Fab aria-label="add" className={classes.fab}>
                <AddIcon />
            </Fab>
        </div>
    )
}

export default FabButton;