import { Grid } from '@material-ui/core';
import React from 'react';
import Amount from '../../components/amount';
import MenuCard from '../../components/menuCard';
import Title from '../../components/title';
import FabButton from '../../components/fab'
import Logo from '../../components/logo'
import usePlaceMenu from './hooks';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Menu() {
    const { states } = usePlaceMenu()
    const history = useHistory()
    const onGoback = () => history.goBack()
    
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{ display:"flex", alignItems:"center", justifyContent:"center"}}>
                <ArrowBackIosIcon onClick={onGoback} style={{color:"white"}}/>
                    <Logo />
                </Grid>
                <Grid item xs={12}>
                    <Title>
                        {states.place.name}
                    </Title>
                </Grid>
                <Grid item xs={12}>
                    <Amount>
                        {states.place.menuItems.length} pratos
                    </Amount>
                </Grid>
                <Grid item xs={12}>
                    {states.place.menuItems.map((items, index) => (
                        <MenuCard items={items} key={index} />
                    ))}
                </Grid>
            </Grid>
            <Link to={`/Forms/${states.place.id}`} >
                <FabButton />
            </Link>
        </div>
    )
}

export default Menu;