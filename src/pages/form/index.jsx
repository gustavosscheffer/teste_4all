import { Button, Grid } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React from 'react';
import CurrencyInput from 'react-currency-input';
import { useHistory } from 'react-router-dom';
import Logo from '../../components/logo';
import Title from '../../components/title';
import usePlaceForm from './hooks';
import { useStyles } from './styles';

function Forms() {
    const classes = useStyles()
    const history = useHistory()
    const { states } = usePlaceForm()
    const onGoback = () => history.goBack()

    return (
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
                <div className={classes.label}>
                    Nome do prato
                </div>
                <input placeholder='Prato' className={classes.inputs} />
            </Grid>
            <Grid item xs={12}>
                <div className={classes.label}>
                    Valor
                </div>
                <CurrencyInput prefix="R$" value="20.00" decimalSeparator="," className={classes.inputs} />
            </Grid>
            <Grid item xs={12}>
                <div className={classes.label}>
                    Descrição do prato
                </div>
                <textarea placeholder='Insira uma descrição' className={classes.text_area} />
                <div className={classes.obs}>
                    *A descrição deve conter até 200 caracteres
                </div>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
                <Button className={classes.button_save}>
                    Salvar
                </Button>
            </Grid>
        </Grid>
    )
}

export default Forms;