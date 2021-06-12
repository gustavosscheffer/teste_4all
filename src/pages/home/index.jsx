import { Grid } from '@material-ui/core';
import React from 'react';
import Locations from '../../components/locations';
import Title from '../../components/title'
import Amount from '../../components/amount'

function Home() {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Title>
                        Lugares
                    </Title>
                </Grid>
                <Grid item xs={12}>
                    <Amount>
                        6 lugares cadastrados
                    </Amount>
                </Grid>
                <Grid item xs={12}>
                    <Locations name='Silva' amount="51" />
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;