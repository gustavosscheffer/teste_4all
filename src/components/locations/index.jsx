import { Card, Grid, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStyles } from './styles';

function Locations({ name, amount }) {
    const classes = useStyles()
    let history = useHistory();

    function handleClick() {
        history.push("/Menu");
    }

    function handleClickIconButton() {
        history.push("/Forms");
    }

    return (
        <Grid container spacing={0}>
            <Grid item xs={10} md={11}>
                <Card className={classes.card} onClick={handleClick}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <div className={classes.name}>
                                {name}
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.amount}>
                                {amount}
                            </div>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={2} md={1} className={classes.grid_align}>
                <IconButton className={classes.icon_button} onClick={handleClickIconButton}>
                    <AddIcon />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default Locations;