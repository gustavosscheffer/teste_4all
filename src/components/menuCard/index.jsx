import { Card, Grid } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

function MenuCard({items}) {
    const classes = useStyles()
    return (
        <Grid container>
            <Grid item xs={12}>
                <Card className={classes.card}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <div className={classes.name}>
                                {items.name}
                            </div>
                        </Grid>
                        <Grid item xs={6} className={classes.grid_align}>
                            <div className={classes.price}>
                                {items.price}
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.description}>
                                {items.description}
                            </div>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    )
}

export default MenuCard;