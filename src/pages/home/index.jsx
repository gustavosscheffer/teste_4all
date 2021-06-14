import { Grid } from '@material-ui/core';
import React from 'react';
import Locations from '../../components/locations';
import Title from '../../components/title'
import Amount from '../../components/amount'
import Logo from '../../components/logo'
import usePlaces from './hooks';

function Home() {

    const {states, actions} = usePlaces()
    
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                    <Logo />
                </Grid>
                <Grid item xs={12}>
                    <Title>
                        Lugares
                    </Title>
                </Grid>
                <Grid item xs={12}>
                    <Amount>
                        {actions.onCountPlaces()} lugares cadastrados
                    </Amount>
                </Grid>
                <Grid item xs={12}>
                    {states.places.map(place => (
                        <Locations place={place} key={place.id} />
                    ))}
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;