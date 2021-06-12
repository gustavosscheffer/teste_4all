import { Grid } from '@material-ui/core';
import React from 'react';
import Amount from '../../components/amount';
import MenuCard from '../../components/menuCard';
import Title from '../../components/title';
import FabButton from '../../components/fab'

function Menu() {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Title>
                        Silva Lanches
                    </Title>
                </Grid>
                <Grid item xs={12}>
                    <Amount>
                        6 lugares cadastrados
                    </Amount>
                </Grid>
                <Grid item xs={12}>
                    <MenuCard name='X Bacon' price='R$ 20,50' description='Cat ipsum dolor sit amet, caticus cuteicus bathe private parts with tongue then lick' />
                </Grid>
            </Grid>
            <FabButton/>
        </div>
    )
}

export default Menu;