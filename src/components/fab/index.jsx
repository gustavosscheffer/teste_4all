import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {useStyles} from './styles'
import { useHistory } from 'react-router-dom';

function FabButton() {
    const classes = useStyles()
    let history = useHistory();

    function handleClick() {
        history.push("/Forms");
    }
    return (
        <div className={classes.fabcontent}>
            <Fab aria-label="add" className={classes.fab} onClick={handleClick}>
                <AddIcon />
            </Fab>
        </div>
    )
}

export default FabButton;