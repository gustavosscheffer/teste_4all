import { Card, Grid, IconButton } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles'
import AddIcon from '@material-ui/icons/Add';

function Locations({ name, amount }) {
    const classes = useStyles()
    return (
        <Grid container spacing={0}>
            <Grid item xs={10}>
                <Card className={classes.card}>
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
            <Grid item xs={2} className={classes.grid_align}>
                <IconButton className={classes.icon_button}>
                    <AddIcon />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default Locations;