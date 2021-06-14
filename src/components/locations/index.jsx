import { Card, Grid, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

function Locations({ place }) {
    const classes = useStyles()

    return (
        <Grid container spacing={0}>
            <Grid item xs={10} md={11}>
                <Link to={`/Menu/${place.id}`}  >
                    <Card className={classes.card}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <div className={classes.name}>
                                    {place.name}
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={classes.amount}>
                                    {place.menuItems.length} pratos
                                </div>
                            </Grid>
                        </Grid>
                    </Card>
                </Link>
            </Grid>
            <Grid item xs={2} md={1} className={classes.grid_align}>
                <Link to={`/Forms/${place.id}`} >
                    <IconButton className={classes.icon_button}>
                        <AddIcon />
                    </IconButton>
                </Link>
            </Grid>
        </Grid>
    )
}

export default Locations;